'use client'

import { Box, Button, Typography } from '@mui/material'

const scrollToSection = (sectionId: string) => { 
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 2,
        backgroundColor: 'background.default',
        color: 'primary.light',
        boxShadow: 1,
      }}
    >
      <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
        Minerva
      </Typography>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button color="primary" onClick={() => scrollToSection('about-us')}>About us</Button>
        <Button color="primary" onClick={() => scrollToSection('pricing')}>Pricing</Button>
        <Button variant='outlined' color="secondary" >
          Get Started
        </Button>
      </Box>
    </Box>
  )
}
