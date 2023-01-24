import Typography from "@mui/material/Typography";
import MainLayout from "../components/MainLayout";

export default function CoursesTeaching() {
  return (
    <MainLayout>
      <Typography variant="h2" mt={3}>Teaching</Typography>

      <dl>
        <dt><Typography component="p">Algorithms I</Typography></dt>
        <dd><Typography component="p">
          National University of Asunción - Engineering Faculty<br />
          Mechatronic Engineering<br />
          Assistant lecturer
        </Typography></dd>
      </dl>

      <dl>
        <dt><Typography component="p">Programación Funcional en Haskell</Typography></dt>
        <dd><Typography component="p">
          <a href="docs/programacion_funcional_en_haskell_programa.pdf" target="_blank">[course program]</a><br />
          <a href="https://drive.google.com/open?id=1hKwQ8JaRDSUPoV-IUloNr6DpI3fbt8WT" target="_blank" rel="noreferrer">[materials]</a>
        </Typography></dd>
      </dl>

      <Typography variant="h2">Schools and seminars I&apos;ve attended</Typography>
      <ul>
        <li><Typography component="p"><a href="https://www.ci2ma.udec.cl/epanum2019/">EPANUM 2019</a></Typography></li>
        <li><Typography component="p"><a href="http://www.cc.pol.una.py/index.php/2016/06/01/current-trends-in-data-science-seminar/" target="_blank" rel="noreferrer">Current Trends in Data Science</a></Typography></li>
        <li><Typography component="p"><a href="#">Introducción a la Programación Competitiva</a></Typography></li>
      </ul>
    </MainLayout>
  );
}
