"use client";

import { FunctionComponent } from 'react'
import { Stack } from '@mui/material'
import { FAQ_QUESTIONS_AND_ANSWERS } from './faqData'
import { FAQItem } from '../../FAQ/FaqItem';

export const FAQSection: FunctionComponent = () => { 
  return (
    <Stack spacing={2} sx={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '8rem' }}>
      {
        FAQ_QUESTIONS_AND_ANSWERS.map((item) => <FAQItem {...item} />)
      }
    </Stack>
  ) 
}
