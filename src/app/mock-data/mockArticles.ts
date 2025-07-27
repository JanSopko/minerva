import { ArticleCardProps } from "../components/ArticleCard"

export interface ArticleWithId extends ArticleCardProps { 
  id: string
}

const mockArticles: ArticleCardProps[] = [
  {
    link: 'https://www.forbes.sk/lov-na-talenty-je-uz-citelny-aj-na-slovensku-kolko-zarabaju-experti-na-ai/',
    imgSrc: 'https://cdn.forbes.sk/uploads/2025/02/zuckerberg-meta.webp?r=eyJ3IjoxMTEwLCJxIjo5MCwicyI6ImpwZyIsImgiOjYyNH0%3D',
    text: 'Lov na talenty je už citeľný aj na Slovensku. Koľko zarábajú experti na AI?'
  },
  {
    link: 'https://www.forbes.sk/v-dubaji-ma-vyplatna-paska-jeden-riadok-hruba-mzda-je-vasa-cista-mzda-vravi-fusekova/',
    imgSrc: 'https://cdn.forbes.sk/uploads/2025/07/unnamed-scaled-e1752759321296.webp?r=eyJ3IjoxMTEwLCJxIjo5MCwicyI6ImpwZyIsImgiOjYyNH0%3D',
    text: 'V Dubaji má výplatná páska jeden riadok. Hrubá mzda je vaša čistá mzda, vraví Fuseková'
  },
  {
    link: 'https://www.economist.com/asia/2025/07/17/welcome-to-asias-secret-silicon-island',
    imgSrc: 'https://www.economist.com/cdn-cgi/image/width=834,quality=80,format=auto/content-assets/images/20250719_ASD002.jpg',
    text: "Welcome to Asia’s secret Silicon island"
  },
  {
    link: 'https://www.economist.com/finance-and-economics/2025/07/20/has-trump-damaged-the-dollar',
    imgSrc: 'https://www.economist.com/cdn-cgi/image/width=834,quality=80,format=auto/content-assets/images/20250726_FND001.jpg',
    text: 'Has Trump damaged the dollar?'
  },
  {
    link: 'https://www.thetravelmagazine.net/festival-review-slayer-at-finsbury-park-fire-fury-and-a-930-finish/',
    imgSrc: 'https://www.thetravelmagazine.net/wp-content/uploads/UHuyc1ww.jpg',
    text: 'Festival Review: Slayer at Finsbury Park: Fire, Fury, and a 9:30 Finish'
  }
]

export const mockedArticlesWithIds: ArticleWithId[] = [...mockArticles, ...mockArticles].map((article, idx) => ({ ...article, id: `${idx}` }))
