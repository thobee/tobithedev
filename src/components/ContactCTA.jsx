import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Container from './ui/Container';
import CircleCTA from './ui/CircleCTA';

const ContactCTA = ({ dark = false }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    if (!serviceID || !templateID || !publicKey) {
      setSubmitMessage(
        'Email is not configured. Add EmailJS keys to your .env file and restart the server.'
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const emailjs = (await import('@emailjs/browser')).default;
      await emailjs.send(
        serviceID,
        templateID,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        { publicKey }
      );
      setSubmitMessage('Message sent — I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setSubmitMessage('Something went wrong. Try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const text = dark ? 'text-white' : 'text-[var(--color-text)]';
  const muted = dark ? 'text-white/45' : 'text-[var(--color-text-muted)]';
  const field = dark
    ? 'w-full bg-transparent border-0 border-b border-white/20 px-0 py-3 text-white placeholder:text-white/35 outline-none focus:border-white transition-colors'
    : 'w-full bg-transparent border-0 border-b border-[var(--color-border-strong)] px-0 py-3 text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none focus:border-[var(--color-text)] transition-colors';

  return (
    <section
      id="contact"
      className={`relative overflow-hidden section-padding ${
        dark ? 'section-dark' : 'section-light'
      }`}
    >
      {/* Soft atmospheric wash — not a flat slab */}
      {!dark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,89,248,0.07),transparent_55%),linear-gradient(180deg,var(--color-surface-muted)_0%,var(--color-surface)_42%)]"
        />
      )}
      {dark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,89,248,0.12),transparent_50%)]"
        />
      )}

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-16"
        >
          <div className="max-w-2xl">
            <p className={`label-mono mb-5 ${muted}`}>Start a conversation</p>
            <h2 className={`heading-section heading-editorial lowercase ${text}`}>
              got a project in mind?
              <br />
              let's talk.
            </h2>
            <p className={`mt-5 max-w-md text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed ${muted}`}>
              Open to freelance, collaborations, and full-time roles.
              Tell me what you&apos;re building — I&apos;ll reply within a couple of hours.
            </p>
          </div>

          <CircleCTA
            href="#contact-form"
            className="shrink-0 self-start md:self-auto"
          >
            Get in touch
          </CircleCTA>
        </motion.div>

        <div className={`my-12 md:my-16 h-px w-full ${dark ? 'bg-white/10' : 'bg-[var(--color-border)]'}`} />

        <div className="grid gap-12 lg:gap-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          {/* Direct contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="space-y-8"
          >
            <div>
              <p className={`label-mono mb-3 ${muted}`}>Email</p>
              <a
                href="mailto:oyestobi@gmail.com"
                className={`group inline-flex items-baseline gap-1.5 sm:gap-2 text-[clamp(1rem,4vw,1.75rem)] font-semibold tracking-tight break-all hover:opacity-70 transition-opacity ${text}`}
              >
                oyestobi@gmail.com
                <ArrowUpRight
                  className="w-4 h-4 md:w-5 md:h-5 shrink-0 opacity-40 group-hover:opacity-100 transition-opacity"
                  aria-hidden
                />
              </a>
            </div>

            <div>
              <p className={`label-mono mb-3 ${muted}`}>Phone</p>
              <a
                href="tel:+2348102877413"
                className={`text-[clamp(1.05rem,2vw,1.35rem)] font-medium hover:opacity-70 transition-opacity ${text}`}
              >
                +234 810 287 7413
              </a>
            </div>

            <div>
              <p className={`label-mono mb-3 ${muted}`}>Based in</p>
              <p className={`text-base font-medium ${text}`}>Abuja, Nigeria</p>
            </div>
          </motion.div>

          {/* Form */}
          {/* Form — always on-site so visitors never need a mail app */}
          <motion.div
              id="contact-form"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className={`label-mono mb-8 ${muted}`}>Or send a message</p>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <label className="block">
                    <span className={`label-mono mb-2 block ${muted}`}>Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Your name"
                      className={field}
                    />
                  </label>
                  <label className="block">
                    <span className={`label-mono mb-2 block ${muted}`}>Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="you@email.com"
                      className={field}
                    />
                  </label>
                </div>

                <label className="block">
                  <span className={`label-mono mb-2 block ${muted}`}>Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    placeholder="What are you building?"
                    className={`${field} resize-none`}
                  />
                </label>

                <div className="flex flex-wrap items-center gap-5 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-pill disabled:opacity-50 ${
                      dark
                        ? 'btn-pill-dark !bg-white !text-black !border-transparent hover:!opacity-90'
                        : '!bg-[var(--color-text)] !text-[var(--color-surface)] !border-transparent hover:!opacity-90'
                    }`}
                  >
                    {isSubmitting ? 'Sending…' : 'Send message'}
                    {!isSubmitting && <ArrowUpRight className="w-4 h-4" aria-hidden />}
                  </button>

                  {submitMessage && (
                    <p
                      className={`text-sm ${
                        submitMessage.includes('sent')
                          ? dark
                            ? 'text-emerald-400'
                            : 'text-emerald-600'
                          : dark
                            ? 'text-red-400'
                            : 'text-red-600'
                      }`}
                    >
                      {submitMessage}
                    </p>
                  )}
                </div>
              </form>
            </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactCTA;
