'use client'

import type { FormEvent } from 'react'
import { Gift, LockKeyhole, ShieldCheck } from 'lucide-react'

const CONTACT_EMAIL = 'frequenciadivina007@gmail.com'

export function GiftBookSection({ completedDays }: { completedDays: number }) {
  const unlocked = completedDays >= 30

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = 'Solicitud del libro Frecuencia Divina 7'
    const body = [
      'Hola, quiero solicitar mi libro de regalo Frecuencia Divina 7.',
      '',
      `Nombre: ${formData.get('fullName')}`,
      `Correo electrónico: ${formData.get('email')}`,
      `País: ${formData.get('country')}`,
      `Estado / provincia: ${formData.get('region')}`,
      `Ciudad: ${formData.get('city')}`,
      `Código postal: ${formData.get('postalCode')}`,
      `Dirección completa: ${formData.get('address')}`,
      `Teléfono: ${formData.get('phone') || 'No indicado'}`,
    ].join('\n')

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className={`gift-book-section${unlocked ? ' is-unlocked' : ''}`} aria-labelledby="gift-book-title">
      <div className="gift-book-card">
        <div className="gift-book-copy">
          <div className="gift-book-icon" aria-hidden="true">{unlocked ? <Gift /> : <LockKeyhole />}</div>
          <p className="section-kicker">UN REGALO ESPECIAL PARA TI</p>
          <h2 id="gift-book-title">Completa tus 30 días<br /><i>y recibe un regalo en casa.</i></h2>
          <p className="gift-book-description">Al completar los 30 días de Frecuencia Divina, podrás solicitar tu libro de regalo. Marca cada práctica como completada para desbloquear el formulario de envío.</p>
          <div className="gift-book-progress" aria-label={`${Math.min(completedDays, 30)} de 30 días completados`}>
            <div className="gift-book-progress-label"><span>TU RECORRIDO</span><strong>{Math.min(completedDays, 30)} / 30 días</strong></div>
            <div className="gift-book-progress-track"><span style={{ width: `${Math.min(completedDays, 30) / 30 * 100}%` }} /></div>
          </div>
          {!unlocked && <p className="gift-book-locked-note"><LockKeyhole size={15} /> El formulario se desbloquea al completar las 30 prácticas.</p>}
        </div>
        <div className="gift-book-product">
          <img src="/frecuencia-divina-book.png" alt="Edición de regalo Frecuencia Divina 7 en una caja azul marino con detalles dorados" />
          <span>Tu regalo: Frecuencia Divina 7</span>
        </div>

        {unlocked && (
          <div className="gift-book-form-area" aria-live="polite">
            <div className="gift-book-form-heading">
              <span className="section-kicker">¡LO LOGRASTE!</span>
              <h3>¿Dónde deseas recibir tu libro?</h3>
              <p>Completa tus datos de envío para preparar la solicitud de tu ejemplar.</p>
            </div>
            <form className="gift-book-form" onSubmit={handleSubmit}>
              <label>Nombre completo<input name="fullName" autoComplete="name" required /></label>
              <label>Correo electrónico<input name="email" type="email" autoComplete="email" required /></label>
              <label>País<input name="country" autoComplete="country-name" required /></label>
              <label>Estado / provincia<input name="region" autoComplete="address-level1" required /></label>
              <label>Ciudad<input name="city" autoComplete="address-level2" required /></label>
              <label>Código postal<input name="postalCode" autoComplete="postal-code" required /></label>
              <label className="gift-address-field">Dirección completa (calle, número y complemento)<textarea name="address" autoComplete="street-address" rows={3} required /></label>
              <label>Teléfono de contacto (opcional)<input name="phone" type="tel" autoComplete="tel" /></label>
              <button className="gold-button gift-book-submit" type="submit">Solicitar mi libro de regalo <Gift size={18} /></button>
            </form>
            <p className="gift-book-mail-note">Se abrirá un borrador en tu aplicación de correo. Revisa los datos y pulsa “Enviar” para completar la solicitud.</p>
            <p className="gift-book-privacy"><ShieldCheck size={18} /> Tus datos no se guardan en este sitio. Solo se incluirán en el correo que podrás revisar y enviar.</p>
          </div>
        )}
      </div>
    </section>
  )
}
