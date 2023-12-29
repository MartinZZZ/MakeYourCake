// import {Box, Button, Card, CardMedia, Paper} from "@mui/material";
// import {LabelTextPair} from "../LabelTextPair";
// import {Section} from "../Section";
// import React, {useState} from "react";
// import {UpdateKosik} from "./UpdateKosik";
//
//
// export function KosikItemZPonuky(item) {
//
//     const [amount, setAmount] = useState(item.amount)
//     const [price, setPrice] = useState(item.price)
//     const properties = item.properties
//     const id = item.id
//
//
//     function updateAmount(add: boolean) {
//         add ? item.amount++ : item.amount--
//         setAmount(item.amount)
//
//         setPrice(item.amount * item.price)
//
//         UpdateKosik(false, item)
//     }
//
//     const onClickAdd = () => {
//         updateAmount(true)
//     }
//
//     const onClickRemove = () => {
//         updateAmount(false)
//     }
//
//     const leftSideElement = (
//         <Paper sx={{p: 2, display: 'flex', flexDirection: 'row', gap: 1, width: '100%', justifyContent: 'center'}}>
//             <Box sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 width: '50%'
//             }}>
//                 <Card sx={{maxWidth: 500}}>
//                     <CardMedia
//                         key={id}
//                         component="img"
//                         height="200"
//                         image={`/static/images/cakes/${id}/0.png`}
//                     />
//
//                 </Card>
//             </Box>
//         </Paper>
//     )
//
//     const rightSideElement = (
//
//         <Paper sx={{p: 2, display: 'flex', flexDirection: 'row', gap: 4}}>
//
//             <Box>
//                 {Object.entries(properties).map(([key, value]) => (
//                     <LabelTextPair key={key} label={key} text={value?.toString()}/>
//                 ))}
//
//                 {/*<LabelTextPair label="Obmedzenia" text={limitationText}/>*/}
//                 <LabelTextPair label="Cena" text={price.toString() + '€'}/>
//
//             </Box>
//
//             <Box sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
//                 <Button onClick={onClickAdd}>
//                     +
//                 </Button>
//
//                 {amount.toString()}
//
//                 <Button onClick={onClickRemove} disabled={amount<=1}>
//                     -
//                 </Button>
//             </Box>
//         </Paper>
//     )
//
//
//     return (<Box sx={{width: '100%', typography: 'body1'}}>
//             <Section
//                 leftSideElement={leftSideElement}
//                 rightSideElement={rightSideElement}
//             /></Box>
//     )
// }
