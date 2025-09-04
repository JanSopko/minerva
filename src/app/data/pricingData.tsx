import { PricingCondition } from "../types/pricing-types"

export type Periodicity = 'monthly' | 'yearly'
export type Tier = 'basic' | 'premium' | 'family'

export const pricesRecord: Record<Periodicity, Record<Tier, string>> = {
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

export const basicConditions: PricingCondition[] = ["Access to 10 articles per month", "With ads", "Access anywhere and anytime on 2 devices", "Cancel membership anytime"].map((text, key) => ({ key, text }))
export const premiumConditions: PricingCondition[] = ["Unlimited access to articles", "With ads", "Access anywhere and anytime on 2 devices", "Cancel membership anytime"].map((text, key) => ({ key, text }))
export const familyConditions: PricingCondition[] = ["Unlimited access to articles", "With ads", "Plan for 4 profiles", "Cancel membership anytime"].map((text, key) => ({ key, text }))
