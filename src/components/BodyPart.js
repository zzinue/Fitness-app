import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'
const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack
            type='button'
            alignItems='center'
            justifyContent='center'
            className='bodyPart-card'
            sx={{
                borderTop: bodyPart === item ? '4px solid #FF2625' : '',
                backgroundColor: '#FFF',
                borderBottomLeftRadius: '2px solid #FF2625',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px',
            }}

        >
            <img src={Icon} alt="dumbell" style={{ with: '40px', height: '40px' }} />
            <Typography fontSize="24px" fontWeight='bold' color="#3A1212" textTransform="capitalize">
                {item}
            </Typography>
        </Stack>
    )
}

export default BodyPart