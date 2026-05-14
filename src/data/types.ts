export type Locale = 'es' | 'en';

export type LocalizedString = Record<Locale, string>;

export type LocalizedArray = Record<Locale, string[]>;

export type Link = {
  label: string;
  href: string;
};
