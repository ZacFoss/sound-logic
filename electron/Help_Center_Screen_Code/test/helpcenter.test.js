const fs = require('fs')
const path = require('path')

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8')

describe('Help Center Screen (static rendering)', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html
  })

  test('renders heading and search', () => {
    const heading = document.querySelector('h1')
    expect(heading).not.toBeNull()
    expect(heading.textContent).toContain('Help Center')

    const search = document.getElementById('searchInput')
    expect(search).not.toBeNull()
  })

  test('categories and popular topics are present', () => {
    const categories = document.querySelectorAll('.category')
    expect(categories.length).toBeGreaterThanOrEqual(4)

    const topics = document.querySelectorAll('.topic')
    expect(topics.length).toBeGreaterThanOrEqual(1)
  })

  test('chat and view all buttons exist', () => {
    expect(document.getElementById('chatBtn')).not.toBeNull()
    expect(document.getElementById('viewAll')).not.toBeNull()
  })
})
