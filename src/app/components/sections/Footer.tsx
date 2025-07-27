import { Box } from "@mui/material";
import { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => { 
  return (
    <Box
      id="footer"
      component="div"
      sx={{
        height: '10rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        padding: 2,
        backgroundColor: 'background.default',
        color: 'primary.light',
        boxShadow: 1
        
      }}
    >Minerva ©2025
    </Box>
  )
}
