"use client"

import { Box, Typography, Button } from "@mui/material";
import { FunctionComponent } from "react";

export interface PricingCardProps { 
  tier: string
  price: string
  description: string
}

export const PricingCard: FunctionComponent<PricingCardProps> = ({ tier, price, description }) => { 
  return (
    <Box sx={(theme) => ({
        backgroundColor: 'background.paper',
        height: '90%',
        width: '30%',
        padding: '2rem',
        borderRadius: '5%',
        '&:hover': {
          boxShadow: `0 0 10px 2px ${theme.palette.secondary.main}`,
        }
      })
    } >
      <Box>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {tier}
        </Typography>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {price}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>

      <Button
        variant="outlined"
        color="secondary"
        // onClick={onSignUp}
        sx={{ mt: 2 }}
      >
        Sign Up
      </Button>
    </Box>
  )
}
