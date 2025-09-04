"use client"

import { Box, Stack } from "@mui/material";
import { FunctionComponent, useState } from "react";
import { PricingCard } from "../../../components/pricing/PricingCard";
import { PricingCondition } from "@/app/types/pricing-types";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/system';
import { Periodicity, pricesRecord } from "@/app/data/pricingData";
import { PricingMobile } from "./PricingMobile";

const basicConditions: PricingCondition[] = ["Access to 10 articles per month", "With ads", "Access anywhere and anytime on 2 devices", "Cancel membership anytime"].map((text, key) => ({ key, text }))
const premiumConditions: PricingCondition[] = ["Unlimited access to articles", "With ads", "Access anywhere and anytime on 2 devices", "Cancel membership anytime"].map((text, key) => ({ key, text }))
const familyConditions: PricingCondition[] = ["Unlimited access to articles", "With ads", "Plan for 4 profiles", "Cancel membership anytime"].map((text, key) => ({ key, text }))

export const Pricing: FunctionComponent = () => { 
  const [periodicity, setPeriodicity] = useState<Periodicity>('monthly')
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });

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
        boxShadow: 1,
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
      {
        isMobile ? <PricingMobile periodicity={periodicity} /> : (
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: 'background.default',
              height: '100%'
            }}
          >
            <PricingCard tier="Basic" price={pricesRecord[periodicity].basic} conditions={basicConditions} />
            <PricingCard tier="Premium" price={pricesRecord[periodicity].premium} conditions={premiumConditions} />
            <PricingCard tier="Family" price={pricesRecord[periodicity].family} conditions={familyConditions} />
          </Stack>
        )
      }
    </Box>
  )
}
