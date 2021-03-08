let _context: AudioContext

/**
 * This contains methods for setting up an AudioContext.
 * Used internally by the AudioListener and AudioLoader classes.
 * This uses the Web Audio API.
 */
export const AudioContext = {
  /** Return the value of the variable context in the outer scope, if defined, otherwise set it to a new AudioContext. */
  getContext: function (): AudioContext {
    if (_context === undefined) {
      _context = new window.AudioContext()
    }

    return _context
  },

  /** Set the variable context in the outer scope to value. */
  setContext: function (value: AudioContext) {
    _context = value
  }
}
