/* eslint-disable */
module.exports = () => {
  let $els = document.querySelectorAll('.el')

  $els.forEach($el => {
    $el.classList.add('loaded');
    let bounds = $el.getBoundingClientRect()
    let center = {
      x: bounds.width / 2,
      y: bounds.height / 2
    }
    $el.addEventListener('mouseenter', evt => {
      $el.classList.add('no-transition');
      //$el.classList.remove('hover');
      $el.style.setProperty('--x', evt.offsetX)
      $el.style.setProperty('--y', evt.offsetY)
      $el.style.setProperty('--startx', evt.offsetX)
      $el.style.setProperty('--starty', evt.offsetY)
      $el.style.setProperty('--background-opacity', 1)
      setTimeout(() => {
        $el.classList.remove('no-transition');
        //$el.classList.add('hover');
        $el.style.setProperty('--x', center.x)
        $el.style.setProperty('--y', center.y)
      }, 0)
    })
    $el.addEventListener('mouseleave', evt => {
      $el.style.setProperty('--x', evt.offsetX)
      $el.style.setProperty('--y', evt.offsetY)
      $el.style.setProperty('--startx', evt.offsetX)
      $el.style.setProperty('--starty', evt.offsetY)
      $el.style.setProperty('--background-opacity', 0)
    })
  })

   // ranges
  ;['pad'].forEach(type => {
    document.getElementById(type).addEventListener('input', (e) => {
      let value = e.target.value
      document.querySelectorAll('.el').forEach(el => {
        el.style.setProperty('--' + type, value)
      })
      document.getElementById('value' + type).innerHTML = value
    })
  })
}
