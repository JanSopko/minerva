"use client";

import { useState, useId } from "react";
import { Box, Collapse, IconButton, Typography, Paper } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface FAQItemProps {
  question: React.ReactNode;
  answer: React.ReactNode;
  defaultExpanded?: boolean;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer, defaultExpanded = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const contentId = useId();

  const toggle = () => setExpanded((v) => !v);

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={(theme) => ({
        backgroundColor: theme.palette.background.paper,
        borderRadius: 2,
        overflow: "hidden",
        "&:focus-visible": { outline: "2px solid", outlineColor: "primary.main" },
      })}
    >
      <Box
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        aria-controls={contentId}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          px: 2,
          py: 1.75,
          cursor: "pointer",
          userSelect: "none",
          bgcolor: "background.paper",
          "&:hover": { bgcolor: "action.hover" },
        }}
      >
        <Typography variant="subtitle1" sx={(theme) => ({ fontWeight: 600, color: theme.palette.primary.light })}>
          {question}
        </Typography>
        <IconButton
          aria-label={expanded ? "Collapse answer" : "Expand answer"}
          onClick={(e) => {
            e.stopPropagation(); // prevent double toggle
            toggle();
          }}
          edge="end"
          size="small"
          sx={(theme) => ({
            color: theme.palette.primary.light ,
            transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: 
              theme.transitions.create("transform", {
                duration: theme.transitions.duration.shortest,
              }),
          })}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box id={contentId} sx={{ px: 2, pb: 2, pt: 0.5 }}>
          <Typography variant="body1" sx={(theme) => ({ color: theme.palette.primary.light  })}>
            {answer}
          </Typography>
        </Box>
      </Collapse>
    </Paper>
  );
};
