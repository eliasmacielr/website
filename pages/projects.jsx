import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MainLayout from "../components/MainLayout";

export default function Projects() {
  return (
    <MainLayout>
      <Typography variant="h2" mt={3}>Projects</Typography>

      <Box mt={2}>
        <Box mt={2}>
          <article>
            <Typography variant="h3">Turista.com.py</Typography>
            <Typography component="p">Destinos turísticos de Paraguay con agencias de viajes, hoteles, restaurantes, pronóstico del clima y todo lo necesario para una estancia perfecta sin importar el lugar elegido.</Typography>
            <Typography component="p"><a href="https://turista.com.py/">[Website]</a></Typography>
          </article>
        </Box>
      </Box>

      <Box mt={2}>
        <article>
          <Typography variant="h3">MSU</Typography>
          <Typography component="p">R language library for Multivariate Symmetrical Uncertainty
            measurement and other related estimators. <a href="https://cran.r-project.org/web/packages/msu/index.html" target="_blank" rel="noreferrer">[CRAN]</a> <a href="https://github.com/eliasmacielr/msu" target="_blank" rel="noreferrer">[GitHub repo]</a></Typography>
          <Typography component="p">This library is based on the research published in the paper
            <cite>Understanding a Version of Multivariate Symmetric Uncertainty
              to assist in Feature Selection</cite>. <a href="https://arxiv.org/abs/1709.08730" target="_blank" rel="noreferrer">[arXiv]</a></Typography>
          <Typography component="p"><a href="https://nidtec.pol.una.py/index.php/2017/11/11/contribuciones-de-la-tesis-de-maestria-en-ciencias-de-la-computacion-estan-disponibles-en-comprehensive-r-archive-network-cran/" target="_blank" rel="noreferrer">
            [NIDTEC publication]</a></Typography>
        </article>
      </Box>

      <Box mt={2}>
        <article>
          <Typography variant="h3">CABIBESKRY</Typography>
          <Typography component="p">Control de algoritmos bloque iterativo basado en el Subespacio de Krylov.</Typography>
          <Typography component="p"><a href="http://www.cc.pol.una.py/~cschaer/CABIBESKRY.html" target="_blank" rel="noreferrer">[Project page]</a></Typography>
        </article>
      </Box>
    </MainLayout>
  );
}
