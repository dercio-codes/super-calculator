import { useState, useEffect } from "react";
import "../styles/globals.css";
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  Drawer,
  SwipeableDrawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (loaded) {
    return (
      <Box >
        <Navbar />
        <Component {...pageProps} />
      </Box>
    );
  }
}

export default MyApp;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid rgba(1,1,1,.3)",
        background: "rgb(244, 209, 96)",
        color:'rgba(1,1,1,.8)',

        zIndex: 999,
        p: { xs:'.5rem', lg:".5rem 2.5rem"},
        position: "sticky",
        top: "0",
        width: "100%",
      }}
    >
      {/* <img src="/logo.png" style={{ objectFit:'contain' , width:'200px' , height:'50px' }} /> */}
      <Link onClick={()=>{
        setOpen(false)
      }} href="/">
          <a style={{ width:'' }} >
          <Box sx={{  height:'50px' , background:"" , width:'200px' ,  backgroundImage: "url(/logo.png)",
           backgroundSize: "cover",
          backgroundPosition: "center", }}>
      </Box>
          </a>
        </Link>

      <IconButton
        sx={{
          display: { lg: "none", xs: "flex" },
        }}
        onClick={()=>{
          setOpen(true)
        }}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer open={open}   anchor={"top"}      onClose={()=>{
          setOpen(false)
        }} >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "",
            alignItems: "center",
            width: "100%",
            height:'100%',
            background:'rgb(244, 209, 96)',
            padding:'2.5rem 0'
          }}
        >
            <Box sx={{  height:'50px' , background:"" , width:'200px' ,  backgroundImage: "url(/logo.png)",
           backgroundSize: "cover",
          backgroundPosition: "center", }}>
      </Box>
      <Link onClick={()=>{
        setOpen(false)
      }} style={{ width:'100%' }} href="/about">
          <a style={{ width:'100%' }} >
            <Typography
              sx={{ width:'100%', textAlign:'center', '&:hover':{ background:'rgb(29, 93, 155)' } , fontSize: "14px", padding: "1.5rem 0", FontWeight: 3600 }}
            >
              {"About"}
            </Typography>
          </a>
        </Link>
        <Link onClick={()=>{
          setOpen(false)
        }} style={{ width:'100%' }} href="/#services">
          <a style={{ width:'100%' }} >
            <Typography
              sx={{ width:'100%', textAlign:'center', '&:hover':{ background:'rgb(29, 93, 155)' } , fontSize: "14px", padding: "1.5rem 0", FontWeight: 3600 }}
            >
              {"Services"}
            </Typography>
          </a>
        </Link>

        <Link onClick={()=>{
          setOpen(false)
        }} style={{ width:'100%' }} href="/gallery">
          <a style={{ width:'100%' }} >
            <Typography
              sx={{ width:'100%', textAlign:'center', '&:hover':{ background:'rgb(29, 93, 155)' } , fontSize: "14px", padding: "1.5rem 0", FontWeight: 3600 }}
            >
              {"Gallery"}
            </Typography>
          </a>
        </Link>

        <Link onClick={()=>{
          setOpen(false)
        }} style={{ width:'100%' }} href="/#contact">
          <a style={{ width:'100%' }} >
            <Typography
              sx={{ width:'100%', textAlign:'center', '&:hover':{ background:'rgb(29, 93, 155)' } , fontSize: "14px", padding: "1.5rem 0", FontWeight: 3600 }}
            >
              {"Contact"}
            </Typography>
          </a>
        </Link>
        </Box>
        
      </SwipeableDrawer>

      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          width: "30%",
        }}
      >
        <Link onClick={()=>{
          setOpen(false)
        }} href="/about">
          <a>
            <Typography
              sx={{ fontSize: "14px", margin: "0", FontWeight: 3600 }}
            >
              {"About"}
            </Typography>
          </a>
        </Link>
        <Link onClick={()=>{
          setOpen(false)
        }} href="/#services">
          <a>
            <Typography
              sx={{ fontSize: "14px", margin: "0", FontWeight: 3600 }}
            >
              {"Services"}
            </Typography>
          </a>
        </Link>

        <Link onClick={()=>{
          setOpen(false)
        }} href="/gallery">
          <a>
            <Typography
              sx={{ fontSize: "14px", margin: "0", FontWeight: 3600 }}
            >
              {"Gallery"}
            </Typography>
          </a>
        </Link>

        <Link onClick={()=>{
          setOpen(false)
        }} href="/#contact">
          <a>
            <Typography
              sx={{ fontSize: "14px", margin: "0", FontWeight: 3600 }}
            >
              {"Contact"}
            </Typography>
          </a>
        </Link>
      </Box>
    </Box>
  );
};
