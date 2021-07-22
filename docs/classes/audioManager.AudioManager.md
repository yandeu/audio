[@yandeu/audio](../README.md) / [Exports](../modules.md) / [audioManager](../modules/audioManager.md) / AudioManager

# Class: AudioManager

[audioManager](../modules/audioManager.md).AudioManager

## Table of contents

### Constructors

- [constructor](audioManager.AudioManager.md#constructor)

### Accessors

- [listener](audioManager.AudioManager.md#listener)
- [VERSION](audioManager.AudioManager.md#version)

### Methods

- [add](audioManager.AudioManager.md#add)
- [analyser](audioManager.AudioManager.md#analyser)
- [load](audioManager.AudioManager.md#load)

## Constructors

### constructor

• **new AudioManager**()

#### Defined in

[src/audioManager.ts:34](https://github.com/yandeu/audio/blob/2f71ca1/src/audioManager.ts#L34)

## Accessors

### listener

• `get` **listener**(): [`AudioListener`](audio_audioListener.AudioListener.md)

#### Returns

[`AudioListener`](audio_audioListener.AudioListener.md)

#### Defined in

[src/audioManager.ts:40](https://github.com/yandeu/audio/blob/2f71ca1/src/audioManager.ts#L40)

___

### VERSION

• `Static` `get` **VERSION**(): `string`

#### Returns

`string`

#### Defined in

[src/audioManager.ts:20](https://github.com/yandeu/audio/blob/2f71ca1/src/audioManager.ts#L20)

## Methods

### add

▸ **add**(`key`): `Promise`<[`Audio`](audio_audio.Audio.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<[`Audio`](audio_audio.Audio.md)\>

#### Defined in

[src/audioManager.ts:60](https://github.com/yandeu/audio/blob/2f71ca1/src/audioManager.ts#L60)

___

### analyser

▸ **analyser**(`audio`, `fftSize?`): [`AudioAnalyser`](audio_audioAnalyser.AudioAnalyser.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `audio` | [`Audio`](audio_audio.Audio.md) | `undefined` |
| `fftSize` | `number` | `2048` |

#### Returns

[`AudioAnalyser`](audio_audioAnalyser.AudioAnalyser.md)

#### Defined in

[src/audioManager.ts:30](https://github.com/yandeu/audio/blob/2f71ca1/src/audioManager.ts#L30)

___

### load

▸ **load**(`key`, `url`, ...`formats`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `url` | `string` |
| `...formats` | (``"aac"`` \| ``"caf"`` \| ``"flac"`` \| ``"mp3"`` \| ``"mp4"`` \| ``"ogg"`` \| ``"wav"`` \| ``"webm"``)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/audioManager.ts:44](https://github.com/yandeu/audio/blob/2f71ca1/src/audioManager.ts#L44)
