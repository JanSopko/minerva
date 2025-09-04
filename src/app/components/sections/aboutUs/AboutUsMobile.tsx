"use client"

import { Box, Typography } from '@mui/material'
import { FunctionComponent } from 'react'
import { ABOUT_US_TEXT } from './aboutUsConsts'

export const AboutUsMobile: FunctionComponent = () => { 
  return (
    <Box
      id="about-us"
      component="div"
      sx={{
        height: '50rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'background.default',
        color: 'secondary.light',
        boxShadow: 1
        
      }}
    >
      <Box sx={{ padding: '5rem' }}>
        <Typography sx={theme => ({ fontSize: '1.5rem', color: theme.palette.primary.main })}>
          { ABOUT_US_TEXT }
        </Typography>
      </Box>
    
    </Box>)
}
