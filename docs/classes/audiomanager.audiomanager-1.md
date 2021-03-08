[@yandeu/audio](../README.md) / [Exports](../modules.md) / [audioManager](../modules/audiomanager.md) / AudioManager

# Class: AudioManager

[audioManager](../modules/audiomanager.md).AudioManager

## Constructors

### constructor

\+ **new AudioManager**(): [*AudioManager*](audiomanager.audiomanager-1.md)

**Returns:** [*AudioManager*](audiomanager.audiomanager-1.md)

Defined in: [src/audioManager.ts:32](https://github.com/yandeu/audio/blob/228bbf8/src/audioManager.ts#L32)

## Accessors

### listener

• get **listener**(): [*AudioListener*](audio_audiolistener.audiolistener.md)

**Returns:** [*AudioListener*](audio_audiolistener.audiolistener.md)

Defined in: [src/audioManager.ts:40](https://github.com/yandeu/audio/blob/228bbf8/src/audioManager.ts#L40)

___

### VERSION

• `Static`get **VERSION**(): *string*

**Returns:** *string*

Defined in: [src/audioManager.ts:20](https://github.com/yandeu/audio/blob/228bbf8/src/audioManager.ts#L20)

## Methods

### add

▸ **add**(`key`: *string*): *Promise*<[*Audio*](audio_audio.audio.md)\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *Promise*<[*Audio*](audio_audio.audio.md)\>

Defined in: [src/audioManager.ts:60](https://github.com/yandeu/audio/blob/228bbf8/src/audioManager.ts#L60)

___

### analyser

▸ **analyser**(`audio`: [*Audio*](audio_audio.audio.md), `fftSize?`: *number*): [*AudioAnalyser*](audio_audioanalyser.audioanalyser.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`audio` | [*Audio*](audio_audio.audio.md) | - |
`fftSize` | *number* | 2048 |

**Returns:** [*AudioAnalyser*](audio_audioanalyser.audioanalyser.md)

Defined in: [src/audioManager.ts:30](https://github.com/yandeu/audio/blob/228bbf8/src/audioManager.ts#L30)

___

### load

▸ **load**(`key`: *string*, `url`: *string*, ...`formats`: (*aac* \| *caf* \| *flac* \| *mp3* \| *mp4* \| *ogg* \| *wav* \| *webm*)[]): *Promise*<void\>

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`url` | *string* |
`...formats` | (*aac* \| *caf* \| *flac* \| *mp3* \| *mp4* \| *ogg* \| *wav* \| *webm*)[] |

**Returns:** *Promise*<void\>

Defined in: [src/audioManager.ts:44](https://github.com/yandeu/audio/blob/228bbf8/src/audioManager.ts#L44)
