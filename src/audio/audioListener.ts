import { AudioContext } from './audioContext'
import { Clock } from 'three/src/core/Clock'

/**
 * The AudioListener represents a virtual listener of the all positional and non-positional audio effects in the scene.
 * A three.js application usually creates a single instance of AudioListener. It is a mandatory construtor parameter for audios entities like Audio and PositionalAudio.
 * In most cases, the listener object is a child of the camera. So the 3D transformation of the camera represents the 3D transformation of the listener.
 */
export class AudioListener {
  /** The AudioContext of the listener given in the constructor. */
  context: AudioContext
  /** Default is null. */
  filter: AudioNode | null
  /** A GainNode created using AudioContext.createGain(). */
  gain: GainNode
  /** Time delta value for audio entities. Use in context of AudioParam.linearRampToValueAtTimeDefault(). Default is 0. */
  timeDelta: number
  /** String denoting the type, set to 'AudioListener'. */
  type: string

  private _clock: Clock

  constructor() {
    this.type = 'AudioListener'

    this.context = AudioContext.getContext()

    this.gain = this.context.createGain()
    this.gain.connect(this.context.destination)

    this.filter = null

    this.timeDelta = 0

    this._clock = new Clock()
  }

  /** Return the gainNode. */
  getInput(): GainNode {
    return this.gain
  }

  /** Set the filter property to null. */
  removeFilter(): AudioListener {
    if (this.filter !== null) {
      this.gain.disconnect(this.filter)
      this.filter.disconnect(this.context.destination)
      this.gain.connect(this.context.destination)
      this.filter = null
    }

    return this
  }

  /** Returns the value of the filter property. */
  getFilter(): AudioNode {
    return this.filter as AudioNode
  }

  /** Set the filter property to value. */
  setFilter(value: AudioNode) {
    if (this.filter !== null) {
      this.gain.disconnect(this.filter)
      this.filter.disconnect(this.context.destination)
    } else {
      this.gain.disconnect(this.context.destination)
    }

    this.filter = value
    this.gain.connect(this.filter)
    this.filter.connect(this.context.destination)

    return this
  }

  /** Return the volume. */
  getMasterVolume(): number {
    return this.gain.gain.value
  }

  /** Set the volume. */
  setMasterVolume(value: number) {
    this.gain.gain.setTargetAtTime(value, this.context.currentTime, 0.01)

    return this
  }
}
