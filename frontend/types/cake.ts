import { type } from 'os'

export type CakeShape = 'round' | 'square'

export type Filling = 'chocolate' | 'vanilla' | 'strawberry'

export type Dough = 'chocolate' | 'vanilla' | 'nuts'

export type Frosting = 'chocolate' | 'vanilla'

export type Cream = 'white' | 'yellow' | 'brown' | 'red'

export type Option = {
  value: string
  label: string
}

export const limitations = ['lactose-free', 'gluten-free', 'vegie'] as const

export const limitationTranslations = {
  'lactose-free': 'bez laktózy',
  'gluten-free': 'bez lepku',
  vegie: 'vegánska',
} as const

export type Limitation = (typeof limitations)[number]
