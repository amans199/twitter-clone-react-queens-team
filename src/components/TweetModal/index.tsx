import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AppIcon from "../AppIcons";
import TweetButon from "../TweetButton";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./style.scss";
const forCloseButton = {
  position: "absolute",
  top: 15,
  left: 10,
};
const forBox = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sx: 400, md: 700 },
  bgcolor: "#15202B",
  border: "2px solid #000",
  boxShadow: 24,
  px: { sx: 1, md: 3 },
  pt: { sx: 5, md: 10 },
  my: 3,
  borderRadius: 7,
};

export default function TweetModal() {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const icons = [
    { name: "image"},
    { name: "poll-h" },
    { name: "smile" },
    { name: "calendar-week" },
    { name: "map-marker-alt" },
  ];
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TweetButon labal="Tweet" className="bg-primary" onClick={handleOpen} />
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      
          <Box sx={forBox} className="tweetModal">
            <Button onClick={handleClose} sx={forCloseButton}>
              <AppIcon name="xmark" color="#fff" size={20}></AppIcon>
            </Button>
            <Box className="d-flex ">
              <Box className="profileImage"></Box>
              <Box className="flex-grow-1">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Select
                    className="forSelect border border-secondary text-primary ms-2 mb-4"
                    value=""
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>Puplic</em>
                    </MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  variant="standard"
                  className="w-100 mb-5   text-secondary "
                  placeholder="What's happening ?"
                  InputProps={{
                    disableUnderline: true, // <== added this
                  }}
                />
                <Button className=" text-primary ms-2 fs-4 mt-5 text-capitalize  ">
                  <AppIcon
                    name="globe-americas"
                    color="#1DA1F2"
                    size={23}
                    className="me-2"
                  />
                  Everyone can replay
                </Button>

                <Box className="py-3 d-flex align-items-center border-top border-secondary">
                  <Box className="col-9">
                    {icons.map((icon) => {
                      return (
                        <AppIcon
                          name={icon.name}
                          color="#1DA1F2"
                          size={33}
                          key={icon.name}
                          className="me-3"
                        />
                      );
                    })}
                  </Box>
                  <Box className="col-3">
                    <TweetButon labal="Tweet" className="bg-primary" />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
       
      </Modal>
    </>
  );
}
