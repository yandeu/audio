[@yandeu/audio](../README.md) / [Exports](../modules.md) / [audio/audioLoader](../modules/audio_audioLoader.md) / AudioLoader

# Class: AudioLoader

[audio/audioLoader](../modules/audio_audioLoader.md).AudioLoader

## Hierarchy

- `Loader`

  ↳ **`AudioLoader`**

## Table of contents

### Constructors

- [constructor](audio_audioLoader.AudioLoader.md#constructor)

### Properties

- [crossOrigin](audio_audioLoader.AudioLoader.md#crossorigin)
- [manager](audio_audioLoader.AudioLoader.md#manager)
- [path](audio_audioLoader.AudioLoader.md#path)
- [requestHeader](audio_audioLoader.AudioLoader.md#requestheader)
- [resourcePath](audio_audioLoader.AudioLoader.md#resourcepath)
- [withCredentials](audio_audioLoader.AudioLoader.md#withcredentials)

### Methods

- [load](audio_audioLoader.AudioLoader.md#load)
- [loadAsync](audio_audioLoader.AudioLoader.md#loadasync)
- [setCrossOrigin](audio_audioLoader.AudioLoader.md#setcrossorigin)
- [setPath](audio_audioLoader.AudioLoader.md#setpath)
- [setRequestHeader](audio_audioLoader.AudioLoader.md#setrequestheader)
- [setResourcePath](audio_audioLoader.AudioLoader.md#setresourcepath)
- [setWithCredentials](audio_audioLoader.AudioLoader.md#setwithcredentials)

## Constructors

### constructor

• **new AudioLoader**(`manager?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | `undefined` |

#### Overrides

Loader.constructor

#### Defined in

[src/audio/audioLoader.ts:6](https://github.com/yandeu/audio/blob/2f71ca1/src/audio/audioLoader.ts#L6)

## Properties

### crossOrigin

• **crossOrigin**: `string`

**`default`** 'anonymous'

#### Inherited from

Loader.crossOrigin

#### Defined in

node_modules/@types/three/src/loaders/Loader.d.ts:12

___

### manager

• **manager**: `LoadingManager`

#### Inherited from

Loader.manager

#### Defined in

node_modules/@types/three/src/loaders/Loader.d.ts:28

___

### path

• **path**: `string`

**`default`** ''

#### Inherited from

Loader.path

#### Defined in

node_modules/@types/three/src/loaders/Loader.d.ts:22

___

### requestHeader

• **requestHeader**: `Object`

**`default`** {}

#### Index signature

▪ [header: `string`]: `string`

#### Inherited from

Loader.requestHeader

#### Defined in

node_modules/@types/three/src/loaders/Loader.d.ts:33

___

### resourcePath

• **resourcePath**: `string`

**`default`** ''

#### Inherited from

Loader.resourcePath

#### Defined in

node_modules/@types/three/src/loaders/Loader.d.ts:27

___

### withCredentials

• **withCredentials**: `boolean`

**`default:`** false

#### Inherited from

Loader.withCredentials

#### Defined in

node_modules/@types/three/src/loaders/Loader.d.ts:17

## Methods

### load

▸ **load**(`url`, `onLoad`, `onProgress`, `onError`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `onLoad` | `any` |
| `onProgress` | `any` |
| `onError` | `any` |

#### Returns

`void`

#### Defined in

[src/audio/audioLoader.ts:10](https://github.com/yandeu/audio/blob/2f71ca1/src/audio/audioLoader.ts#L10)

___

### loadAsync

▸ **loadAsync**(`url`, `onProgress?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `onProgress?` | (`event`: `ProgressEvent`<`EventTarget`\>) => `void` |

#### Returns

`Promise`<`any`\>

#### Inherited from

Loader.loadAsync

#### Defined in

node_modules/@types/three/src/loaders/Loader.d.ts:40

___

### setCrossOrigin

▸ **setCrossOrigin**(`crossOrigin`): [`AudioLoader`](audio_audioLoader.AudioLoader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `crossOrigin` | `string` |

#### Returns

[`AudioLoader`](audio_audioLoader.AudioLoader.md)

#### Inherited from

Loader.setCrossOrigin

#### Defined in

node_modules/@types/three/src/loaders/Loader.d.ts:42

___

### setPath

▸ **setPath**(`path`): [`AudioLoader`](audio_audioLoader.AudioLoader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`AudioLoader`](audio_audioLoader.AudioLoader.md)

#### Inherited from

Loader.setPath

#### Defined in

node_modules/@types/three/src/loaders/Loader.d.ts:44

___

### setRequestHeader

▸ **setRequestHeader**(`requestHeader`): [`AudioLoader`](audio_audioLoader.AudioLoader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestHeader` | `Object` |

#### Returns

[`AudioLoader`](audio_audioLoader.AudioLoader.md)

#### Inherited from

Loader.setRequestHeader

#### Defined in

node_modules/@types/three/src/loaders/Loader.d.ts:46

___

### setResourcePath

▸ **setResourcePath**(`resourcePath`): [`AudioLoader`](audio_audioLoader.AudioLoader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resourcePath` | `string` |

#### Returns

[`AudioLoader`](audio_audioLoader.AudioLoader.md)

#### Inherited from

Loader.setResourcePath

#### Defined in

node_modules/@types/three/src/loaders/Loader.d.ts:45

___

### setWithCredentials

▸ **setWithCredentials**(`value`): [`AudioLoader`](audio_audioLoader.AudioLoader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

[`AudioLoader`](audio_audioLoader.AudioLoader.md)

#### Inherited from

Loader.setWithCredentials

#### Defined in

node_modules/@types/three/src/loaders/Loader.d.ts:43
