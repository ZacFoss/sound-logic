const fs = require('fs')
const path = require('path')

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8')

describe('Home Screen (static rendering)', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html
  })

  test('renders greeting and overview', () => {
    const hello = document.querySelector('.hello')
    expect(hello).not.toBeNull()
    expect(hello.textContent).toContain('Hello, Sarah!')

    const overviewCards = document.querySelectorAll('.overview .card')
    expect(overviewCards.length).toBeGreaterThanOrEqual(1)
  })

  test('quick access grid exists', () => {
    const quicks = document.querySelectorAll('.quick')
    expect(quicks.length).toBeGreaterThanOrEqual(3)
  })

  test('appointment and view details button', () => {
    const appt = document.querySelector('.appointment')
    expect(appt).not.toBeNull()
    const outlineBtn = document.querySelector('.appointment .outline')
    expect(outlineBtn).not.toBeNull()
  })
})
