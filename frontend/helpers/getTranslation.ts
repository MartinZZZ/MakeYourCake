import {
  CakeShape,
  Cream,
  Dough,
  Filling,
  Frosting,
  Limitation,
} from '../types/cake'

type Colors = 'yellow' | 'white' | 'brown' | 'red'

type TranslationKey =
  | CakeShape
  | Cream
  | Filling
  | Dough
  | Frosting
  | 'shape'
  | 'portions'
  | 'cream'
  | 'frosting'
  | 'filling'
  | 'dough'
  | 'square'
  | Colors
  | Limitation

const translations: Record<TranslationKey, string> = {
  shape: 'Tvar',
  portions: 'Počet porcií',
  cream: 'Krém',
  frosting: 'Poleva',
  yellow: 'Žltý',
  vanilla: 'Vanilka',
  round: 'Kruhová',
  filling: 'Plnka',
  dough: 'Cesto',
  chocolate: 'Čokoláda',
  strawberry: 'Jahoda',
  square: 'Štvorcová',
  brown: 'Hnedý',
  red: 'Červený',
  white: 'Biely',
  nuts: 'Orech',
  'gluten-free': 'bez lepku',
  'lactose-free': 'bez laktózy',
  vegie: 'vegánska',
}

export const getTranslation = (s: string) => {
  const translation = translations[s]

  return translation ?? s
}
