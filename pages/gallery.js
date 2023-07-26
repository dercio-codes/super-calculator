import ImageGallery from 'react-image-gallery';
import { Box, Typography, Grid, Button, TextField } from "@mui/material";



export default function Gallery() {
   let images = [];
   for(let num = 1 ; num < 14 ; num++){
    images.push({
      original:`${num}.jpg`,
      thumbnail:`${num}.jpg`,
    })
   }
    return (
<Box>
      <ImageGallery items={images} />;
      <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexDirection: { xs: "column", lg: "row" },
            background: "rgb(244, 209, 96)",
            padding: "12px 2.5rem",
            marginTop: "21px",
        color:'rgba(1,1,1,.8)',

            // position: "sticky",
            bottom: "0",
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "21px", fontWeight: "600", m: "1rem 0" }}
            >
              {" "}
              T & L Upholstery Shop
            </Typography>
            <Typography sx={{ fontSize: "16px", margin: "1rem 0" }}>
              {" "}
              68 De Villiers Street & Park Crescent
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: "600", fontSize: "21px", margin: "1rem 0" }}
            >
              {" "}
              Phone/Email:
            </Typography>
            <Typography sx={{ fontSize: "16px", margin: "1rem 0" }}>
              {"Call : 0659684864"}
              <br />
              {"WhatsApp : 0736240389"}
              <br />
              {"Email : ThabangNcube@gmail.com"}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ fontWeight: "600", fontSize: "21px", margin: "1rem 0" }}
            >
              {" "}
              Hours
            </Typography>
            <Typography sx={{ fontSize: "16px", margin: "1rem 0" }}>
              {" "}
              Monday - Saturday: 9:30AM - 5:30PM
            </Typography>
          </Box>
          <Typography
            sx={{
              p: "21px",
              textAlign: "center",
              width: "50%",
              margin:'2.5rem auto 0 auto',
              borderTop:'1px solid rgba(1,1,1,.3)'
              // background: "rgba(255,255,255,.3)",
            }}
          >
            {" "}
            Atomus Dev 2023.{" "}
          </Typography>
        </Grid>
    </Box>
    ) 
}