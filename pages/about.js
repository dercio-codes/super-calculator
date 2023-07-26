import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import ImageGallery from 'react-image-gallery';

export default function About() {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ]; 
  return (
    <Box id="app-background" sx={{ p: "0" }}>
      <Typography sx={{ fontSize: "18px", margin: "1.5rem 0" }}></Typography>

      <Box
        sx={{
          backgroundImage: "url(/mesh2.png)",
          backgroundSize: "cover",
          minHeight: "90vh",
          backgroundPosition: "center bottom",
          // display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: "2.5rem",
        }}
      >
        <Typography sx={{ fontSize: 50, fontWeight: 600 }}>About Us</Typography>
        <Typography sx={{ fontSize: "18px", margin: "1.5rem 0" }}>
          {" "}
          T&L Upholstery:
        </Typography>

        <Typography sx={{ fontSize: "18px", margin: "1.5rem 0" }}>
          T&L Upholstery is a Johannesburg-based upholstery company with over 5
          years of experience. We specialize in the restoration of all types of
          upholstered furniture, including modern, traditional, and antique
          pieces. Our team of experienced upholsterers is committed to providing
          our customers with the highest quality work at competitive prices.
        </Typography>

        <Typography sx={{ fontSize: "18px", margin: "1.5rem 0" }}>
          We offer a wide range of upholstery services, including:
        </Typography>

<Grid container>
<Grid item xs={12} lg={6} sx={{margin:{ xs:'2.5rem 0', lg:'0'}}} >
          {upholstererServices.map((item, index) => {
          return <Typography key={index} sx={{ margin:'.7rem 0 0 0 ' }} >{item.name}</Typography>
        })}
</Grid>
<Grid item xs={12} lg={6} >
<ImageGallery items={images} showThumbnails={false} autoPlay={true}  />

</Grid>
        </Grid>
        <Typography sx={{ fontSize: "18px", margin: "2.5rem 0" }}>
          We are confident that we can restore your furniture to its former
          glory. Contact us today to schedule a free consultation.
        </Typography>
      </Box>
      <Box sx={{ padding:'2.5rem' }} >
<Grid container>
      <Grid id="contact" item xs={12} sx={{ margin: "2.5rem 0" , }}>
              <Typography sx={{ fontSize: 50, fontWeight: 600 }}>
                Get In Touch
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                minHeight: "",
                background: "",
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column" },
                padding: { xs: "2.5rem 0", md: "2.5rem 2.5rem 2.5rem 0" },
              }}
              xs={12}
              md={6}
            >
              <Typography sx={{ fontSize: "24px", fontWeight: 600 }}>
                Fill in the form below
              </Typography>
              <TextField
                fullWidth
                name=""
                placeholder="Name"
                sx={{ margin: "12px 0", height: "50px" }}
              />
              <TextField
                fullWidth
                name=""
                placeholder="Surname"
                sx={{ margin: "12px 0", height: "50px" }}
              />
              <TextField
                fullWidth
                name=""
                placeholder="Email"
                sx={{ margin: "12px 0", height: "50px" }}
              />
              <TextField
                fullWidth
                name=""
                placeholder="Phone Number"
                sx={{ margin: "12px 0", height: "50px" }}
              />
              <TextField
                fullWidth
                name=""
                placeholder="Service"
                sx={{ margin: "12px 0", height: "50px" }}
              />
              <TextField
                fullWidth
                name=""
                placeholder="Location"
                sx={{ margin: "12px 0", height: "50px" }}
              />
              <Button
                sx={{
                  background: "red",
                  color: "white",
                  p: "21px",
                  fontWeight: "600",
                  width: "fit-content",
                }}
              >
                Get A Consultation
              </Button>
            </Grid>
            <Grid
              item
              sx={{ minHeight: "", background: "green" }}
              xs={12}
              md={6}
            >
              <div style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  height="600"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=172%20De%20Villers%20Johannesburg%20,%20Turffontein+(T&amp;l%20Upholstering)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </Grid>
        
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
              172 De Villiers Street
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
              Monday - Friday: 9am - 5pm
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
            </Grid>
    </Box>
    </Box>
  );
}
const upholstererServices = [
  {
    name: "Reupholstering",
    description:
      "This is the most common service offered by upholsterers. It involves removing the old fabric and padding from a piece of furniture, and then replacing it with new materials.",
  },
  {
    name: "Refinishing",
    description:
      "This service involves cleaning, repairing, and refinishing the frame of a piece of furniture. It can also include reupholstering the furniture.",
  },
  {
    name: "Custom upholstery",
    description:
      "This service involves creating a piece of furniture from scratch, or customizing an existing piece of furniture. The upholsterer will work with the client to choose the fabric, padding, and other materials.",
  },
  {
    name: "Repairing",
    description:
      "This service involves fixing damaged furniture, such as tears in the fabric, broken springs, or loose joints.",
  },
  {
    name: "Refoaming",
    description:
      "This service involves replacing the foam in a piece of furniture. This is often done when the foam has become compressed or discolored.",
  },
  {
    name: "Recushioning",
    description:
      "This service involves replacing the cushions in a piece of furniture. This is often done when the cushions have become worn or saggy.",
  },
  {
    name: "Repadding",
    description:
      "This service involves adding padding to a piece of furniture. This is often done to make the furniture more comfortable or to improve its appearance.",
  },
  {
    name: "Fabric selection",
    description:
      "Upholsterers can help clients choose the right fabric for their furniture. They can provide advice on the type of fabric, the color, and the pattern.",
  },
  {
    name: "Measurements",
    description:
      "Upholsterers can take measurements of furniture to ensure that the new fabric or padding fits properly.",
  },
  {
    name: "Delivery and pickup",
    description:
      "Some upholsterers offer delivery and pickup services. This can be a convenient option for clients who do not have access to a vehicle.",
  },
];
