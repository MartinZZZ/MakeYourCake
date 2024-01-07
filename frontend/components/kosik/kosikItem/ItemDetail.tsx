import {Box, Typography} from "@mui/material";
import React from "react";
import {LabelTextPair} from "../../LabelTextPair";
import { getTranslation } from '../../../helpers/getTranslation'


export function ItemDetail(vlastny, item) {

    if (vlastny) {
        return (
          <Box mt={1}>
            {Object.entries(item.properties).map(([key, value]) => (
              <LabelTextPair key={key} label={key} text={value?.toString()} />
            ))}
          </Box>
        )
    }

    return (
        <Box mt={1}>
            {Object.entries(item.properties).map(([key, value]) => (
                <LabelTextPair key={key} label={key} text={value?.toString()}/>
            ))}
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                <Typography>Obmedzenia:</Typography>
                {item.restrictions.map((restriction, index) => (
                    <Typography sx={{ fontWeight: 'bold' }}>
                        {getTranslation(restriction)}
                        {index < item.restrictions.length - 1 && ", "}
                    </Typography>        
                ))}
                {item.restrictions.length == 0 && <Typography sx={{ fontWeight: 'bold' }}>-</Typography>}
            </Box>
        </Box>
    )
}
