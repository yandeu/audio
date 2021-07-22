[@yandeu/audio](../README.md) / [Exports](../modules.md) / [audio/audioListener](../modules/audio_audioListener.md) / AudioListener

# Class: AudioListener

[audio/audioListener](../modules/audio_audioListener.md).AudioListener

The AudioListener represents a virtual listener of the all positional and non-positional audio effects in the scene.
A three.js application usually creates a single instance of AudioListener. It is a mandatory construtor parameter for audios entities like Audio and PositionalAudio.
In most cases, the listener object is a child of the camera. So the 3D transformation of the camera represents the 3D transformation of the listener.

## Constructors

### constructor

• **new AudioListener**()

#### Defined in

[src/audio/audioListener.ts:23](https://github.com/yandeu/audio/blob/91e099e/src/audio/audioListener.ts#L23)

## Properties

### context

• **context**: `AudioContext`

The AudioContext of the listener given in the constructor.

#### Defined in

[src/audio/audioListener.ts:11](https://github.com/yandeu/audio/blob/91e099e/src/audio/audioListener.ts#L11)

___

### filter

• **filter**: ``null`` \| `AudioNode`

Default is null.

#### Defined in

[src/audio/audioListener.ts:13](https://github.com/yandeu/audio/blob/91e099e/src/audio/audioListener.ts#L13)

___

### gain

• **gain**: `GainNode`

A GainNode created using AudioContext.createGain().

#### Defined in

[src/audio/audioListener.ts:15](https://github.com/yandeu/audio/blob/91e099e/src/audio/audioListener.ts#L15)

___

### timeDelta

• **timeDelta**: `number`

Time delta value for audio entities. Use in context of AudioParam.linearRampToValueAtTimeDefault(). Default is 0.

#### Defined in

[src/audio/audioListener.ts:17](https://github.com/yandeu/audio/blob/91e099e/src/audio/audioListener.ts#L17)

___

### type

• **type**: `string`

String denoting the type, set to 'AudioListener'.

#### Defined in

[src/audio/audioListener.ts:19](https://github.com/yandeu/audio/blob/91e099e/src/audio/audioListener.ts#L19)

## Methods

### getFilter

▸ **getFilter**(): `AudioNode`

Returns the value of the filter property.

#### Returns

`AudioNode`

#### Defined in

[src/audio/audioListener.ts:56](https://github.com/yandeu/audio/blob/91e099e/src/audio/audioListener.ts#L56)

___

### getInput

▸ **getInput**(): `GainNode`

Return the gainNode.

#### Returns

`GainNode`

#### Defined in

[src/audio/audioListener.ts:39](https://github.com/yandeu/audio/blob/91e099e/src/audio/audioListener.ts#L39)

___

### getMasterVolume

▸ **getMasterVolume**(): `number`

Return the volume.

#### Returns

`number`

#### Defined in

[src/audio/audioListener.ts:77](https://github.com/yandeu/audio/blob/91e099e/src/audio/audioListener.ts#L77)

___

### removeFilter

▸ **removeFilter**(): [`AudioListener`](audio_audioListener.AudioListener.md)

Set the filter property to null.

#### Returns

[`AudioListener`](audio_audioListener.AudioListener.md)

#### Defined in

[src/audio/audioListener.ts:44](https://github.com/yandeu/audio/blob/91e099e/src/audio/audioListener.ts#L44)

___

### setFilter

▸ **setFilter**(`value`): [`AudioListener`](audio_audioListener.AudioListener.md)

Set the filter property to value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `AudioNode` |

#### Returns

[`AudioListener`](audio_audioListener.AudioListener.md)

#### Defined in

[src/audio/audioListener.ts:61](https://github.com/yandeu/audio/blob/91e099e/src/audio/audioListener.ts#L61)

___

### setMasterVolume

▸ **setMasterVolume**(`value`): [`AudioListener`](audio_audioListener.AudioListener.md)

Set the volume.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`AudioListener`](audio_audioListener.AudioListener.md)

#### Defined in

[src/audio/audioListener.ts:82](https://github.com/yandeu/audio/blob/91e099e/src/audio/audioListener.ts#L82)
