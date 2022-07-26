import React from "react";
import AppButton from '../../components/GenericButton';
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import InputComp from "../../components/InputCom";
import SpecialButton from "../../components/SpecialButton";
import AppIcon from "../../components/AppIcons";

function Signin() {
  const forTypography = {
    margin: "-28px auto",
    textAlign: "center",
    borderRadius: "50%",
    background: "#15202B",
    width: "50px",
    height: "50px",
    lineHeight: "50px",
    color: "#fff",
    zIndex: 40,
  };
  return (

   <div className="d-flex flex-column align-items-center bg-dark  ">
  <AppIcon name="twitter" color="#ffffff"  size={55}/>
      <h1 className="text-light mb-5">Sign in to Twitter</h1>
    <SpecialButton></SpecialButton>
      <AppButton
      iconName="apple"
      iconSize={20}
       classNames="bg-light text-dark"
        variant="contained"
        label="Sign in with Apple"
        disabled={false}
     
        onClick={() => {}}
      ></AppButton>
      <Box sx={{ marginTop: "50px", marginBottom: "30px" ,  width: "100%" }}>
        <Divider sx={{ background: "#657786" }} />
        <Typography variant="h4" component="div" sx={forTypography}>
          or
        </Typography>
      </Box>

      <InputComp></InputComp>
      <AppButton
      classNames="bg-light text-dark"
        variant="contained"
        label="Next"
        disabled={false}
        
        onClick={() => {
          console.log("hello");
        }}
      ></AppButton>
      <AppButton
      classNames="bg-dark text-light border-light"
        variant="contained"
        label="Forgot password ?"
        disabled={false}
        
        onClick={() => {
       
        }}
      ></AppButton>
      <Box sx={{ display: "flex", marginTop: "30px", alignItems: "center" }}>
        <Typography sx={{ color: "#AAB8C2", marginRight: "7px" }}>
          Don't have an account ?
        </Typography>
        <Link href="#" underline="none">
          Sign up
        </Link>
      </Box>
    </div>

  );
}

export default Signin;
