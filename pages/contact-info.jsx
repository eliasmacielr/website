import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MainLayout from "../components/MainLayout";

export default function ContactInfo() {
  return (
    <MainLayout>
      <Typography variant="h2" mt={3}>Contact Information</Typography>

      <Typography component="address">
        Elias Maciel R.<br />
        Google e-mail: <code>eliasmacielr at gmail dot com</code><br />
        UNA institutional e-mail: <code>emaciel at pol dot una dot py</code><br />
        Fernando de la Mora, Central<br />
        Paraguay
      </Typography>
      
      <Box mt={2}
        sx={{
          '& > :not(style) + :not(style)': {
              ml: 2,
          },
      }}>
        <Link href="https://www.linkedin.com/in/eliasmacielr/" target="_blank" rel="noreferrer">
          <Image src="/img/LI-In-Bug.png" alt="LinkedIn Logo" width={38} height={32} />
        </Link>
        <Link href="https://github.com/eliasmacielr" target="_blank" rel="noreferrer">
          <Image src="/img/GitHub-Mark-32px.png" alt="GitHub Logo" width={32} height={32} />
        </Link>
        <Link href="https://twitter.com/eliasmacielr" target="_blank" rel="noreferrer">
          <Image src="/img/Twitter_Social_Icon_Circle_Color.png" alt="Twitter Logo" width={32} height={32} />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100080232595377" target="_blank" rel="noreferrer">
          <Image src="/img/f_logo_RGB-Blue_58.png" alt="Facebook Logo" width={32} height={32} />
        </Link>
        <Link href="https://www.instagram.com/eliasmacielcc/" target="_blank" rel="noreferrer">
          <Image src="/img/Instagram_Glyph_Gradient.png" alt="Instagram Logo"  width={32} height={32} />
        </Link>
      </Box>

      <br/><br/>

      <a href="https://data.typeracer.com/pit/profile?user=eliasmacielr&ref=badge"
        target="_top"><img src="https://data.typeracer.com/misc/badge?user=eliasmacielr"
          border="0" alt="TypeRacer.com scorecard for user eliasmacielr"/></a>
    </MainLayout>
  );
}
