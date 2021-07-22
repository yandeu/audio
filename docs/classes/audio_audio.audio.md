[@yandeu/audio](../README.md) / [Exports](../modules.md) / [audio/audio](../modules/audio_audio.md) / Audio

# Class: Audio

[audio/audio](../modules/audio_audio.md).Audio

Create a audio object.
This uses the Web Audio API.

## Constructors

### constructor

• **new Audio**(`listener`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listener` | [`AudioListener`](audio_audioListener.AudioListener.md) | (https://threejs.org/docs/#api/en/audio/AudioListener) instance. |

#### Defined in

[src/audio/audio.ts:52](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L52)

## Properties

### autoplay

• **autoplay**: `boolean`

Whether to start playback automatically. Default is false.

#### Defined in

[src/audio/audio.ts:11](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L11)

___

### context

• **context**: `AudioContext`

The AudioContext of the listener given in the constructor.

#### Defined in

[src/audio/audio.ts:13](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L13)

___

### detune

• **detune**: `number`

Modify pitch, measured in cents. +/- 100 is a semitone. +/- 1200 is an octave. Default is 0.

#### Defined in

[src/audio/audio.ts:15](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L15)

___

### duration

• **duration**: `undefined` \| `number`

Overrides the duration of the audio. Same as the duration parameter of AudioBufferSourceNode.start(). Default is undefined to play the whole buffer.

#### Defined in

[src/audio/audio.ts:17](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L17)

___

### filters

• **filters**: `BiquadFilterNode`[]

Represents an array of BiquadFilterNodes. Can be used to apply a variety of low-order filters to create more complex sound effects. Filters are set via Audio.setFilter or Audio.setFilters.

#### Defined in

[src/audio/audio.ts:19](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L19)

___

### gain

• **gain**: `GainNode`

A GainNode created using AudioContext.createGain().

#### Defined in

[src/audio/audio.ts:21](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L21)

___

### hasPlaybackControl

• **hasPlaybackControl**: `boolean`

Whether playback can be controlled using the play(), pause() etc. methods. Default is true.

#### Defined in

[src/audio/audio.ts:23](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L23)

___

### isPlaying

• **isPlaying**: `boolean`

Whether the audio is currently playing.

#### Defined in

[src/audio/audio.ts:25](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L25)

___

### listener

• **listener**: [`AudioListener`](audio_audioListener.AudioListener.md)

A reference to the listener object of this audio.

#### Defined in

[src/audio/audio.ts:27](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L27)

___

### offset

• **offset**: `number`

An offset to the time within the audio buffer that playback should begin. Same as the offset parameter of AudioBufferSourceNode.start(). Default is 0.

#### Defined in

[src/audio/audio.ts:29](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L29)

___

### playbackRate

• **playbackRate**: `number`

Speed of playback. Default is 1.

#### Defined in

[src/audio/audio.ts:31](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L31)

___

### source

• **source**: ``null`` \| `AudioBufferSourceNode`

An AudioBufferSourceNode created using AudioContext.createBufferSource().

#### Defined in

[src/audio/audio.ts:33](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L33)

___

### sourceType

• **sourceType**: `string`

Type of the audio source. Default is string 'empty'.

#### Defined in

[src/audio/audio.ts:35](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L35)

___

### type

• **type**: `string`

String denoting the type, set to 'Audio'.

#### Defined in

[src/audio/audio.ts:37](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L37)

## Methods

### connect

▸ **connect**(): [`Audio`](audio_audio.Audio.md)

Connect to the Audio.source. This is used internally on initialisation and when setting / removing filters.

#### Returns

[`Audio`](audio_audio.Audio.md)

#### Defined in

[src/audio/audio.ts:218](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L218)

___

### disconnect

▸ **disconnect**(): [`Audio`](audio_audio.Audio.md)

Disconnect from the Audio.source. This is used internally when setting / removing filters.

#### Returns

[`Audio`](audio_audio.Audio.md)

#### Defined in

[src/audio/audio.ts:237](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L237)

___

### getFilter

▸ **getFilter**(): `BiquadFilterNode`

Returns the first element of the filters array.

#### Returns

`BiquadFilterNode`

#### Defined in

[src/audio/audio.ts:279](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L279)

___

### getFilters

▸ **getFilters**(): `BiquadFilterNode`[]

Returns the filters array.

#### Returns

`BiquadFilterNode`[]

#### Defined in

[src/audio/audio.ts:256](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L256)

___

### getLoop

▸ **getLoop**(): `boolean`

Return the value of source.loop (whether playback should loop).

#### Returns

`boolean`

#### Defined in

[src/audio/audio.ts:315](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L315)

___

### getOutput

▸ **getOutput**(): `GainNode`

Return the gainNode.

#### Returns

`GainNode`

#### Defined in

[src/audio/audio.ts:84](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L84)

___

### getPlaybackRate

▸ **getPlaybackRate**(): `number`

Return the value of playbackRate.

#### Returns

`number`

#### Defined in

[src/audio/audio.ts:305](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L305)

___

### getVolume

▸ **getVolume**(): `number`

Return the current volume.

#### Returns

`number`

#### Defined in

[src/audio/audio.ts:355](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L355)

___

### onEnded

▸ **onEnded**(): `void`

Called automatically when playback finished.

#### Returns

`void`

#### Defined in

[src/audio/audio.ts:310](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L310)

___

### pause

▸ **pause**(): `undefined` \| [`Audio`](audio_audio.Audio.md)

If hasPlaybackControl is true, pauses playback.

#### Returns

`undefined` \| [`Audio`](audio_audio.Audio.md)

#### Defined in

[src/audio/audio.ts:175](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L175)

___

### play

▸ **play**(`delay?`): `undefined` \| [`Audio`](audio_audio.Audio.md)

If hasPlaybackControl is true, starts playback.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `delay` | `number` | `0` |

#### Returns

`undefined` \| [`Audio`](audio_audio.Audio.md)

#### Defined in

[src/audio/audio.ts:143](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L143)

___

### setBuffer

▸ **setBuffer**(`audioBuffer`): [`Audio`](audio_audio.Audio.md)

Setup the source to the audioBuffer, and sets sourceType to 'buffer'.
If autoplay, also starts playback.

#### Parameters

| Name | Type |
| :------ | :------ |
| `audioBuffer` | `AudioBuffer` |

#### Returns

[`Audio`](audio_audio.Audio.md)

#### Defined in

[src/audio/audio.ts:133](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L133)

___

### setFilter

▸ **setFilter**(`filter`): [`Audio`](audio_audio.Audio.md)

Applies a single BiquadFilterNode to the audio.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `BiquadFilterNode` |

#### Returns

[`Audio`](audio_audio.Audio.md)

#### Defined in

[src/audio/audio.ts:284](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L284)

___

### setFilters

▸ **setFilters**(`value`): [`Audio`](audio_audio.Audio.md)

value - arrays of filters.
Applies an array of BiquadFilterNodes to the audio.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `BiquadFilterNode`[] |

#### Returns

[`Audio`](audio_audio.Audio.md)

#### Defined in

[src/audio/audio.ts:264](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L264)

___

### setLoop

▸ **setLoop**(`value`): `undefined` \| [`Audio`](audio_audio.Audio.md)

Set source.loop to value (whether playback should loop).

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`undefined` \| [`Audio`](audio_audio.Audio.md)

#### Defined in

[src/audio/audio.ts:325](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L325)

___

### setLoopEnd

▸ **setLoopEnd**(`value`): [`Audio`](audio_audio.Audio.md)

Set source.loopEnd to value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Audio`](audio_audio.Audio.md)

