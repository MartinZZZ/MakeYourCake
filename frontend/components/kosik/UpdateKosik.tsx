import {ItemToString, ItemVlastna, ItemZPonuky, KosikItems} from "./KosikItems";


export const AddToKosik = (vlastny: boolean, rest, limitations = null, id = null, price: any = 50) => {
    // bez :any dava error
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
            KosikItems.ItemsZPonuky[name] = {'amount': 0, 'properties': newItem, 'price': price, 'id': id, 'restrictions': limitations}
        }

        KosikItems.ItemsZPonuky[name].amount++
    }
}
