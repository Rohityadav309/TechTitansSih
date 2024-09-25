import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";

function LeftPaper({ setActivePage }) {
  // Receive setActivePage as a prop
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null); // State to store selected item
  const items = [
    "Connections",
    "Communities",
    "Suggestions",
    "Connection Requests",
    "Create Community",
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        position: "fixed",
        top: "80px",
        left: "20px",
        width: "20%",
        height: "50vh",
        p: 2,
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => {
            setSelectedIndex(index); // Set the selected item on click
            setActivePage(item); // Set active page on click
          }}
          sx={{
            p: 1,
            pl: 2,
            textAlign: "left",
            position: "relative",
            backgroundColor:
              selectedIndex === index || hoveredIndex === index
                ? "#64b3f4" // Highlight both clicked and hovered item
                : "#fff",
            transition: "all 0.3s ease",
            transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
            cursor: "pointer", // Make it clickable
            "&:hover": {
              backgroundColor: "#64b3f4", // Apply hover color here too
            },
            "&:after": {
              content: '""',
              position: "absolute",
              right: "-10px",
              top: "50%",
              transform: "translateY(-50%)",
              borderTop: "30px solid transparent",
              borderBottom: "30px solid transparent",
              borderLeft:
                hoveredIndex === index || selectedIndex === index
                  ? "10px solid #64b3f4" // Update arrow color to match hover/selected
                  : "none",
              transition: "all 0.3s ease",
            },
          }}
        >
          <Typography
            sx={{
              fontSize:
                hoveredIndex === index || selectedIndex === index
                  ? "1.1rem"
                  : "1rem",
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
}

export default LeftPaper;
