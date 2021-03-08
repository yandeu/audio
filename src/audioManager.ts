import { Audio } from './audio/audio'
import { AudioAnalyser } from './audio/audioAnalyser'
import { AudioListener } from './audio/audioListener'
import { AudioLoader } from './audio/audioLoader'
import { FileLoader } from 'three/src/loaders/FileLoader'
import { VERSION } from './version'

export const AudioFormats = {
  aac: 'audio/aac',
  caf: 'audio/x-caf',
  flac: 'audio/flac',
  mp3: 'audio/mpeg',
  mp4: 'audio/mp4',
  ogg: 'audio/ogg',
  wav: 'audio/wav',
  webm: 'audio/webm'
}

export class AudioManager {
  static get VERSION() {
    return VERSION
  }

  private _loader: AudioLoader
  private _listener: AudioListener
  private _fileLoader: FileLoader

  private cache = new Map()

  public analyser(audio: Audio, fftSize: number = 2048) {
    return new AudioAnalyser(audio, fftSize)
  }

  constructor() {
    this._loader = new AudioLoader()
    this._listener = new AudioListener()
    this._fileLoader = new FileLoader()
  }

  public get listener() {
    return this._listener
  }

  public load(key: string, url: string, ...formats: Array<keyof typeof AudioFormats>): Promise<void> {
    if (formats) {
      const format = this.getBestFormat(formats)
      url += `.${format}`
    }

    this.cache.set(key, url)

    return new Promise(resolve => {
      this._fileLoader.setResponseType('arraybuffer')
      this._fileLoader.load(url, file => {
        return resolve()
      })
    })
  }

  public add(key: string): Promise<Audio> {
    const url = this.cache.get(key)

    const noop = () => {}

    return new Promise(resolve => {
      this._loader.load(
        url,
        (buffer: AudioBuffer) => {
          const audio = new Audio(this._listener)
          audio.setBuffer(buffer)
          return resolve(audio)
        },
        noop,
        noop
      )
    })
  }

  private getBestFormat(f: Array<keyof typeof AudioFormats>) {
    let myAudio = document.createElement('audio')

    const supported: { support: string; format: string }[] = []

    for (const format of f) {
      if (!AudioFormats[format]) continue
      const isSupported = myAudio.canPlayType(AudioFormats[format])
      if (isSupported) supported.push({ support: isSupported, format })
    }

    supported.sort((a, b) => {
      if (a.support > b.support) return -1
      if (a.support < b.support) return 1
      return 0
    })

    // @ts-ignore
    myAudio = null

    return supported[0].format
  }
}

// TESTING SECTION

// const audioManager = new AudioManager()
// audioManager.add('mysound').then(audio => {
//   audio.play()
//   audio.pause()

//   const analyser = audioManager.analyser(audio)
// })
