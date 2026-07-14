window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('viewAll').addEventListener('click', () => alert('Viewing all popular topics'))
  document.getElementById('chatBtn').addEventListener('click', () => alert('Starting chat...'))
  document.getElementById('searchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') alert('Search: ' + e.target.value)
  })
})
