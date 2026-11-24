import {Camera, MapPin} from 'lucide-react';
import {useState} from 'react';
import {CLIENT_PROFILE} from '../data/clientContent';
import {ParallaxMedia, RevealOnScroll} from './MotionPrimitives';

export function AboutSection() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section
      id="sobre-mi"
      className="border-b border-[#2B1F1E]/10 bg-[#FFFBF7] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left: Rich luxury cosmetic editorial visual with scroll-linked parallax + reserved portrait inset */}
          <RevealOnScroll className="lg:col-span-5" yOffset={24}>
            <div className="relative overflow-hidden rounded-3xl border border-[#B77A7D]/25 bg-[#F3E6DA] shadow-[0_20px_50px_-24px_rgba(43,31,30,0.2)]">
              <div className="aspect-[4/3] w-full overflow-hidden">
                {!imgFailed ? (
                  <ParallaxMedia range={14} className="h-full w-full">
                    <img
                      src={CLIENT_PROFILE.assets.heroBrushes}
                      alt="Brochas de maquillaje profesional, rubor rosa suave y seda color champán"
                      referrerPolicy="no-referrer"
                      onError={() => setImgFailed(true)}
                      className="h-full w-full object-cover object-center"
                    />
                  </ParallaxMedia>
                ) : (
                  <div className="flex h-full items-center justify-center bg-[#F3E6DA] p-8">
                    <span className="font-editorial text-2xl italic text-[#2B1F1E]">
                      {CLIENT_PROFILE.brandName}
                    </span>
                  </div>
                )}
              </div>

              <div className="border-t border-[#B77A7D]/20 bg-[#FFFBF7] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#B77A7D]/45 bg-[#F3E6DA]/70">
                    <Camera
                      className="h-5 w-5 text-[#8A4F53]"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="font-editorial text-xl font-medium text-[#2B1F1E]">
                      Retrato oficial de {CLIENT_PROFILE.brandName}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#2B1F1E]/70">
                      Espacio reservado para integrar su fotografía personal real
                      sin alterar su identidad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Verified biography & approach */}
          <RevealOnScroll
            delay={0.08}
            yOffset={24}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <p className="text-xs font-medium tracking-wider text-[#8A4F53]">
              Sobre Michelle Rodríguez
            </p>
            <h2 className="font-editorial mt-3 text-balance text-3xl font-medium leading-tight text-[#2B1F1E] sm:text-4xl md:text-[2.75rem]">
              Pasión por el maquillaje, el cuidado capilar y el aprendizaje constante
            </h2>

            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-[#2B1F1E]/80 md:text-base">
              <p>
                Michelle Rodríguez desarrolla su propuesta bajo el nombre{' '}
                <strong className="font-medium text-[#2B1F1E]">
                  {CLIENT_PROFILE.facebookPageName}
                </strong>{' '}
                y su comunidad digital{' '}
                <strong className="font-medium text-[#2B1F1E]">
                  {CLIENT_PROFILE.instagramHandle}
                </strong>
                , integrando el mundo del maquillaje, el cuidado del cabello y la
                belleza personal desde {CLIENT_PROFILE.location}.
              </p>

              <p>
                En su canal oficial de YouTube{' '}
                <strong className="font-medium text-[#2B1F1E]">
                  ({CLIENT_PROFILE.youtubeChannelName})
                </strong>{' '}
                comparte de manera cercana sus experiencias como profesional de la
                belleza, incluyendo su viaje desde Arequipa hacia Lima para asistir
                a la masterclass de las Hermanas Brulee sobre color y transformación
                capilar.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 border-t border-[#2B1F1E]/10 pt-7 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#8A4F53]"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-xs font-medium text-[#2B1F1E]/60">
                    Ciudad confirmada
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#2B1F1E]">
                    {CLIENT_PROFILE.location}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-[#2B1F1E]/60">
                  Biografía completa
                </p>
                <p className="mt-1 text-sm text-[#2B1F1E]/75">
                  Lista para ampliar con su trayectoria e historia personal confirmada.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
