import { AudioListener } from './audioListener'

// TODO(yandeu): add links in descriptions

/**
 * Create a audio object.
 * This uses the Web Audio API.
 */
export class Audio {
  /** Whether to start playback automatically. Default is false. */
  autoplay: boolean
  /** The AudioContext of the listener given in the constructor. */
  context: AudioContext
  /** Modify pitch, measured in cents. +/- 100 is a semitone. +/- 1200 is an octave. Default is 0. */
  detune: number
  /** Overrides the duration of the audio. Same as the duration parameter of AudioBufferSourceNode.start(). Default is undefined to play the whole buffer. */
  duration: number | undefined
  /** Represents an array of BiquadFilterNodes. Can be used to apply a variety of low-order filters to create more complex sound effects. Filters are set via Audio.setFilter or Audio.setFilters. */
  filters: BiquadFilterNode[]
  /** A GainNode created using AudioContext.createGain(). */
  gain: GainNode
  /** Whether playback can be controlled using the play(), pause() etc. methods. Default is true. */
  hasPlaybackControl: boolean
  /** Whether the audio is currently playing. */
  isPlaying: boolean
  /** A reference to the listener object of this audio. */
  listener: AudioListener
  /** An offset to the time within the audio buffer that playback should begin. Same as the offset parameter of AudioBufferSourceNode.start(). Default is 0. */
  offset: number
  /** Speed of playback. Default is 1. */
  playbackRate: number
  /** An AudioBufferSourceNode created using AudioContext.createBufferSource(). */
  source: AudioBufferSourceNode | null // | MediaElementAudioSourceNode | MediaStreamAudioSourceNode | null
  /** Type of the audio source. Default is string 'empty'. */
  sourceType: string
  /** String denoting the type, set to 'Audio'. */
  type: string

  private buffer: AudioBuffer | null

  private loop: boolean
  private loopEnd: number
  private loopStart: number

  private _connected: boolean
  private _progress: number
  private _startedAt: number

  /**
   * @param listener [AudioListener](https://threejs.org/docs/#api/en/audio/AudioListener) instance.
   */
  constructor(listener: AudioListener) {
    this.type = 'Audio'

    this.listener = listener
    this.context = listener.context

    this.gain = this.context.createGain()
    this.gain.connect(listener.getInput())

    this.autoplay = false

    this.buffer = null
    this.detune = 0
    this.loop = false
    this.loopStart = 0
    this.loopEnd = 0
    this.offset = 0
    this.duration = undefined
    this.playbackRate = 1
    this.isPlaying = false
    this.hasPlaybackControl = true
    this.source = null
    this.sourceType = 'empty'

    this._startedAt = 0
    this._progress = 0
    this._connected = false

    this.filters = []
  }

  /** Return the gainNode. */
  getOutput() {
    return this.gain
  }

  /**
   * Setup the source to the audioBuffer, and sets sourceType to 'audioNode'.
   * Also sets hasPlaybackControl to false.
   */
  setNodeSource(audioNode: AudioBufferSourceNode) {
    this.hasPlaybackControl = false
    this.sourceType = 'audioNode'
    this.source = audioNode
    this.connect()

    return this
  }

  /**
   * Applies the given object of type HTMLMediaElement as the source of this audio.
   * Also sets hasPlaybackControl to false.
   */
  setMediaElementSource(mediaElement: HTMLMediaElement) {
    this.hasPlaybackControl = false
    this.sourceType = 'mediaNode'
    // @ts-expect-error
    this.source = this.context.createMediaElementSource(mediaElement)
    this.connect()

    return this
  }

  /**
   * Applies the given object of type MediaStream as the source of this audio.
   * Also sets hasPlaybackControl to false.
   */
  setMediaStreamSource(mediaStream: MediaStream) {
    this.hasPlaybackControl = false
    this.sourceType = 'mediaStreamNode'
    // @ts-expect-error
    this.source = this.context.createMediaStreamSource(mediaStream)
    this.connect()

    return this
  }

  /**
   * Setup the source to the audioBuffer, and sets sourceType to 'buffer'.
   * If autoplay, also starts playback.
   */
  setBuffer(audioBuffer: AudioBuffer) {
    this.buffer = audioBuffer
    this.sourceType = 'buffer'

    if (this.autoplay) this.play()

    return this
  }

  /** If hasPlaybackControl is true, starts playback. */
  play(delay: number = 0) {
    if (this.isPlaying === true) {
      console.warn('THREE.Audio: Audio is already playing.')
      return
    }

    if (this.hasPlaybackControl === false) {
      console.warn('THREE.Audio: this Audio has no playback control.')
      return
    }

    this._startedAt = this.context.currentTime + delay

    const source = this.context.createBufferSource()
    source.buffer = this.buffer
    source.loop = this.loop
    source.loopStart = this.loopStart
    source.loopEnd = this.loopEnd
    source.onended = this.onEnded.bind(this)
    source.start(this._startedAt, this._progress + this.offset, this.duration)

    this.isPlaying = true

    this.source = source

    this.setDetune(this.detune)
    this.setPlaybackRate(this.playbackRate)

    return this.connect()
  }

