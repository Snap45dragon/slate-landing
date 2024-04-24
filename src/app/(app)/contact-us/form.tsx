'use client'
import { useEffect, useState } from 'react'
import { useFormState } from 'react-dom'
import { formAction } from './formAction'

const Form = () => {
  const [state, action] = useFormState(formAction, {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (state.email) setSuccess(true)
  }, [state])

  return (
    <div className="form-wrap">
      <div className="form-block w-form">
        <form
          action={action}
          id="wf-form-Contact-Form"
          className="form-minimum-width"
          aria-label="Contact Form"
          style={success ? { display: 'none' } : {}}
        >
          <div className="w-layout-grid contact-form-grid wf-grid">
            <div className="input-block">
              <input
                className="form-input-field w-input"
                maxLength={256}
                name="name"
                placeholder="Name"
                type="text"
                id="name"
                required
              />
            </div>
            <div className="input-block">
              <input
                className="form-input-field w-input"
                maxLength={256}
                name="email"
                placeholder="Email"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="input-block">
              <input
                className="form-input-field w-input"
                maxLength={256}
                name="phone"
                placeholder="Phone"
                type="tel"
                id="phone"
                required
              />
            </div>
            <div className="input-block">
              <input
                className="form-input-field w-input"
                maxLength={256}
                name="subject"
                placeholder="Subject"
                type="text"
                id="subject"
                required
              />
            </div>
          </div>
          <div className="form-text-area">
            <textarea
              className="form-input-field text-area w-input"
              maxLength={5000}
              name="message"
              placeholder="Hello I am looking for.."
              id="message"
              required
            />
          </div>
          <div className="contact-form-button-section right-align">
            <input
              type="submit"
              className="button-large form-button w-button"
              onClick={() => setLoading(true)}
              defaultValue={loading ? 'Please wait...' : 'Submit'}
            />
          </div>
        </form>
        <div
          className="success-message w-form-done"
          tabIndex={-1}
          role="region"
          aria-label="Contact Form success"
          style={success ? { display: 'block' } : {}}
        >
          <div className="success-message-title">
            {' '}
            Thank you! Your submission has been received!{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
