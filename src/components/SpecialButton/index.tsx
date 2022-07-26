import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import googleImage from "../../assets/images/google.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
function SpecialButton() {
  const forBox = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "600",
    borderRadius: "30px",
    padding: "5px 10px",
    textTransform: "none",

    marginTop: "30px",
    width: "100%",
  };
  return (
    <Button sx={forBox} variant="contained" color="inherit">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <AccountCircleIcon />
        <Box >
          <Typography>Sign in as Aya</Typography>
          <Typography sx={{ color: "#AAB8C2" }}>example@gmail.com</Typography>
        </Box>
      </Box>

      <img src={googleImage} alt="googleImage" />
    </Button>
  );
}

export default SpecialButton;
