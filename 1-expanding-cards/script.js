const panels = document.querySelectorAll(".panel")

panels.forEach(panel => {
  panel.onclick = () => {
    removeActiveClasses()
    panel.classList.add('active')
  }
})

const removeActiveClasses = () => {
  panels.forEach(panel => panel.classList.remove('active'))
}