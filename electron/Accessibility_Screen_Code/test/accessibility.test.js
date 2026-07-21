const fs = require('fs')
const path = require('path')

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8')

describe('Accessibility Screen (static rendering)', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html
  })

  test('renders app title and header', () => {
    const appName = document.querySelector('.app-name')
    expect(appName).not.toBeNull()
    expect(appName.textContent).toContain('CareConnect')

    const heading = document.querySelector('h1')
    expect(heading).not.toBeNull()
    expect(heading.textContent).toContain('Accessibility')
  })

  test('contains accessibility controls', () => {
    expect(document.getElementById('highContrast')).not.toBeNull()
    expect(document.getElementById('darkMode')).not.toBeNull()
    expect(document.getElementById('colorEnhancement')).not.toBeNull()
    expect(document.getElementById('voiceMessages')).not.toBeNull()
    expect(document.getElementById('textSize')).not.toBeNull()
  })

  test('contact support button exists', () => {
    const btn = document.getElementById('contactSupport')
    expect(btn).not.toBeNull()
    expect(btn.textContent).toMatch(/Contact Support/i)
  })
})
