import { useEffect } from 'react'
import { TallyForm } from './TallyForm'

const ContactForm = () => {
  return (
    <TallyForm
      title="Contact Form"
      tallySrc="https://tally.so/embed/mJ1l0X?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      height="300px"
      className="mt-8"
    />
  )
}

export { ContactForm }
