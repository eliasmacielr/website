import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MainLayout from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <section>
        <Box sx={{ my: 3 }}>
          <Typography component="p">My main areas of interest are computer science and web development.</Typography>
          <Typography component="p">I study music with the bass guitar and practice Brazilian Jiu-Jitsu.</Typography>
        </Box>
      </section>

      <section>
        <Typography id="work" variant="h2">Work</Typography>
        <dl>
          <dt><Typography component="p">VR Products I LLC</Typography></dt>
          <dd><Typography component="p">
            Web Developer, December 2020-January 2023.
          </Typography></dd>
        </dl>
        <dl>
          <dt><Typography component="p">Konecta - Software Factory</Typography></dt>
          <dd><Typography component="p">
            Software Developer, September 2017-October 2018.
          </Typography></dd>
        </dl>
        <dl>
          <dt><Typography component="p">Cluster de Investigación Aplicada (CIA) &mdash; FP-UNA</Typography></dt>
          <dd><Typography component="p">
            Junior Software Analyst, September-December 2015.
          </Typography></dd>
        </dl>
      </section>

      <section>
        <Typography id="education" variant='h2'>Education</Typography>
        <dl>
          <dt><Typography component="p">National University of Asunción</Typography></dt>
          <dd><Typography component="p">
            Master of Science in Computer Science, 2021<br />
            Advisors: Christian Schaerer and Inocencio Ortiz<br />
            Thesis: Proposal of Geometric Integrator for Nonconservative, Nonholonomic Mechanical Systems
          </Typography></dd>
        </dl>
        <dl>
          <dt><Typography component="p">National University of Asunción</Typography></dt>
          <dd><Typography component="p">
            Bachelor of Science in Information Technology, 2017<br />
            Advisor: Prof. Christian Schaerer<br />
            Thesis: Evaluation of Block Conjugate Gradient for a Single Right-Hand Side <a href="http://www.cc.pol.una.py/~cschaer/Tesis-Elias%20Maciel.pdf">[PDF]</a>
          </Typography></dd>
        </dl>
      </section>

      <section>
        <Typography id="conferences-and-meetings" variant='h2'>Conferences and meetings</Typography>
        <ul>
          <li><Typography>CILAMCE 2020, XLI Ibero-Latin American Congress on Computational Methods in Engineering,
            16 - 19 November, 2020 - On-line.
          </Typography></li>
          <li><Typography><a href="http://sociedadcientifica.org.py/encuentrodeinvestigadores-convocatoria-2020/">
            V Encuentro de Investigadores</a>,
            9 - 12 de noviembre de 2020 - Online.
          </Typography></li>
          <li><Typography><a href="http://sociedadcientifica.org.py/un-encuentro-para-celebrar-y-discutir-la-ciencia-que-se-construye-en-paraguay/">
            IV Encuentro de Investigadores</a>,
            6 - 8 de noviembre de 2019 - Sociedad Científica del Paraguay, Asunción, Paraguay.
          </Typography></li>
          <li><Typography><a href="http://sociedadcientifica.org.py/el-22-de-agosto-inicia-el-ii-encuentro-de-investigadores/">
            II Encuentro de investigadores</a>,
            22 - 25 de agosto de 2017 - Sociedad Científica del Paraguay, Asunción, Paraguay.
          </Typography></li>
          <li><Typography><a href="http://www.cc.pol.una.py/events/metting-in-applied-scientific-computing/">
            Meeting in Applied Scientific Computing</a>,
            Thursday 20/July/2017 9:00 hs NIDTEC - Facultad Politécnica - San Lorenzo, Paraguay.
          </Typography></li>
          <li><Typography><a href="http://www.epacis.net/ccis2016/en/index.php">
            CCIS 2016 - 4th Conference of Computational Interdisciplinary Sciences</a>,
            November 7th - 10th, 2016 - São José dos Campos, SP, Brazil.
          </Typography></li>
        </ul>
      </section>

      <section>
        <Typography id="posters-and-presentations" variant="h2">Posters and presentations</Typography>
        <ul>
          <li>
            <Typography>
              <a href="docs/Presentaci_n_de_Integrador_de_Contacto_para_el_Disco_Controlado_que_rueda_sin_deslizamiento.pdf">Integrador de Contacto para el Disco Controlado que rueda sin deslizamiento</a>
            </Typography>
          </li>
          <li>
            <Typography>
              <a href="docs/Presentaci_n_de_Integrador_de_Contacto_para_el_Disco_Controlado_que_rueda_sin_deslizamiento.pdf">Integrador de Contacto para el Disco Controlado que rueda sin deslizamiento</a>
            </Typography>
          </li>
          <li>
            <Typography>
              <a href="docs/SpMV_and_SpMM_Performance_Measurement___CCIS_2016.pdf">SpMV and SpMM Performance Measurement</a>
            </Typography>
          </li>
          <li>
            <Typography>
              <a href="docs/WPFG___Presentaci_n.pdf">Evaluación de las rutinas de multiplicación sobre matrices dispersas</a>
            </Typography>
          </li>
        </ul>
      </section>

      <section>
        <Typography id="awards" variant="h2">Awards</Typography>
        <ul>
          <li><Typography><b>Merit Honor</b>, National University of Asunción - 2018</Typography></li>
        </ul>
      </section>
    </MainLayout>
  );
}
