import { Link, Typography } from "@mui/material";
import { FunctionComponent } from "react";

export interface FooterLinkProps { 
  link: string
  text: string
}

export const FooterLink: FunctionComponent<FooterLinkProps> = ({ link, text }) => { 
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      underline="hover"
      color="inherit"
    >
      <Typography variant="body1" component="span">
        { text }
      </Typography>
    </Link>
  )
}
