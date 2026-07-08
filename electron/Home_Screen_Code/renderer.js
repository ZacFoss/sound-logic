window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quick').forEach(el => el.addEventListener('click', () => alert('Open: ' + el.innerText.trim())) )
  document.querySelector('.edit').addEventListener('click', () => alert('Edit profile'))
})
