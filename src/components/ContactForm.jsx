import { useEffect } from 'react'
import { TallyForm } from './TallyForm'

const ContactForm = () => {
  useEffect(() => {
    let d = document,
      w = 'https://tally.so/widgets/embed.js',
      v = function () {
        'undefined' != typeof Tally
          ? Tally.loadEmbeds()
          : d
              .querySelectorAll('iframe[data-tally-src]:not([src])')
              .forEach(function (e) {
                e.src = e.dataset.tallySrc
              })
      }
    if (d.querySelector('script[src="' + w + '"]')) v()
    else {
      let s = d.createElement('script')
      ;(s.src = w), (s.onload = v), (s.onerror = v), d.body.appendChild(s)
    }
  }, [])
  return (
    <TallyForm
      title="Contact Form"
      tallySrc="https://tally.so/embed/mJ1l0X?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
    />
  )
}

export { ContactForm }
