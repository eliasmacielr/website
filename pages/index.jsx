import { Typography } from "@mui/material";
import MainLayout from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout>
      <section>
        <Typography variant="subtitle1" component="p">My main areas of interest are computer science and web development.</Typography>
        <Typography variant="subtitle1" component="p">I study music with the bass guitar and practice Brazilian Jiu-Jitsu.</Typography>
      </section>

      <section>
        <Typography id="work" variant="h2">Work</Typography>
        <Typography>
          <dl>
            <dt>VR Products I LLC</dt>
            <dd>
              Web Developer, December 2020-January 2023.
            </dd>
          </dl>
          <dl>
            <dt>Konecta - Software Factory</dt>
            <dd>
              Software Developer, September 2017-October 2018.
            </dd>
          </dl>
          <dl>
            <dt>Cluster de Investigación Aplicada (CIA) &mdash; FP-UNA</dt>
            <dd>
              Junior Software Analyst, September-December 2015.
            </dd>
          </dl>
        </Typography>
      </section>

      <section>
        <Typography id="education" variant='h2'>Education</Typography>
        <dl>
          <dt>National University of Asunción</dt>
          <dd>
            Master of Science in Computer Science, 2021<br />
            Advisors: Christian Schaerer and Inocencio Ortiz<br />
            Thesis: Proposal of Geometric Integrator for Nonconservative, Nonholonomic Mechanical Systems
          </dd>
        </dl>
        <dl>
          <dt>National University of Asunción</dt>
          <dd>
            Bachelor of Science in Information Technology, 2017<br />
            Advisor: Prof. Christian Schaerer<br />
            Thesis: Evaluation of Block Conjugate Gradient for a Single Right-Hand Side
            <a href="http://www.cc.pol.una.py/~cschaer/Tesis-Elias%20Maciel.pdf">[PDF]</a>
          </dd>
        </dl>
      </section>

      <section>
        <Typography id="conferences-and-meetings" variant='h2'>Conferences and meetings</Typography>
        <ul>
          <li>CILAMCE 2020, XLI Ibero-Latin American Congress on Computational Methods in Engineering,
            16 - 19 November, 2020 - On-line.
          </li>
          <li><a href="http://sociedadcientifica.org.py/encuentrodeinvestigadores-convocatoria-2020/">
            V Encuentro de Investigadores</a>,
            9 - 12 de noviembre de 2020 - Online.
          </li>
          <li><a href="http://sociedadcientifica.org.py/un-encuentro-para-celebrar-y-discutir-la-ciencia-que-se-construye-en-paraguay/">
            IV Encuentro de Investigadores</a>,
            6 - 8 de noviembre de 2019 - Sociedad Científica del Paraguay, Asunción, Paraguay.
          </li>
          <li><a href="http://sociedadcientifica.org.py/el-22-de-agosto-inicia-el-ii-encuentro-de-investigadores/">
            II Encuentro de investigadores</a>,
            22 - 25 de agosto de 2017 - Sociedad Científica del Paraguay, Asunción, Paraguay.
          </li>
          <li><a href="http://www.cc.pol.una.py/events/metting-in-applied-scientific-computing/">
            Meeting in Applied Scientific Computing</a>,
            Thursday 20/July/2017 9:00 hs NIDTEC - Facultad Politécnica - San Lorenzo, Paraguay.
          </li>
          <li><a href="http://www.epacis.net/ccis2016/en/index.php">
            CCIS 2016 - 4th Conference of Computational Interdisciplinary Sciences</a>,
            November 7th - 10th, 2016 - São José dos Campos, SP, Brazil.
          </li>
        </ul>
      </section>

      <section>
        <Typography id="posters-and-presentations" variant="h2">Posters and presentations</Typography>
        <a href="docs/Integrador_geom_trico_de_contacto_con_restricciones_no_holon_micas___Poster_V_Encuentro_de_Investigadores_2020.pdf">Integrador geométrico de contacto con restricciones no holonómicas</a><br />
        <a href="docs/Presentaci_n_de_Integrador_de_Contacto_para_el_Disco_Controlado_que_rueda_sin_deslizamiento.pdf">Integrador de Contacto para el Disco Controlado que rueda sin deslizamiento</a><br />
        <a href="docs/SpMV_and_SpMM_Performance_Measurement___CCIS_2016.pdf">SpMV and SpMM Performance Measurement</a><br />
        <a href="docs/WPFG___Presentaci_n.pdf">Evaluación de las rutinas de multiplicación sobre matrices dispersas</a>
      </section>

      <section>
        <Typography id="awards" variant='h2'>Awards</Typography>
        <ul>
          <li><b>Merit Honor</b>, National University of Asunción - 2018</li>
        </ul>
      </section>
    </MainLayout>
  );
}
