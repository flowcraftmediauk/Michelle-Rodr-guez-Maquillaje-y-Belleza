export interface ConfirmedDiscipline {
  index: string;
  title: string;
  sourceLabel: string;
  description: string;
  pendingNote: string;
  image: string;
  imageAlt: string;
}

export interface PortfolioSlot {
  id: string;
  slotNumber: string;
  label: string;
  recommendedSubject: string;
  spanClass: string;
}

export interface VerifiedVideo {
  id: string;
  title: string;
  channelName: string;
  publishedDate: string;
  description: string;
  watchUrl: string;
  embedUrl: string;
  thumbnailUrl: string;
}

export const CLIENT_PROFILE = {
  brandName: 'Michelle Rodríguez',
  facebookPageName: 'Michelle Rodríguez Makeup',
  instagramHandle: '@michellermakeup',
  youtubeChannelName: 'Misha',
  category: 'Belleza, Cosmética y Cuidado Personal',
  location: 'Arequipa, Perú',
  phoneDisplay: '+51 918 384 945',
  phoneHref: 'tel:+51918384945',
  email: 'merch93.mr@gmail.com',
  emailHref: 'mailto:merch93.mr@gmail.com',
  socials: {
    instagram: 'https://www.instagram.com/michellermakeup?cnvx=MXJwZHl0ZGJjZzd5MQ==',
    facebook: 'https://www.facebook.com/share/19p2fHXtrC/',
    youtube: 'https://youtube.com/@michellermakeup?si=xMghWxaUJIHMLJl6',
  },
  assets: {
    heroVanity: '/src/assets/images/atelier_vanity_ambience_1795537160866.jpg',
    heroBrushes: '/src/assets/images/hero_makeup_atelier_1795536780897.jpg',
    editorialBrushes: '/src/assets/images/editorial_brushes_detail_1795536780970.jpg',
    serviceMakeup: '/src/assets/images/service_makeup_artistry_1795537161516.jpg',
    serviceHair: '/src/assets/images/service_hair_colorimetry_1795537162180.jpg',
    serviceCare: '/src/assets/images/service_personal_care_1795537161729.jpg',
  },
} as const;

export const CONFIRMED_DISCIPLINES: ConfirmedDiscipline[] = [
  {
    index: '01',
    title: 'Maquillaje Profesional',
    sourceLabel: 'Marca @michellermakeup',
    description:
      'Área central de su marca personal orientada al maquillaje y la estética facial desde Arequipa, Perú.',
    pendingNote:
      'Espacio preparado para detallar sus servicios específicos (social, novias, editorial o asesoría) y tarifas vigentes.',
    image: CLIENT_PROFILE.assets.serviceMakeup,
    imageAlt: 'Texturas de maquillaje satinado, pigmentos luminosos y brochas profesionales',
  },
  {
    index: '02',
    title: 'Color y Transformación Capilar',
    sourceLabel: 'Confirmado en YouTube Misha',
    description:
      'Formación continua en colorimetría y transformación capilar, compartida en su viaje profesional de Arequipa a Lima junto a las Hermanas Brulee.',
    pendingNote:
      'Espacio listo para incorporar los tratamientos y servicios capilares que ofrece actualmente.',
    image: CLIENT_PROFILE.assets.serviceHair,
    imageAlt: 'Elixires capilares en vidrio ámbar, herramientas doradas y seda color champán',
  },
  {
    index: '03',
    title: 'Belleza y Cuidado Personal',
    sourceLabel: 'Categoría verificada',
    description:
      'Enfoque integral en belleza, cosmética y cuidado personal respaldado por su comunidad digital y contenido audiovisual.',
    pendingNote:
      'Espacio disponible para incluir servicios complementarios, rutinas o paquetes personalizados.',
    image: CLIENT_PROFILE.assets.serviceCare,
    imageAlt: 'Sérum facial, piedra de cuarzo rosa y toalla suave sobre piedra travertino',
  },
];

export const PORTFOLIO_SLOTS: PortfolioSlot[] = [
  {
    id: 'slot-01',
    slotNumber: '01',
    label: 'Look principal de maquillaje',
    recommendedSubject: 'Fotografía real de transformación o maquillaje terminado por Michelle Rodríguez.',
    spanClass: 'md:col-span-6 lg:col-span-5',
  },
  {
    id: 'slot-02',
    slotNumber: '02',
    label: 'Detalle de rostro y piel luminosa',
    recommendedSubject: 'Primer plano real de acabado en piel, iluminación y armonía de tonos.',
    spanClass: 'md:col-span-6 lg:col-span-7',
  },
  {
    id: 'slot-03',
    slotNumber: '03',
    label: 'Color y transformación capilar',
    recommendedSubject: 'Fotografía real de trabajo en colorimetría o estilismo capilar.',
    spanClass: 'md:col-span-6 lg:col-span-4',
  },
  {
    id: 'slot-04',
    slotNumber: '04',
    label: 'Antes y después en estudio',
    recommendedSubject: 'Comparativa real de clienta autorizada para mostrar técnica y resultado.',
    spanClass: 'md:col-span-6 lg:col-span-4',
  },
  {
    id: 'slot-05',
    slotNumber: '05',
    label: 'Detrás de cámaras',
    recommendedSubject: 'Fotografía de Michelle Rodríguez trabajando o preparando su estación de belleza.',
    spanClass: 'md:col-span-12 lg:col-span-4',
  },
];

export const VERIFIED_VIDEO: VerifiedVideo = {
  id: 'jZo3IemdMdc',
  title: 'Conocí a las Hermanas Brulee y esto fue lo que pasó - Mi primer vlog',
  channelName: 'Misha (@michellermakeup)',
  publishedDate: '4 de agosto de 2026',
  description:
    'Primer vlog oficial desde Arequipa hacia Lima para asistir a la masterclass de las Hermanas Brulee, referentes en color y transformación capilar. Un recorrido cercano por su aprendizaje e inspiración como profesional de la belleza.',
  watchUrl: 'https://www.youtube.com/watch?v=jZo3IemdMdc',
  embedUrl: 'https://www.youtube-nocookie.com/embed/jZo3IemdMdc?autoplay=1&rel=0',
  thumbnailUrl: 'https://i3.ytimg.com/vi/jZo3IemdMdc/hqdefault.jpg',
};
