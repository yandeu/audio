[@yandeu/audio](../README.md) / [Exports](../modules.md) / [audio/audioLoader](../modules/audio_audioloader.md) / AudioLoader

# Class: AudioLoader

[audio/audioLoader](../modules/audio_audioloader.md).AudioLoader

## Hierarchy

* *Loader*

  ↳ **AudioLoader**

## Constructors

### constructor

\+ **new AudioLoader**(`manager?`: *undefined*): [*AudioLoader*](audio_audioloader.audioloader.md)

#### Parameters:

Name | Type |
:------ | :------ |
`manager` | *undefined* |

**Returns:** [*AudioLoader*](audio_audioloader.audioloader.md)

Defined in: [src/audio/audioLoader.ts:5](https://github.com/yandeu/audio/blob/228bbf8/src/audio/audioLoader.ts#L5)

## Properties

### crossOrigin

• **crossOrigin**: *string*

**`default`** 'anonymous'

Defined in: node_modules/@types/three/src/loaders/Loader.d.ts:12

___

### manager

• **manager**: *LoadingManager*

Defined in: node_modules/@types/three/src/loaders/Loader.d.ts:28

___

### path

• **path**: *string*

**`default`** ''

Defined in: node_modules/@types/three/src/loaders/Loader.d.ts:22

___

### requestHeader

• **requestHeader**: *object*

**`default`** {}

#### Type declaration:

Defined in: node_modules/@types/three/src/loaders/Loader.d.ts:33

___

### resourcePath

• **resourcePath**: *string*

**`default`** ''

Defined in: node_modules/@types/three/src/loaders/Loader.d.ts:27

___

### withCredentials

• **withCredentials**: *boolean*

**`default:`** false

Defined in: node_modules/@types/three/src/loaders/Loader.d.ts:17

## Methods

### load

▸ **load**(`url`: *string*, `onLoad`: *any*, `onProgress`: *any*, `onError`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`onLoad` | *any* |
`onProgress` | *any* |
`onError` | *any* |

**Returns:** *void*

Defined in: [src/audio/audioLoader.ts:10](https://github.com/yandeu/audio/blob/228bbf8/src/audio/audioLoader.ts#L10)

___

### loadAsync

▸ **loadAsync**(`url`: *string*, `onProgress?`: (`event`: *ProgressEvent*<EventTarget\>) => *void*): *Promise*<any\>

#### Parameters:

Name | Type |
:------ | :------ |
`url` | *string* |
`onProgress?` | (`event`: *ProgressEvent*<EventTarget\>) => *void* |

**Returns:** *Promise*<any\>

Defined in: node_modules/@types/three/src/loaders/Loader.d.ts:40

___

### setCrossOrigin

▸ **setCrossOrigin**(`crossOrigin`: *string*): [*AudioLoader*](audio_audioloader.audioloader.md)

#### Parameters:

Name | Type |
:------ | :------ |
`crossOrigin` | *string* |

**Returns:** [*AudioLoader*](audio_audioloader.audioloader.md)

Defined in: node_modules/@types/three/src/loaders/Loader.d.ts:42

___

### setPath

▸ **setPath**(`path`: *string*): [*AudioLoader*](audio_audioloader.audioloader.md)

#### Parameters:

Name | Type |
:------ | :------ |
`path` | *string* |

**Returns:** [*AudioLoader*](audio_audioloader.audioloader.md)

Defined in: node_modules/@types/three/src/loaders/Loader.d.ts:44

___

### setRequestHeader

▸ **setRequestHeader**(`requestHeader`: { [header: string]: *string*;  }): [*AudioLoader*](audio_audioloader.audioloader.md)

#### Parameters:

Name | Type |
:------ | :------ |
`requestHeader` | *object* |

**Returns:** [*AudioLoader*](audio_audioloader.audioloader.md)

Defined in: node_modules/@types/three/src/loaders/Loader.d.ts:46

___

### setResourcePath

▸ **setResourcePath**(`resourcePath`: *string*): [*AudioLoader*](audio_audioloader.audioloader.md)

#### Parameters:

Name | Type |
:------ | :------ |
`resourcePath` | *string* |

**Returns:** [*AudioLoader*](audio_audioloader.audioloader.md)

Defined in: node_modules/@types/three/src/loaders/Loader.d.ts:45

___

### setWithCredentials

▸ **setWithCredentials**(`value`: *boolean*): [*AudioLoader*](audio_audioloader.audioloader.md)

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *boolean* |

**Returns:** [*AudioLoader*](audio_audioloader.audioloader.md)

Defined in: node_modules/@types/three/src/loaders/Loader.d.ts:43
