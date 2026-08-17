import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FORM_ENDPOINT = 'https://formspree.io/f/mqpzeodg';
const TOPICS = ['general', 'bug', 'partnership', 'other'];

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    setSending(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.reset();
        setStatus({ type: 'success', message: t('contact.success') });
      } else {
        const result = await response.json().catch(() => null);
        const errorMsg = result && result.errors
          ? result.errors.map((err) => err.message).join(', ')
          : t('contact.errorGeneric');
        setStatus({ type: 'error', message: errorMsg });
      }
    } catch {
      setStatus({ type: 'error', message: t('contact.errorNetwork') });
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="page">
      <div className="page-content">
        <h1>{t('contact.title')}</h1>
        <p className="subtitle">{t('contact.subtitle')}</p>

        <form className="card" onSubmit={handleSubmit} style={{ width: '100%', textAlign: 'left' }}>
          <input type="hidden" name="_subject" value="[Ohaeng] New inquiry" />
          <div className="field-group" aria-hidden="true" style={{ position: 'absolute', left: -9999 }}>
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="field-group">
            <label htmlFor="name">{t('contact.name')}</label>
            <input type="text" id="name" name="name" required autoComplete="name" style={{ width: '100%' }} />
          </div>

          <div className="field-group">
            <label htmlFor="email">{t('contact.email')}</label>
            <input type="email" id="email" name="email" required autoComplete="email" style={{ width: '100%' }} />
          </div>

          <div className="field-group">
            <label htmlFor="topic">{t('contact.topicLabel')}</label>
            <select id="topic" name="topic" defaultValue="general" style={{ width: '100%' }}>
              {TOPICS.map((topic) => (
                <option key={topic} value={topic}>{t(`contact.topic.${topic}`)}</option>
              ))}
            </select>
          </div>

          <div className="field-group">
            <label htmlFor="company">{t('contact.company')}</label>
            <input type="text" id="company" name="company" autoComplete="organization" style={{ width: '100%' }} />
          </div>

          <div className="field-group">
            <label htmlFor="message">{t('contact.message')}</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder={t('contact.messagePlaceholder')}
              style={{ width: '100%', minHeight: 120, resize: 'vertical' }}
            />
          </div>

          <button type="submit" className="button" disabled={sending} style={{ width: '100%' }}>
            {sending ? t('contact.sending') : t('contact.submit')}
          </button>

          {status.message && (
            <div className={`form-status ${status.type}`} role="status">
              {status.message}
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
