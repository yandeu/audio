import { Audio } from './audio'

/**
 * Create a AudioAnalyser object, which uses an AnalyserNode to analyse audio data.
 * This uses the Web Audio API.
 */
export class AudioAnalyser {
  /** An AnalyserNode used to analyze audio. */
  analyser: AnalyserNode
  /** A Uint8Array with size determined by analyser.frequencyBinCount used to hold analysis data. */
  data: Uint8Array

  /**
   * An [AnalyserNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode) used to analyze audio.
   * @param audio
   * @param fftSize A non-zero power of two up to 2048, representing the size of the FFT (Fast Fourier Transform) to be used to determine the frequency domain. See this page for details.
   */
  constructor(audio: Audio, fftSize = 2048) {
    this.analyser = audio.context.createAnalyser()
    this.analyser.fftSize = fftSize

    this.data = new Uint8Array(this.analyser.frequencyBinCount)

    audio.getOutput().connect(this.analyser)
  }

  /** Uses the Web Audio's getByteFrequencyData method. See that page. */
  getFrequencyData(): Uint8Array {
    this.analyser.getByteFrequencyData(this.data)

    return this.data
  }

  /** Get the average of the frequencies returned by the getFrequencyData method. */
  getAverageFrequency(): number {
    let value = 0
    const data = this.getFrequencyData()

    for (let i = 0; i < data.length; i++) {
      value += data[i]
    }

    return value / data.length
  }
}
