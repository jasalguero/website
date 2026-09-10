import './style.css'

document.querySelector('#year').textContent = new Date().getFullYear()

const form = document.querySelector('#contact-form')
const status = document.querySelector('#form-status')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  if (!form.reportValidity()) return

  const data = new FormData(form)
  const name = data.get('name').trim()
  const email = data.get('email').trim()
  const message = data.get('message').trim()
  const subject = encodeURIComponent(`Website enquiry from ${name}`)
  const body = encodeURIComponent(`Hi Jose,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`)

  status.textContent = 'Opening your mail app…'
  window.location.href = `mailto:contact@jasalguero.com?subject=${subject}&body=${body}`

  window.setTimeout(() => {
    status.textContent = 'Your message is ready in your mail app. Please review it and press send.'
  }, 800)
})

const revealItems = document.querySelectorAll('.reveal')

revealItems.forEach((item, index) => {
  item.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`)
})

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })

  revealItems.forEach((item) => observer.observe(item))
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'))
}

const progress = document.querySelector('.scroll-progress')
let scrollFrame

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  const amount = scrollable > 0 ? window.scrollY / scrollable : 0
  progress.style.transform = `scaleX(${Math.min(1, Math.max(0, amount))})`
  scrollFrame = null
}

window.addEventListener('scroll', () => {
  if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScrollProgress)
}, { passive: true })

updateScrollProgress()