  /** If hasPlaybackControl is true, pauses playback. */
  pause() {
    if (this.hasPlaybackControl === false) {
      console.warn('THREE.Audio: this Audio has no playback control.')
      return
    }

    if (this.isPlaying === true) {
      // update current progress

      this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate

      if (this.loop === true) {
        // ensure _progress does not exceed duration with looped audios

        this._progress = this._progress % (this.duration || this.buffer!.duration)
      }

      this.source?.stop()
      this.source!.onended = null

      this.isPlaying = false
    }

    return this
  }

  /** If hasPlaybackControl is enabled, stops playback. */
  stop() {
    if (this.hasPlaybackControl === false) {
      console.warn('THREE.Audio: this Audio has no playback control.')
      return
    }

    this._progress = 0

    this.source?.stop()
    this.source!.onended = null
    this.isPlaying = false

    return this
  }

  /** Connect to the Audio.source. This is used internally on initialisation and when setting / removing filters. */
  connect() {
    if (this.filters.length > 0) {
      this.source?.connect(this.filters[0])

      for (let i = 1, l = this.filters.length; i < l; i++) {
        this.filters[i - 1].connect(this.filters[i])
      }

      this.filters[this.filters.length - 1].connect(this.getOutput())
    } else {
      this.source?.connect(this.getOutput())
    }

    this._connected = true

    return this
  }

  /** Disconnect from the Audio.source. This is used internally when setting / removing filters. */
  disconnect() {
    if (this.filters.length > 0) {
      this.source?.disconnect(this.filters[0])

      for (let i = 1, l = this.filters.length; i < l; i++) {
        this.filters[i - 1].disconnect(this.filters[i])
      }

      this.filters[this.filters.length - 1].disconnect(this.getOutput())
    } else {
      this.source?.disconnect(this.getOutput())
    }

    this._connected = false

    return this
  }

  /** Returns the filters array. */
  getFilters() {
    return this.filters
  }

  /**
   * value - arrays of filters.
   * Applies an array of BiquadFilterNodes to the audio.
   */
  setFilters(value: BiquadFilterNode[]) {
    if (!value) value = []

    if (this._connected === true) {
      this.disconnect()
      this.filters = value.slice()
      this.connect()
    } else {
      this.filters = value.slice()
    }

    return this
  }

  /** Returns the first element of the filters array. */
  getFilter(): BiquadFilterNode {
    return this.getFilters()[0]
  }

  /** Applies a single BiquadFilterNode to the audio. */
  setFilter(filter: BiquadFilterNode) {
    return this.setFilters(filter ? [filter] : [])
  }

  /** If hasPlaybackControl is enabled, set the playbackRate to value. */
  setPlaybackRate(value: number) {
    if (this.hasPlaybackControl === false) {
      console.warn('THREE.Audio: this Audio has no playback control.')
      return
    }

    this.playbackRate = value

    if (this.isPlaying === true) {
      this.source?.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01)
    }

    return this
  }

  /** Return the value of playbackRate. */
  getPlaybackRate() {
    return this.playbackRate
  }

  /** Called automatically when playback finished. */
  onEnded() {
    this.isPlaying = false
  }

  /** Return the value of source.loop (whether playback should loop). */
  getLoop() {
    if (this.hasPlaybackControl === false) {
      console.warn('THREE.Audio: this Audio has no playback control.')
      return false
    }

    return this.loop
  }

  /** Set source.loop to value (whether playback should loop). */
  setLoop(value: boolean) {
    if (this.hasPlaybackControl === false) {
      console.warn('THREE.Audio: this Audio has no playback control.')
      return
    }

    this.loop = value

    if (this.isPlaying === true) {
      this.source!.loop = this.loop
    }

    return this
  }

  /** Set source.loopStart to value. */
  setLoopStart(value: number) {
    this.loopStart = value

    return this
  }

  /** Set source.loopEnd to value. */
  setLoopEnd(value: number) {
    this.loopEnd = value

    return this
  }

  /** Return the current volume. */
  getVolume() {
    return this.gain.gain.value
  }

  /** Set the volume. */
  setVolume(value: number) {
    this.gain.gain.setTargetAtTime(value, this.context.currentTime, 0.01)

    return this
  }

  private setDetune(value: number) {
    this.detune = value

    if (this.source?.detune === undefined) return // only set detune when available

    if (this.isPlaying === true) {
      this.source?.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01)
    }

    return this
  }

  private getDetune() {
    return this.detune
  }
}
