'use client'

import { FunctionComponent } from 'react';
import Link from 'next/link';
import { Box, SxProps, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const growAnimation = keyframes`
0% {
  transform: scale(1);
}
100% {
  transform: scale(1.05);
}  
`

export interface ArticleCardProps {
  imgSrc?: string
  link?: string
  text?: string
}

export const ArticleCard: FunctionComponent<ArticleCardProps> = ({ imgSrc, link, text }) => {
  const backgroundProps: Partial<SxProps> = imgSrc ? { backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' } : { backgroundColor: 'white' }

  if (link) {
    return (
      <Link href={link} passHref>
        <Box
          sx={(theme) =>
          ({
            ...backgroundProps,
            height: '480px',
            width: '360px',
            '&:hover': {
              cursor: 'pointer',
              animation: `${growAnimation} .2s linear`,
              transform: 'scale(1.05)'
            },
            "&:hover .overlayText": {
              display: 'flex',
              transform: "translateY(0)",
            },
          })}
        >
          <Box
            className="overlayText"
            sx={(theme) => ({
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "40%",
              background: `linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 0%,
                rgba(0, 0, 0, 0.5) 20%,
                ${theme.palette.background.default}
              )`,
              color: "#fff",
              display: "none",
              padding: '2rem',
              alignItems: "flex-start",
              justifyContent: "flex-start",
            })
          }
          >
            <Typography variant="h6">{text}</Typography>
        </Box>
        </Box>
      </Link>
    )
  }

  return (
    <Box
      sx={(theme) =>
      ({
        ...backgroundProps,
        height: '240px',
        width: '180px',
        '&:hover': {
          // boxShadow: `0 0 10px 5px ${theme.palette.secondary.main}`,
          cursor: 'pointer',
          animation: `${growAnimation} .2s linear`,
          transform: 'scale(1.05)'
        }
      })}
    />
  )
}
