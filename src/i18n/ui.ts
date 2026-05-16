/**
 * i18n strings for Vlekkeloos.
 *
 * Add or edit translations here — both objects must share the same shape.
 * The `t()` helper below gives you typed lookups in your .astro components.
 */

export const languages = {
  nl: 'Nederlands',
  en: 'English',
} as const;

export const defaultLang = 'nl';

export const ui = {
  nl: {
    'nav.services': 'Diensten',
    'nav.work': 'Werk',
    'nav.about': 'Over ons',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',

    'hero.eyebrow': 'Vlekkeloos · Leeuwarden',
    'hero.title1': 'Schoon werk.',
    'hero.title2': 'Zonder gedoe.',
    'hero.body':
      'Twee jonge Friezen met één hoge standaard. Schoonmaak, glasbewassing en straatreiniging voor gemeentes, bedrijven en particulieren in Leeuwarden en omstreken.',
    'hero.cta.primary': 'Vraag offerte aan',
    'hero.cta.secondary': 'Onze diensten',

    'audiences.eyebrow': 'Voor wie',
    'audiences.title': 'Eén bedrijf, drie groepen die ons inhuren.',
    'audiences.municipalities.title': 'Gemeentes',
    'audiences.municipalities.body':
      'Straatreiniging met de Glutton, openbare ruimte en evenementen.',
    'audiences.business.title': 'Bedrijven',
    'audiences.business.body':
      'Kantoor, horeca en retail. Vast contract of op afroep.',
    'audiences.private.title': 'Particulieren',
    'audiences.private.body':
      'Huis, glas en verhuisschoonmaak — eenmalig of doorlopend.',

    'founders.eyebrow': 'De mensen erachter',
    'founders.title': 'Wij staan zelf op de straat.',
    'founders.body':
      "Geen anonieme uitzendkrachten of belmenu's. Gewoon wij, twee 21-jarigen die het werk zelf doen — en je dat via onze socials laten zien.",
    'founders.stat1.value': '2',
    'founders.stat1.label': 'oprichters',
    'founders.stat2.value': '24u',
    'founders.stat2.label': 'reactietijd',
    'founders.stat3.value': '1',
    'founders.stat3.label': 'vast aanspreekpunt',

    'motto.text1': 'Kies voor Vlekkeloos —',
    'motto.text2': 'omdat schoon écht schoon moet zijn.',

    'work.eyebrow': 'Het werk',
    'work.title': 'Onderweg met de Glutton.',
    'work.cta': 'Volg op Instagram',

    'cta.title': 'Klaar voor schoon werk?',
    'cta.body': 'Reactie binnen 24 uur. Vrijblijvende offerte.',
    'cta.button': 'Vraag offerte aan',

    'footer.kvk': 'KvK 96701900',
    'footer.rights': 'Alle rechten voorbehouden',

    'contact.title': 'Vraag een offerte aan',
    'contact.body':
      'Vertel ons in een paar zinnen wat je nodig hebt. We reageren binnen 24 uur met een prijsindicatie of een paar gerichte vragen.',
    'contact.name': 'Naam',
    'contact.company': 'Bedrijf (optioneel)',
    'contact.email': 'E-mailadres',
    'contact.phone': 'Telefoon',
    'contact.type': 'Type opdrachtgever',
    'contact.type.municipality': 'Gemeente',
    'contact.type.business': 'Bedrijf',
    'contact.type.private': 'Particulier',
    'contact.service': 'Type werk',
    'contact.location': 'Locatie / postcode',
    'contact.message': 'Wat hebben we voor je nodig?',
    'contact.submit': 'Verstuur aanvraag',
    'contact.privacy':
      'We gebruiken je gegevens alleen om contact op te nemen over deze aanvraag.',
  },

  en: {
    'nav.services': 'Services',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',

    'hero.eyebrow': 'Vlekkeloos · Leeuwarden',
    'hero.title1': 'Clean work.',
    'hero.title2': 'No fuss.',
    'hero.body':
      'Two young Frisians with one high standard. Cleaning, window washing and street cleaning for municipalities, businesses and private clients in Leeuwarden and beyond.',
    'hero.cta.primary': 'Request a quote',
    'hero.cta.secondary': 'Our services',

    'audiences.eyebrow': 'Who we work with',
    'audiences.title': 'One company, three groups who hire us.',
    'audiences.municipalities.title': 'Municipalities',
    'audiences.municipalities.body':
      'Street cleaning with the Glutton, public space and events.',
    'audiences.business.title': 'Businesses',
    'audiences.business.body':
      'Office, hospitality and retail. On contract or on call.',
    'audiences.private.title': 'Private clients',
    'audiences.private.body':
      'Homes, windows and move-out cleaning — one-off or recurring.',

    'founders.eyebrow': 'The people behind it',
    'founders.title': 'We do the work ourselves.',
    'founders.body':
      'No anonymous temps or phone menus. Just us, two 21-year-olds doing the work — and showing you on our socials.',
    'founders.stat1.value': '2',
    'founders.stat1.label': 'founders',
    'founders.stat2.value': '24h',
    'founders.stat2.label': 'response time',
    'founders.stat3.value': '1',
    'founders.stat3.label': 'point of contact',

    'motto.text1': 'Choose Vlekkeloos —',
    'motto.text2': 'because clean should mean truly clean.',

    'work.eyebrow': 'The work',
    'work.title': 'Out and about with the Glutton.',
    'work.cta': 'Follow on Instagram',

    'cta.title': 'Ready for clean work?',
    'cta.body': 'Reply within 24 hours. Quote with no obligation.',
    'cta.button': 'Request a quote',

    'footer.kvk': 'KvK 96701900',
    'footer.rights': 'All rights reserved',

    'contact.title': 'Request a quote',
    'contact.body':
      "Tell us in a few sentences what you need. We'll reply within 24 hours with a price indication or a few targeted questions.",
    'contact.name': 'Name',
    'contact.company': 'Company (optional)',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.type': 'Type of client',
    'contact.type.municipality': 'Municipality',
    'contact.type.business': 'Business',
    'contact.type.private': 'Private',
    'contact.service': 'Type of work',
    'contact.location': 'Location / postal code',
    'contact.message': 'What do you need from us?',
    'contact.submit': 'Send request',
    'contact.privacy':
      "We only use your details to contact you about this request.",
  },
} as const;

export type Lang = keyof typeof ui;
export type TranslationKey = keyof (typeof ui)[typeof defaultLang];

/**
 * Get the language from an Astro URL. Falls back to defaultLang.
 *
 * Usage in a component:
 *   const lang = getLangFromUrl(Astro.url);
 *   const t = useTranslations(lang);
 *   <h1>{t('hero.title1')}</h1>
 */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment in ui) return segment as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Build a path prefixed with the current locale (omits prefix for default lang). */
export function localizedPath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return `/${lang}${clean}`;
}