#### Defined in

[src/audio/audio.ts:348](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L348)

___

### setLoopStart

▸ **setLoopStart**(`value`): [`Audio`](audio_audio.Audio.md)

Set source.loopStart to value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Audio`](audio_audio.Audio.md)

#### Defined in

[src/audio/audio.ts:341](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L341)

___

### setMediaElementSource

▸ **setMediaElementSource**(`mediaElement`): [`Audio`](audio_audio.Audio.md)

Applies the given object of type HTMLMediaElement as the source of this audio.
Also sets hasPlaybackControl to false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaElement` | `HTMLMediaElement` |

#### Returns

[`Audio`](audio_audio.Audio.md)

#### Defined in

[src/audio/audio.ts:105](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L105)

___

### setMediaStreamSource

▸ **setMediaStreamSource**(`mediaStream`): [`Audio`](audio_audio.Audio.md)

Applies the given object of type MediaStream as the source of this audio.
Also sets hasPlaybackControl to false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaStream` | `MediaStream` |

#### Returns

[`Audio`](audio_audio.Audio.md)

#### Defined in

[src/audio/audio.ts:119](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L119)

___

### setNodeSource

▸ **setNodeSource**(`audioNode`): [`Audio`](audio_audio.Audio.md)

Setup the source to the audioBuffer, and sets sourceType to 'audioNode'.
Also sets hasPlaybackControl to false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `audioNode` | `AudioBufferSourceNode` |

#### Returns

[`Audio`](audio_audio.Audio.md)

#### Defined in

[src/audio/audio.ts:92](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L92)

___

### setPlaybackRate

▸ **setPlaybackRate**(`value`): `undefined` \| [`Audio`](audio_audio.Audio.md)

If hasPlaybackControl is enabled, set the playbackRate to value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`undefined` \| [`Audio`](audio_audio.Audio.md)

#### Defined in

[src/audio/audio.ts:289](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L289)

___

### setVolume

▸ **setVolume**(`value`): [`Audio`](audio_audio.Audio.md)

Set the volume.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`Audio`](audio_audio.Audio.md)

#### Defined in

[src/audio/audio.ts:360](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L360)

___

### stop

▸ **stop**(): `undefined` \| [`Audio`](audio_audio.Audio.md)

If hasPlaybackControl is enabled, stops playback.

#### Returns

`undefined` \| [`Audio`](audio_audio.Audio.md)

#### Defined in

[src/audio/audio.ts:202](https://github.com/yandeu/audio/blob/91e099e/src/audio/audio.ts#L202)
