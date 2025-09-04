"use client";

import { FunctionComponent, useState } from "react";
import { Stack } from "@mui/material";
import { PricingCard } from "../../pricing/PricingCard";
import { basicConditions, familyConditions, Periodicity, premiumConditions, pricesRecord } from "@/app/data/pricingData";

export interface PricingMobileProps { 
  periodicity: Periodicity
}

export const PricingMobile: FunctionComponent<PricingMobileProps> = ({ periodicity }) => { 
  
  return (
     <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'background.default',
          width: '100%',
        }}
      >
        <PricingCard tier="Basic" price={pricesRecord[periodicity].basic} conditions={basicConditions} />
        <PricingCard tier="Premium" price={pricesRecord[periodicity].premium} conditions={premiumConditions} />
        <PricingCard tier="Family" price={pricesRecord[periodicity].family} conditions={familyConditions} />
      </Stack>
  )
}
