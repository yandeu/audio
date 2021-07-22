# 🎵 Audio

Audio library for the Web Audio API.  
(_TypeScripted version of [Three.js@r126's Audio](https://threejs.org/docs/#api/en/audio/Audio) without Object3D_)

## Installation

```console
npm install @yandeu/audio
```

## CDN

```console
https://unpkg.com/@yandeu/audio/umd/audio.min.js
```

## Usage

```ts
// import AudioManager
import { AudioManager } from '@yandeu/audio'

// print the current version
console.log('AudioManager VERSION: ', AudioManager.VERSION)

// instantiate
const audio = new AudioManager()

// load your sound: Promise<void>
// (Loads either dance-hits-2011.mp3 or dance-hits-2011.ogg depnding on browser support.)
await audio.load('hits', '../sound/dance-hits-2011', 'mp3', 'ogg')

// create your sound: Promise<Sound>
const sound = await audio.add('hits')

// play your sound
sound.play()

// check if your sound is playing
sound.isPlaying

// pause your sound (resume with .play())
sound.pause()

// stop your sound
sound.stop()

// and many many more...
```

## Transpile

You probably need something like [babel](https://babeljs.io/) to make this library work on older devices.

## Apple iOS

On a newly-created AudioContext will always begin in the suspended state. Resume the state on a user event.

```js
const audioManager = new AudioManager()

window.addEventListener(
  'click',
  async () => {
    await audioManager.listener.context.resume()
    // now you can play your audio
  },
  { once: true }
)
```

## API

You will find the full API on https://yandeu.github.io/audio.  
The most important classes are **[AudioManager](https://yandeu.github.io/audio/classes/audiomanager.audiomanager-1.html)** and **[Audio](https://yandeu.github.io/audio/classes/audio_audio.audio.html)**.

## Related Packages

| Package                                                      | Description                                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------------------- |
| [`audio`](https://www.npmjs.com/package/@yandeu/audio)       | 🎵 Audio library for the Web Audio API.                                   |
| [`keyboard`](https://www.npmjs.com/package/@yandeu/keyboard) | ⌨️ Handling of keyboard events.                                           |
| [`tap`](https://www.npmjs.com/package/@yandeu/tap)           | 🖱️ Handling of user interactions such as mouse, touch and pointer events. |

## Questions?

Join the [enable3d discussions](https://github.com/enable3d/enable3d/discussions)!

## License

[MIT](https://github.com/yandeu/audio/blob/main/LICENSE)
