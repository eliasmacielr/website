import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function Footer() {
  const date = new Date;
  const year = date.getFullYear();
  return (
    <>
      <Divider />
      <footer>
        <Box sx={{ py: 3 }}>
          <Typography variant="h6" component="p">Built with Brain &amp; Brawn by Elias Maciel - {year}.</Typography>
        </Box>
      </footer>
    </>
  )
}