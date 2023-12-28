
export const ItemVlastna = (props) => {
    return {
        'cream': props.rest.cream,
        'frosting': props.rest.frosting,
        'filling': props.rest.filling,
        'dough': props.rest.dough,
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