"use client";

import { FunctionComponent } from "react";
import { Box, IconButton, Link, Stack, Typography } from "@mui/material";
import { LinkedIn, Facebook, Instagram, Twitter } from "@mui/icons-material";
import { FooterLink } from "../../footer/FooterLink";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/system';
import { footerLinks1, footerLinks2, footerLinks3 } from "./footerConsts";
import { NewsletterSubcsriptionWidget } from "../../NewsletterSubscriptionsWidget";

export const Footer: FunctionComponent = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), { noSsr: true });

  return (
    <Box
      id="footer"
      component="div"
      sx={{
        minHeight: '10rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        justifySelf: 'flex-end',
        alignContent: 'center',
        textAlign: 'center',
        padding: 2,
        marginTop: '1rem',
        backgroundColor: 'background.default',
        color: 'primary.light',
        boxShadow: 1,
        zIndex: 2,
      }}
    >
      <NewsletterSubcsriptionWidget />
      <Stack direction={isMobile ? 'column' : 'row'} sx={{ height: '80%', marginBottom: '2rem', padding: '1rem', justifyContent: 'space-around' }}>
        <Box flexDirection="column" flex="0 0 auto">
          <Typography style={{ fontSize: isMobile ? '1rem' : '2rem' }}>
            MINERVA ®
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <IconButton
              component="a"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <Facebook fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <Instagram fontSize="large" />
            </IconButton>
            <IconButton
              component="a"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <Twitter fontSize="large" />
            </IconButton>
          </Stack>
        </Box>
        <Stack direction="row" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flex: "1 1 0" }} spacing={4}>
          <Stack sx={{ display: 'flex', alignItems: 'flex-start' }}>
            {footerLinks1.map(fl => <FooterLink link={fl.link} text={fl.text} />) }
          </Stack>
          <Stack sx={{ display: 'flex', alignItems: 'flex-start' }}>
            {footerLinks2.map(fl => <FooterLink link={fl.link} text={fl.text} />) }
          </Stack>
          <Stack sx={{ display: 'flex', alignItems: 'flex-start' }}>
            {footerLinks3.map(fl => <FooterLink link={fl.link} text={fl.text} />) }
          </Stack>
        </Stack>
      </Stack>
      ©Minerva 2025, All Rights Reserved
    </Box>
  )
}
