type ItemZPonuky = {
  name: string
  size: number
  flavour: string
}

type Y = {
  amount: number
  price: number
  properties: ItemZPonuky
  id: string
  restrictions: Array<string>
}

type ItemVlastna = {
  portions: number
  shape: string
  cream: string
  frosting: string
  filling: string
  dough: string
}

type X = {
  amount: number
  price: number
  properties: ItemVlastna
}

type Props = {
  ItemsVlastnyDizajn: Record<string, X>
  ItemsZPonuky: Record<string, Y>
}

export const KosikItems: Props = {
  ItemsVlastnyDizajn: {},
  ItemsZPonuky: {},
}

export const ItemVlastna = (props) => {
  return {
    portions: props.rest.portions,
    shape: props.rest.shape,
    cream: props.rest.cream,
    frosting: props.rest.frosting,
    filling: props.rest.filling,
    dough: props.rest.dough,
  }
}

export const ItemZPonuky = (props) => {
  return {
    name: props.rest.name,
    size: props.rest.size,
    flavour: props.rest.flavour,
  }
}

// vrati item ako string - key pri AddToKosik
export const ItemToString = (item: {}) => {
  let str = ''
  {
    Object.entries(item)
      .sort()
      .map(([key, value]) => {
        str += key.toString() + value.toString()
      })
    return str
  }
}
