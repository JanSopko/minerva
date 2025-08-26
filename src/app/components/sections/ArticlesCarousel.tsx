'use client'

import { Box, Button, Stack } from '@mui/material'
import { keyframes } from "@emotion/react";
import { ArticleCard } from '../ArticleCard';
import { mockedArticlesWithIds } from '../../mock-data/mockArticles';

const slideAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;


export default function ArticlesCarousel() {
  return (
    <Box
      component="div"
      sx={(theme) => ({
        height: '50rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: theme.palette.background.paper,
        color: 'secondary.light',
        boxShadow: 1
        
      })}
    >
      <Stack
        sx={{
          display: 'flex',
          alignContent: 'center',
          gap: 12,
          flexShrink: 0,
          animation: `${slideAnimation} 20s linear infinite`,
          "&:hover": {
            animationPlayState: "paused",
          },
        }}
      >
        <Stack
          direction="row"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
            flexShrink: 0,
          }}
        >
          {
            (mockedArticlesWithIds.map(({ id, ...props }) => <ArticleCard key={id} {...props} />))
          }
        </Stack>
        
      </Stack>
      <Box sx={(theme) => ({
        height: '300px',
        width: '100%',
        position: 'absolute',
        paddingLeft: '5rem',
        bottom: '90px',
        background: `linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0) 0%,
        ${theme.palette.background.default}
        )`,
      })} >
        <Button
          color='secondary'
          variant='contained'
          size='large'
          sx={{
            fontSize: "1.25rem", 
            padding: "12px 32px",
            borderRadius: "12px",
            marginTop: "64px"
          }}>Get started</Button>
      </Box>
    </Box>
  )
}
