[@yandeu/audio](../README.md) / [Exports](../modules.md) / [audio/audioAnalyser](../modules/audio_audioanalyser.md) / AudioAnalyser

# Class: AudioAnalyser

[audio/audioAnalyser](../modules/audio_audioanalyser.md).AudioAnalyser

Create a AudioAnalyser object, which uses an AnalyserNode to analyse audio data.
This uses the Web Audio API.

## Constructors

### constructor

\+ **new AudioAnalyser**(`audio`: [*Audio*](audio_audio.audio.md), `fftSize?`: *number*): [*AudioAnalyser*](audio_audioanalyser.audioanalyser.md)

An [AnalyserNode](https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode) used to analyze audio.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`audio` | [*Audio*](audio_audio.audio.md) | - |  |
`fftSize` | *number* | 2048 | A non-zero power of two up to 2048, representing the size of the FFT (Fast Fourier Transform) to be used to determine the frequency domain. See this page for details.    |

**Returns:** [*AudioAnalyser*](audio_audioanalyser.audioanalyser.md)

Defined in: [src/audio/audioAnalyser.ts:11](https://github.com/yandeu/audio/blob/228bbf8/src/audio/audioAnalyser.ts#L11)

## Properties

### analyser

• **analyser**: AnalyserNode

An AnalyserNode used to analyze audio.

Defined in: [src/audio/audioAnalyser.ts:9](https://github.com/yandeu/audio/blob/228bbf8/src/audio/audioAnalyser.ts#L9)

___

### data

• **data**: *Uint8Array*

A Uint8Array with size determined by analyser.frequencyBinCount used to hold analysis data.

Defined in: [src/audio/audioAnalyser.ts:11](https://github.com/yandeu/audio/blob/228bbf8/src/audio/audioAnalyser.ts#L11)

## Methods

### getAverageFrequency

▸ **getAverageFrequency**(): *number*

Get the average of the frequencies returned by the getFrequencyData method.

**Returns:** *number*

Defined in: [src/audio/audioAnalyser.ts:35](https://github.com/yandeu/audio/blob/228bbf8/src/audio/audioAnalyser.ts#L35)

___

### getFrequencyData

▸ **getFrequencyData**(): *Uint8Array*

Uses the Web Audio's getByteFrequencyData method. See that page.

**Returns:** *Uint8Array*

Defined in: [src/audio/audioAnalyser.ts:28](https://github.com/yandeu/audio/blob/228bbf8/src/audio/audioAnalyser.ts#L28)
