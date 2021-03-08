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

## Documentation

You will find the documentation on https://yandeu.github.io/audio.  
The most importent classes are **[AudioManager](https://yandeu.github.io/audio/classes/audiomanager.audiomanager-1.html)** and **[Audio](https://yandeu.github.io/audio/classes/audio_audio.audio.html)**.

## License

[MIT](https://github.com/yandeu/audio/blob/main/LICENSE)
