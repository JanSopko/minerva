"use client"

import { Box, Stack } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { PricingCard } from "../PricingCard";

type Periodicity = 'monthly' | 'yearly'
type Tier = 'basic' | 'premium' | 'family'

const pricesRecord: Record<Periodicity, Record<Tier, string>> = {
  monthly: {
    basic: '8,99€ / month',
    premium: '12,99€ / month',
    family: '15,99€ / month'
  },
  yearly: {
    basic: '86,90€ / year',
    premium: '124,90€ / year',
    family: '153,90€ / year'
  }
}

export const PricingSection: FunctionComponent = () => { 
  const [periodicity, setPeriodicity] = useState<Periodicity>('monthly')

  return (
    <Box
      id="pricing"
      component="div"
      sx={{
        height: '50rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 2,
        backgroundColor: 'background.default',
        color: 'secondary.light',
        boxShadow: 1
        
      }}
    >
      <Stack direction="row" sx={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
        <Box
          onClick={() => setPeriodicity('monthly')}
          sx={(theme) => ({
            borderTopLeftRadius: '5%',
            borderBottomLeftRadius: '5%',
            height: '4rem',
            width: '16rem',
            backgroundColor: periodicity === 'monthly' ? theme.palette.secondary.main : theme.palette.background.paper,
            color: periodicity === 'monthly' ? theme.palette.secondary.dark : theme.palette.secondary.main,
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        })}
      
        >
          Billed monthly
        </Box>
        <Box
          onClick={() => setPeriodicity('yearly')}
          sx={(theme) => ({
            borderTopRightRadius: '5%',
            borderBottomRightRadius: '5%',
            height: '4rem',
            width: '16rem',
            backgroundColor: periodicity === 'yearly' ? theme.palette.secondary.main : theme.palette.background.paper,
            color: periodicity === 'yearly' ? theme.palette.secondary.dark : theme.palette.secondary.main,
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        })}>
          Billed yearly
        </Box>
      </Stack>     
      <Stack direction="row" sx={{ display: 'flex', justifyContent: 'space-evenly', backgroundColor: 'background.default', height: '100%'  }}>
        <PricingCard tier="Basic" price={pricesRecord[periodicity].basic} description="" />
        <PricingCard tier="Premium" price={pricesRecord[periodicity].premium} description=""/>
        <PricingCard tier="Family" price={pricesRecord[periodicity].family} description=""/>
      </Stack>
    </Box>
  )
}
