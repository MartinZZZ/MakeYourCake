import {KosikItems} from "./KosikItems";
import {ItemToString, ItemVlastna} from "./ItemVlastna";


export const AddToKosik = (vlastny: boolean, rest, limitations = null, id = null) => {

    if (vlastny) {

        let newItem = ItemVlastna({rest, limitations});
        let name = ItemToString(newItem)

        if (!KosikItems.experimentItemVlastne[name]) {
            KosikItems.experimentItemVlastne[name] = {'amount': 0, 'properties': newItem}
        }

        KosikItems.experimentItemVlastne[name].amount++


    } else {
        KosikItems.zPonuky.push({'id': id, 'rest': rest, 'amount': 1});
    }

}


export const UpdateKosik = (vlastny, item) => {

    if (item.amount > 0) return

    vlastny ? delete KosikItems.experimentItemVlastne[ItemToString(item.properties)] : delete KosikItems.experimentItemZPonuky[ItemToString(item.properties)]

    console.log(KosikItems.experimentItemVlastne)
}

