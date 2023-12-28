import {KosikItems} from "./KosikItems";


export const AddToKosik = (vlastny: boolean, rest, limitations = null, id = null) => {

    if (vlastny) {
        // console.log(rest)
        KosikItems.vlastnyDizajn.push({'rest': rest, 'limitations': limitations});

        // console.log('VLASTNY DIZAJ', KosikItems.vlastnyDizajn)
    } else {
        KosikItems.zPonuky.push({'id': id, 'rest': rest, 'amount': 1});
        // console.log(KosikItems.zPonuky)
    }

}

export const RemoveFromKosik = (vlastny: boolean, id = null) =>{

}