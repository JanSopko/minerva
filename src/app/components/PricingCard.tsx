"use client"

import { Box, Typography, Button, Stack } from "@mui/material";
import { FunctionComponent } from "react";
import { PricingCondition } from "../types/pricing-types";

export interface PricingCardProps { 
  tier: string
  price: string
  conditions: PricingCondition[]
}

export const PricingCard: FunctionComponent<PricingCardProps> = ({ tier, price, conditions }) => { 
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
        <Stack spacing="1.5rem" sx={{ marginTop: '2rem' }}>
        {
            conditions.map(({ key, text }) => <Typography key={key} variant="body1">✓ {text}</Typography>)
        }
        </Stack>
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
