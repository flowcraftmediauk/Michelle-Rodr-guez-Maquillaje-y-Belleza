import {ArrowUpRight, Check, Copy, Mail, MapPin, Phone} from 'lucide-react';
import {type FormEvent, useState} from 'react';
import {CLIENT_PROFILE} from '../data/clientContent';
import {RevealOnScroll} from './MotionPrimitives';
import {FacebookIcon, InstagramIcon, YouTubeIcon} from './SocialIcons';

export function SocialAndContactSection() {
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = senderEmail.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError('Por favor completa tu nombre, correo electrónico y mensaje.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError('Por favor ingresa un correo electrónico válido.');
      return;
    }

    setError('');
    setSubmitted(true);

    const subject = encodeURIComponent(
      `Consulta web para ${CLIENT_PROFILE.brandName} — ${trimmedName}`
    );
    const body = encodeURIComponent(
      `Nombre: ${trimmedName}\nCorreo: ${trimmedEmail}\n\nMensaje:\n${trimmedMessage}`
    );
    window.location.href = `${CLIENT_PROFILE.emailHref}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CLIENT_PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contacto"
      className="bg-gradient-to-b from-[#F3E6DA]/60 to-[#EEDCD0]/70 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left: Direct contact info & verified social profiles */}
          <RevealOnScroll
            yOffset={22}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <p className="text-xs font-medium tracking-wider text-[#8A4F53]">
                Contacto y redes oficiales
              </p>
              <h2 className="font-editorial mt-2.5 text-balance text-3xl font-medium leading-tight text-[#2B1F1E] sm:text-4xl">
                Conecta directamente con {CLIENT_PROFILE.brandName}
              </h2>
              <p className="mt-3.5 text-sm leading-relaxed text-[#2B1F1E]/80">
                Para consultas sobre maquillaje, colaboraciones o información
                directa, utiliza sus canales verificados.
              </p>

              <div className="mt-8 space-y-5 border-t border-[#2B1F1E]/12 pt-7">
                <a
                  href={CLIENT_PROFILE.phoneHref}
                  className="flex min-h-[52px] items-center gap-4 rounded-2xl border border-[#B77A7D]/25 bg-[#FFFBF7] px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2B1F1E]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3E6DA] text-[#8A4F53]">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#2B1F1E]/60">Teléfono</p>
                    <p className="text-base font-medium text-[#2B1F1E] tabular-nums">
                      {CLIENT_PROFILE.phoneDisplay}
                    </p>
                  </div>
                </a>

                <div className="flex min-h-[52px] items-center justify-between gap-3 rounded-2xl border border-[#B77A7D]/25 bg-[#FFFBF7] px-4 py-3 transition-all duration-200 hover:border-[#2B1F1E]">
                  <a
                    href={CLIENT_PROFILE.emailHref}
                    className="flex min-w-0 items-center gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3E6DA] text-[#8A4F53]">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] text-[#2B1F1E]/60">
                        Correo electrónico
                      </p>
                      <p className="truncate text-sm font-medium text-[#2B1F1E] sm:text-base">
                        {CLIENT_PROFILE.email}
                      </p>
                    </div>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label="Copiar correo electrónico"
                    className="inline-flex h-9 shrink-0 items-center gap-1 rounded-full bg-[#F3E6DA]/80 px-3 text-xs font-medium text-[#8A4F53] transition-colors hover:bg-[#F3E6DA] hover:text-[#2B1F1E]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex min-h-[52px] items-center gap-4 rounded-2xl border border-[#B77A7D]/25 bg-[#FFFBF7]/75 px-4 py-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3E6DA] text-[#8A4F53]">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#2B1F1E]/60">Ubicación</p>
                    <p className="text-base font-medium text-[#2B1F1E]">
                      {CLIENT_PROFILE.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media cards */}
            <div className="mt-8 border-t border-[#2B1F1E]/12 pt-7">
              <p className="text-xs font-medium text-[#2B1F1E]/65">
                Redes sociales verificadas
              </p>
              <div className="mt-3.5 grid grid-cols-1 gap-3">
                <a
                  href={CLIENT_PROFILE.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[50px] items-center justify-between rounded-2xl border border-[#B77A7D]/25 bg-[#FFFBF7] px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2B1F1E]"
                >
                  <span className="flex items-center gap-3">
                    <InstagramIcon className="h-4 w-4 text-[#8A4F53]" />
                    <span className="text-sm font-medium text-[#2B1F1E]">
                      Instagram · {CLIENT_PROFILE.instagramHandle}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[#2B1F1E]/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={CLIENT_PROFILE.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[50px] items-center justify-between rounded-2xl border border-[#B77A7D]/25 bg-[#FFFBF7] px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2B1F1E]"
                >
                  <span className="flex items-center gap-3">
                    <FacebookIcon className="h-4 w-4 text-[#8A4F53]" />
                    <span className="text-sm font-medium text-[#2B1F1E]">
                      Facebook · {CLIENT_PROFILE.facebookPageName}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[#2B1F1E]/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={CLIENT_PROFILE.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[50px] items-center justify-between rounded-2xl border border-[#B77A7D]/25 bg-[#FFFBF7] px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2B1F1E]"
                >
                  <span className="flex items-center gap-3">
                    <YouTubeIcon className="h-4 w-4 text-[#8A4F53]" />
                    <span className="text-sm font-medium text-[#2B1F1E]">
                      YouTube · {CLIENT_PROFILE.youtubeChannelName}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 text-[#2B1F1E]/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Direct Email Inquiry Composer */}
          <RevealOnScroll
            delay={0.08}
            yOffset={22}
            className="rounded-3xl border border-[#B77A7D]/25 bg-[#FFFBF7] p-6 shadow-[0_20px_50px_-26px_rgba(43,31,30,0.2)] sm:p-8 md:p-10 lg:col-span-7"
          >
            <p className="text-xs font-medium tracking-wider text-[#8A4F53]">
              Consulta directa por correo
            </p>
            <h3 className="font-editorial mt-2 text-2xl font-medium text-[#2B1F1E] sm:text-3xl">
              Envía un mensaje a {CLIENT_PROFILE.email}
            </h3>
            <p className="mt-2 text-sm text-[#2B1F1E]/75">
              Completa tus datos para redactar y abrir tu consulta directamente
              en tu aplicación de correo hacia Michelle Rodríguez.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-[#2B1F1E]"
                  >
                    Tu nombre
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre y apellido"
                    className="mt-2 min-h-[48px] w-full rounded-xl border border-[#2B1F1E]/18 bg-[#F3E6DA]/30 px-4 py-3 text-sm text-[#2B1F1E] placeholder:text-[#2B1F1E]/40 focus:border-[#8A4F53] focus:bg-[#FFFFFF] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-[#2B1F1E]"
                  >
                    Tu correo electrónico
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    className="mt-2 min-h-[48px] w-full rounded-xl border border-[#2B1F1E]/18 bg-[#F3E6DA]/30 px-4 py-3 text-sm text-[#2B1F1E] placeholder:text-[#2B1F1E]/40 focus:border-[#8A4F53] focus:bg-[#FFFFFF] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium text-[#2B1F1E]"
                >
                  Mensaje o consulta
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Cuéntale a Michelle sobre el servicio o consulta que necesitas..."
                  className="mt-2 w-full rounded-xl border border-[#2B1F1E]/18 bg-[#F3E6DA]/30 px-4 py-3 text-sm text-[#2B1F1E] placeholder:text-[#2B1F1E]/40 focus:border-[#8A4F53] focus:bg-[#FFFFFF] focus:outline-none"
                />
              </div>

              {error && (
                <p
                  role="alert"
                  className="rounded-xl border border-[#B77A7D]/50 bg-[#E8C5C0]/35 px-4 py-3 text-xs font-medium text-[#2B1F1E]"
                >
                  {error}
                </p>
              )}

              {submitted && !error && (
                <div
                  role="status"
                  className="rounded-xl border border-[#2B1F1E]/15 bg-[#F3E6DA]/70 px-4 py-3 text-xs leading-relaxed text-[#2B1F1E]"
                >
                  <p className="font-medium">
                    Se preparó tu mensaje para {CLIENT_PROFILE.email}.
                  </p>
                  <p className="mt-1 text-[#2B1F1E]/75">
                    Si tu gestor de correo no se abrió automáticamente, puedes
                    escribir directamente a{' '}
                    <a
                      href={CLIENT_PROFILE.emailHref}
                      className="underline underline-offset-2"
                    >
                      {CLIENT_PROFILE.email}
                    </a>{' '}
                    o llamar al {CLIENT_PROFILE.phoneDisplay}.
                  </p>
                </div>
              )}

              <div className="pt-1">
                <button
                  type="submit"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#2B1F1E] px-7 py-3.5 text-sm font-medium text-[#FFFBF7] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4A3533] active:scale-[0.98] sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B77A7D]"
                >
                  Abrir consulta por correo
                </button>
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
