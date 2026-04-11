import { Icon } from '@iconify/react'
import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

/** HTML body for the inbox — matches portfolio gold / deep black palette (inline styles for email clients). */
function buildEmailHtml({ name, email, message }) {
  const safe = (s) =>
    String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  const nl = (s) => safe(s).replace(/\n/g, '<br/>')
  return message
}

export default function Contact() {
  const accessKey ='f631ada8-dcd1-49bd-9163-be62a95354b7'
  const [formOpen, setFormOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const closeForm = useCallback(() => {
    setFormOpen(false)
    setStatus('idle')
    setFeedback('')
  }, [])

  useEffect(() => {
    if (!formOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') closeForm()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [formOpen, closeForm])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!accessKey) {
      setFeedback(
        'try again later!'
      )
      setStatus('error')
      return
    }
    setStatus('sending')
    setFeedback('')
    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key:accessKey,
          subject: `Portfolio — message from ${name.trim()}`,
          from_name: 'You have a new message!',
          name: name.trim(),
          email: email.trim(),
          replyto: email.trim(),
          message: buildEmailHtml({ name: name.trim(), email: email.trim(), message: message.trim() }),
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setFeedback("message sent successfully — we'll get back to you shortly!.")
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
        setFeedback(data.message || 'Something went wrong. Try again.')
      }
    } catch {
      setStatus('error')
      setFeedback('Network error. Check your connection and try again!.')
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-36 px-6 lg:px-8 relative overflow-hidden bg-[#0A0A0A]">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-4xl bg-[#222] mx-auto relative z-10 text-center scroll-reveal border border-[#C9A84C]/10 p-12 lg:p-20  bg-white/[0.01] rounded-lg">
        <div className="w-16 h-16 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/5 flex items-center justify-center mx-auto mb-8">
          <Icon icon="solar:letter-linear" width={28} className="text-[#C9A84C]" strokeWidth={1.5} />
        </div>

        <h2 className="font-serif text-4xl lg:text-5xl tracking-tight leading-tight mb-6">
          Ready to build something <br />
          <span className="italic text-[#C9A84C]">extraordinary?</span>
        </h2>
        <p className="text-base text-white/50 mb-10 max-w-lg mx-auto">
          Currently accepting new projects for Q3. If you have a complex web application or software
          architecture in mind, let&apos;s discuss how we can bring it to life.
        </p>

        <button
          type="button"
          className="group inline-flex items-center gap-3 px-10 py-5 rounded-full text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
          style={{
            background: 'linear-gradient(135deg, #C9A84C, #E8D48B, #C9A84C)',
            color: '#0A0A0A',
          }}
          onClick={() => setFormOpen(true)}
        >
          Get in Touch
          <Icon
            icon="solar:arrow-right-linear"
            width={16}
            className="group-hover:translate-x-1 transition-transform"
            strokeWidth={1.5}
          />
        </button>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/40">
          <span className="flex items-center gap-2">
            <Icon icon="solar:map-point-linear" width={16} /> Based in Lagos, Nigeria
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
          <span className="flex items-center gap-2">
            <Icon icon="solar:global-linear" width={16} /> Working Globally
          </span>
        </div>

        {formOpen &&
          createPortal(
            <div
              className="fixed inset-0 z-[9999] overflow-y-auto overflow-x-hidden overscroll-contain"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-form-title"
            >
              <div className="flex min-h-screen w-full items-center justify-center p-4 sm:p-6 py-8 sm:py-10 [padding-bottom:max(2rem,env(safe-area-inset-bottom))]">
                <button
                  type="button"
                  className="fixed inset-0 z-0 bg-black/75 backdrop-blur-sm"
                  aria-label="Close contact form"
                  onClick={closeForm}
                />
                <div className="relative z-10 mx-auto w-full min-w-0 max-w-lg rounded-2xl border border-[#C9A84C]/25 bg-[#141414] shadow-[0_0_60px_rgba(201,168,76,0.12)] p-6 sm:p-10 text-left">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="min-w-0 pr-2">
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#C9A84C]/80 mb-1">Contact</p>
                      <h4 id="contact-form-title" className="font-serif text-xl sm:text-2xl text-white">
                        Get in Touch
                      </h4>
                    </div>
                    <button
                      type="button"
                      onClick={closeForm}
                      className="shrink-0 rounded-full border border-white/10 p-2 text-white/50 hover:text-white hover:border-[#C9A84C]/40 transition-colors"
                      aria-label="Close"
                    >
                      <Icon icon="solar:close-circle-linear" width={24} />
                    </button>
                  </div>

                  <form className="contact-form flex flex-col gap-4 sm:gap-6" onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="contact-name">Full Name</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email">Email Address</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message">Message</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about your project…"
                      />
                    </div>

                    {feedback && (
                      <p
                        className={`text-sm ${status === 'success' ? 'text-[#E8D48B]' : 'text-red-500'}`}
                        role="status"
                      >
                        {feedback}
                      </p>
                    )}

                    <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="inline-flex items-center justify-center gap-2 w-[50%] rounded-full px-8 py-3.5 text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300 disabled:opacity-55 disabled:cursor-not-allowed hover:shadow-[0_0_24px_rgba(201,168,76,0.25)]"
                        style={{
                          background: 'linear-gradient(135deg, #C9A84C, #E8D48B, #C9A84C)',
                          color: '#0A0A0A',
                        }}
                      >
                        {status === 'sending' ? 'Sending…' : 'Send'}
                      </button>
                      <button
                        type="button"
                        onClick={closeForm}
                        className="rounded-full border border-white/15 bg-transparent px-6 py-3.5 text-xs tracking-[0.14em] uppercase text-white/65 transition-colors hover:border-[#C9A84C]/45 hover:text-white/90 w-[50%]"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>,
            document.body
          )}
      </div>
    </section>
  )
}
