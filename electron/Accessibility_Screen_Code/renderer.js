const fs = require('fs')

// Simple persistence in a JSON file in the app folder
const stateFile = 'accessibility_state.json'

function loadState() {
  try {
    const raw = fs.readFileSync(stateFile)
    return JSON.parse(raw)
  } catch (e) {
    return {}
  }
}

function saveState(state) {
  fs.writeFileSync(stateFile, JSON.stringify(state, null, 2))
}

window.addEventListener('DOMContentLoaded', () => {
  const state = loadState()

  const highContrast = document.getElementById('highContrast')
  const darkMode = document.getElementById('darkMode')
  const colorEnhancement = document.getElementById('colorEnhancement')
  const voiceMessages = document.getElementById('voiceMessages')
  const textSize = document.getElementById('textSize')

  // initialize
  highContrast.checked = state.highContrast ?? true
  darkMode.checked = state.darkMode ?? false
  colorEnhancement.checked = state.colorEnhancement ?? true
  voiceMessages.checked = state.voiceMessages ?? true
  textSize.value = state.textSize ?? 'Medium'

  function commit() {
    const newState = {
      highContrast: highContrast.checked,
      darkMode: darkMode.checked,
      colorEnhancement: colorEnhancement.checked,
      voiceMessages: voiceMessages.checked,
      textSize: textSize.value,
    }
    saveState(newState)
  }

  highContrast.addEventListener('change', commit)
  darkMode.addEventListener('change', commit)
  colorEnhancement.addEventListener('change', commit)
  voiceMessages.addEventListener('change', commit)
  textSize.addEventListener('change', commit)

  document.getElementById('contactSupport').addEventListener('click', () => {
    alert('Contacting support...')
  })
})
