import {CLIENT_PROFILE} from '../data/clientContent';
import {FacebookIcon, InstagramIcon, YouTubeIcon} from './SocialIcons';

export function Footer() {
  return (
    <footer className="border-t border-[#E8C5C0]/15 bg-[#2B1F1E] text-[#FFFBF7]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <a
              href="#inicio"
              className="font-editorial text-3xl font-medium tracking-tight text-[#FFFBF7]"
            >
              {CLIENT_PROFILE.brandName}
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#F3E6DA]/75">
              {CLIENT_PROFILE.category} · {CLIENT_PROFILE.location}
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-medium text-[#E8C5C0]">Navegación</p>
            <ul className="mt-4 grid grid-cols-2 gap-y-2.5 text-sm text-[#FFFBF7]/80">
              <li>
                <a href="#inicio" className="hover:text-[#FFFBF7]">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-[#FFFBF7]">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-[#FFFBF7]">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portafolio" className="hover:text-[#FFFBF7]">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#videos" className="hover:text-[#FFFBF7]">
                  Videos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#FFFBF7]">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-medium text-[#E8C5C0]">Contacto</p>
            <div className="mt-4 space-y-2 text-sm text-[#FFFBF7]/85">
              <p>
                <a
                  href={CLIENT_PROFILE.phoneHref}
                  className="tabular-nums hover:text-[#E8C5C0]"
                >
                  {CLIENT_PROFILE.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={CLIENT_PROFILE.emailHref}
                  className="hover:text-[#E8C5C0]"
                >
                  {CLIENT_PROFILE.email}
                </a>
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={CLIENT_PROFILE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Michelle Rodríguez"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E8C5C0]/25 text-[#FFFBF7] transition-colors hover:border-[#E8C5C0] hover:text-[#E8C5C0]"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={CLIENT_PROFILE.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Michelle Rodríguez Makeup"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E8C5C0]/25 text-[#FFFBF7] transition-colors hover:border-[#E8C5C0] hover:text-[#E8C5C0]"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={CLIENT_PROFILE.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube de Michelle Rodríguez"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E8C5C0]/25 text-[#FFFBF7] transition-colors hover:border-[#E8C5C0] hover:text-[#E8C5C0]"
              >
                <YouTubeIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#E8C5C0]/15 pt-8 text-xs text-[#F3E6DA]/65 sm:flex-row sm:items-center">
          <p>© 2026 {CLIENT_PROFILE.brandName}. Todos los derechos reservados.</p>
          <p>{CLIENT_PROFILE.instagramHandle}</p>
        </div>
      </div>
    </footer>
  );
}
