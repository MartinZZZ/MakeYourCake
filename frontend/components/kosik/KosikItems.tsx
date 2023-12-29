
export const KosikItems = {
    ItemsVlastnyDizajn: {} = {},
    ItemsZPonuky: {} = {}
}

export const ItemVlastna = (props) => {

    return {
        'portions': props.rest.portions,
        'shape': props.rest.shape,
        'cream': props.rest.cream,
        'frosting': props.rest.frosting,
        'filling': props.rest.filling,
        'dough': props.rest.dough
    }
}

export const ItemZPonuky = (props) => {
    return {
        'name': props.rest.name,
        'size': props.rest.size,
        'flavour': props.rest.flavour,
    }
}


// vrati item ako string - key pri AddToKosik
export const ItemToString = (item: {}) => {
    let str = ''
    {
        Object.entries(item).map(([key, value]) => {

            str += key.toString() + value.toString()
        })
        return str

    }
}



