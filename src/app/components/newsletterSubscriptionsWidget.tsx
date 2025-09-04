import { FunctionComponent } from 'react'
import { Box, Input, Button, Typography } from '@mui/material'

export const NewsletterSubcsriptionWidget: FunctionComponent = () => { 
  return (
    <Box sx={{ marginBottom: '1.5rem' }}>
      <Typography sx={{ fontSize: '2rem' }}>Subscribe to our newsletter</Typography>
      <Input
        type="email"
        placeholder="your@email.here"
        sx={(theme) =>  (
          {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.dark,
            padding: '.25rem',
            width: '16rem'
          }
        )
        }
      />
      <Button sx={(theme) => ({ backgroundColor: theme.palette.secondary.main })}>Subscribe</Button>
    </Box>
  )
}
