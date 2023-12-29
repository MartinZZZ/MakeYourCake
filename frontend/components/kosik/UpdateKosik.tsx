import {ItemToString, ItemVlastna, ItemZPonuky, KosikItems} from "./KosikItems";


export const AddToKosik = (vlastny: boolean, rest, limitations = null, id = null, price: any = 50) => {
    // todo - price by malo byt number ale bez :any dava error
    if (vlastny) {

        let newItem = ItemVlastna({rest, limitations});
        let name = ItemToString(newItem)

        if (!KosikItems.experimentItemVlastne[name]) {
            KosikItems.experimentItemVlastne[name] = {'amount': 0, 'properties': newItem, 'price': price}
        }
        KosikItems.experimentItemVlastne[name].amount++

    } else {

        let newItem = ItemZPonuky({rest, limitations});
        let name = ItemToString(newItem)

        if (!KosikItems.experimentItemZPonuky[name]) {
            KosikItems.experimentItemZPonuky[name] = {'amount': 0, 'properties': newItem, 'price': price, 'id': id}
        }

        KosikItems.experimentItemZPonuky[name].amount++
    }
}


export const UpdateKosik = (vlastny, item) => {

    if (item.amount > 0) return
    vlastny ? delete KosikItems.experimentItemVlastne[ItemToString(item.properties)] : delete KosikItems.experimentItemZPonuky[ItemToString(item.properties)]
}
