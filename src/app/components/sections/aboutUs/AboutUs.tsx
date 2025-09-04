"use client"

import { Box, Typography } from '@mui/material'
import { FunctionComponent } from 'react'
import { ABOUT_US_TEXT } from './aboutUsConsts'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/system';
import { AboutUsMobile } from './AboutUsMobile';

export const AboutUs: FunctionComponent = () => { 
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });

  if (isMobile) { 
    return <AboutUsMobile />
  }

  return (
    <Box
      id="about-us"
      component="div"
      sx={{
        // marginTop: '-15rem',
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
      <Box sx={{ padding: '8rem' }}>
        <Typography sx={theme => ({ fontSize: '1.5rem', color: theme.palette.primary.main })}>
          { ABOUT_US_TEXT }
        </Typography>
      </Box>
    
    </Box>)
}
