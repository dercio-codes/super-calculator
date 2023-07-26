import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box id="app-background" sx={{ p: "0" }}>
      <Box></Box>
      <Typography></Typography>

      <Box
        sx={{
          // backgroundImage: "url(/mesh2.png)",
          // backgroundSize: "cover",
          minHeight: "90vh",
          backgroundPosition: "center bottom",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: "2.5rem",
        }}
      >
        <Grid container>
          <Grid
            item
            sx={{
              minHeight: "",
              p: "2.5rem 0",
            }}
            xs={12}
            md={6}
          >
            <Typography sx={{ fontSize: 50, fontWeight: 600 }}>
              Crafted with excellent Woor
            </Typography>
            <Typography sx={{ fontSize: 21, margin: "12px 0" }}>
              We use the best wood and materials to ensure we supply good aulity
              standard work.
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Button
                sx={{
                  background: "rgb(244, 209, 96)",
                  color: "white",
                  p: "12px",
                  fontWeight: "600",
                }}
              >
                Get A Consultation
              </Button>
              <Link href="#contact" >
                    <a>
                  <Button
                    sx={{
                      padding: "12px 21px",
                      fontWeight: "600",
                      margin:'0 0 0 21px',
                      color: "rgb(244, 209, 96)",
                      border:'1px solid rgb(244, 209, 96)',
                      // color: "white",
                      width: "fit-content",
                      "&:hover": {
                        background:"rgb(244, 209, 96)",}
                    }}
                  >
                    Order CUstom
                  </Button>
                  </a>
                  </Link>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              minHeight: "",
              // backgroundImage: "url(/banner-bg.jpg)",
              // backgroundSize: "contain",
              padding: "21px",
              transition: "800ms",
              "&:hover": { background: "rgb(244, 209, 96)" },
            }}
            xs={12}
            md={6}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography
                  sx={{ fontSize: 21, margin: "12px 0", FontWeight: 600 }}
                >
                  Materials
                </Typography>
                <Typography
                  sx={{ fontSize: 16, margin: "0", FontWeight: 3600 }}
                >
                  Nylon , Wood, Wool
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: 21, margin: "12px 0", FontWeight: 600 }}
                >
                  Size
                </Typography>
                <Typography
                  sx={{ fontSize: 16, margin: "0", FontWeight: 3600 }}
                >
                  XL
                </Typography>
              </Box>
            </Box>
            <img
              src="/sofa.png"
              style={{ objectFit: "contain", width: "100%", margin: "21px 0" }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          // backgroundImage: "url(/mesh2.png)",
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            p: { xs: "2.5rem 12px", md: "2.5rem" },
          }}
        >
          <Grid container>
            <Grid id="services" item xs={12}>
              <Typography sx={{ fontSize: 50, fontWeight: 600 }}>
                Our Services
              </Typography>
            </Grid>

            {upholstererServices.map((item, index) => {
              return (
                <Grid
                  key={index}
                  item
                  sx={{
                    minHeight: "",
                    // background: "rgba(1,1,1,.1)",
                    background:
                      index % 2 === 0 ? "rgb(244, 209, 96)" : "rgb(29, 93, 155)",
                      // index % 2 === 0 ? "rgb(192, 127, 0)" : "rgb(76, 61, 61)",
                    // color: index % 2 === 0 ? "black" : "white",
                    color: "white",
                    margin: "12px 0",
                    padding: "2.5rem",
                    transition: "800ms",
                    "&:hover": {
                      background:
                      index % 2 === 0 ? "rgba(244, 209, 96,.7)" : "rgba(29, 93, 155,.7)",
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                  xs={12}
                  md={4}
                >
                  <Box>
                    <Typography sx={{ fontSize: 40, fontWeight: 600 }}>
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 21, fontWeight: 300, margin: "21px 0" }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                  <Link href="#contact" >
                    <a>
                  <Button
                    sx={{
                      padding: "12px 21px",
                      fontWeight: "600",
                      color: "rgb(255, 247, 212)",
                      border:'1px solid rgb(255, 247, 212)',
                      // color: "white",
                      width: "fit-content",
                      "&:hover": {
                        background:
                        index % 2 !== 0 ? "rgba(244, 209, 96,.7)" : "rgba(29, 93, 155,.7)",}
                    }}
                  >
                    Order CUstom
                  </Button>
                  </a>
                  </Link>
                </Grid>
              );
            })}
            <Grid id="contact" item xs={12} sx={{ margin: "2.5rem 0" }}>
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
                p: { xs: "2.5rem 0", md: "2.5rem 2.5rem 2.5rem 0" },
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
                  background: "rgb(244, 209, 96)",
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
              sx={{ minHeight: "", background: "" }}
              xs={12}
              md={6}
            >
              <div style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  height="500"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  style={{ background:'white' }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14314.150071364438!2d28.031408912357097!3d-26.244212765602267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950f20268f78fb%3A0x50ee91b36139476c!2s68%20De%20Villiers%20St%2C%20Turffontein%2C%20Johannesburg%20South%2C%202140!5e0!3m2!1sen!2sza!4v1690351105321!5m2!1sen!2sza"
                  // src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=68%20De%20Villiers%20Johannesburg%20,%20Turffontein+(T&amp;l%20Upholstering)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14314.150071364438!2d28.031408912357097!3d-26.244212765602267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950f20268f78fb%3A0x50ee91b36139476c!2s68%20De%20Villiers%20St%2C%20Turffontein%2C%20Johannesburg%20South%2C%202140!5e0!3m2!1sen!2sza!4v1690351105321!5m2!1sen!2sza" width="100%" height="450px" style="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
             ></iframe>
              </div>
            </Grid>
          </Grid>
        </Box>
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
