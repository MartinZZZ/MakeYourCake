import {ItemToString, ItemVlastna, ItemZPonuky, KosikItems} from "./KosikItems";


export const AddToKosik = (vlastny: boolean, rest, limitations = null, id = null, price: any = 50) => {
    // todo - price by malo byt number ale bez :any dava error
    if (vlastny) {

        let newItem = ItemVlastna({rest, limitations});
        let name = ItemToString(newItem)

        if (!KosikItems.ItemsVlastnyDizajn[name]) {
            KosikItems.ItemsVlastnyDizajn[name] = {'amount': 0, 'properties': newItem, 'price': price}
        }
        KosikItems.ItemsVlastnyDizajn[name].amount++

    } else {

        let newItem = ItemZPonuky({rest, limitations});
        let name = ItemToString(newItem)

        if (!KosikItems.ItemsZPonuky[name]) {
            KosikItems.ItemsZPonuky[name] = {'amount': 0, 'properties': newItem, 'price': price, 'id': id}
        }

        KosikItems.ItemsZPonuky[name].amount++
    }
}


export const UpdateKosik = (vlastny, item) => {

    if (item.amount > 0) return
    vlastny ? delete KosikItems.ItemsVlastnyDizajn[ItemToString(item.properties)] : delete KosikItems.ItemsZPonuky[ItemToString(item.properties)]
}
