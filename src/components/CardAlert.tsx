import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import AutoAwesomRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';

const CardAlert = () => {
  return (
    <Card variant='outlined' sx={{ m: 1.5, p: 1.5 }}>
        <CardContent>
            <AutoAwesomRoundedIcon fontSize='small' />
            <Typography gutterBottom sx={{ fontWeight: 600 }}>
                Plan about to expire
            </Typography>
            <Typography variant='body2' sx={{ mb: 2, color: 'text.secondary' }}>
                Enjoy 10% off when renewing your plan today.
            </Typography>
            <Button variant='contained' size='small' fullWidth>
                Get the discount
            </Button>
        </CardContent>
    </Card>
  )
}

export default CardAlert