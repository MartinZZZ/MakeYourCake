import {Box} from "@mui/material";

import React from "react";
import {LabelTextPair} from "../../LabelTextPair";

export function ItemDetail(vlastny, item) {

    if (vlastny) {
        return (<Box>
            {Object.entries(item.properties).map(([key, value]) => (
                <LabelTextPair key={key} label={key} text={value?.toString()}/>
            ))}
            <LabelTextPair label="Obmedzenia" text={'limitationText'}/>
        </Box>)
    }

    return (
        <Box>
            {Object.entries(item.properties).map(([key, value]) => (
                <LabelTextPair key={key} label={key} text={value?.toString()}/>
            ))}

            {/*<LabelTextPair label="Obmedzenia" text={limitationText}/>*/}

        </Box>
    )
}
