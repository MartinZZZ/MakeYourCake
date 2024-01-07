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

    | 'coffee'
    | 'name'
    | 'size'
    | 'flavour'

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
    blueberry: 'Čučoriedka',	
    square: 'Štvorcová',
    brown: 'Hnedý',
    red: 'Červený',
    pink: 'Ružový',
    blue: 'Modrý',
    white: 'Biely',
    nuts: 'Orech',
    'gluten-free': 'bez lepku',
    'lactose-free': 'bez laktózy',
    vegie: 'vegánska',

    coffee: 'Kávová',
    name: 'Názov torty',
    size: 'Priemer v cm',
    flavour: 'Príchuť'


}

export const getTranslation = (s: string) => {
    const translation = translations[s]

    return translation ?? s
}
