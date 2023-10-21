import Link from "next/link";

export default function Home() {
  return (
    <div className="px-8 lg:px-0">
      <section className="mb-16 lg:grid lg:grid-cols-3">
        <h2 id="interests" className="mb-4 italic lg:mb-0">
          Interests
        </h2>
        <div className="col-span-2">
          <p>
            My main areas of interest are web development and computer science.
          </p>
          <p>
            I study music with the bass guitar and practice Brazilian Jiu-Jitsu.
          </p>
        </div>
      </section>
      <section className="mb-16 lg:grid lg:grid-cols-3">
        <h2 id="work" className="mb-4 italic lg:mb-0">
          Work
        </h2>
        <div className="col-span-2">
          <dl className="mb-8">
            <dt>
              <p className="font-bold">Freelancer</p>
            </dt>
            <dd>
              <p>Web Developer, June 2023-present.</p>
            </dd>
          </dl>
          <dl className="mb-8">
            <dt>
              <p className="font-bold">Logo Media</p>
            </dt>
            <dd>
              <p>Web Developer, March 2023-June 2023.</p>
            </dd>
          </dl>
          <dl className="mb-8">
            <dt>
              <p className="font-bold">VR Products I LLC</p>
            </dt>
            <dd>
              <p>Web Developer, December 2020-January 2023.</p>
            </dd>
          </dl>
          <dl className="mb-8">
            <dt>
              <p className="font-bold">Konecta - Software Factory</p>
            </dt>
            <dd>
              <p>Software Developer, September 2017-October 2018.</p>
            </dd>
          </dl>
          <dl className="mb-8">
            <dt>
              <p className="font-bold">
                Cluster de Investigación Aplicada (CIA) &mdash; FP-UNA
              </p>
            </dt>
            <dd>
              <p>Junior Software Analyst, September-December 2015.</p>
            </dd>
          </dl>
        </div>
      </section>
      <section className="mb-16 lg:grid lg:grid-cols-3">
        <h2 id="education" className="mb-4 lg:mb-0">
          Education
        </h2>
        <div className="col-span-2">
          <dl className="mb-8">
            <dt>
              <p>National University of Asunción</p>
            </dt>
            <dd>
              <p>
                Master of Science in Computer Science, 2021
                <br />
                Advisors: Christian Schaerer and Inocencio Ortiz
                <br />
                Thesis: Proposal of Geometric Integrator for Nonconservative,
                Nonholonomic Mechanical Systems
              </p>
            </dd>
          </dl>
          <dl>
            <dt>
              <p>National University of Asunción</p>
            </dt>
            <dd>
              <p>
                Bachelor of Science in Information Technology, 2017
                <br />
                Advisor: Prof. Christian Schaerer
                <br />
                Thesis: Evaluation of Block Conjugate Gradient for a Single
                Right-Hand Side{" "}
                <Link href="http://www.cc.pol.una.py/~cschaer/Tesis-Elias%20Maciel.pdf">
                  [PDF]
                </Link>
              </p>
            </dd>
          </dl>
        </div>
      </section>
      <section className="mb-16 lg:grid lg:grid-cols-3">
        <h2 id="publications">Publications</h2>
        <div className="col-span-2">
          <ul>
            <li className="my-4">
              <h3>
                A Herglotz-based integrator for nonholonomic mechanical systems
              </h3>
              <Link
                className="w-50 block truncate text-ellipsis"
                href="https://www.aimspress.com/article/doi/10.3934/jgm.2023012"
                target="_blank"
              >
                https://www.aimspress.com/article/doi/10.3934/jgm.2023012
              </Link>
              <p>February 2023</p>
            </li>
          </ul>
          <ul>
            <li>
              <h3>
                A comparison of geometric integrators for nonconservative and
                nonholonomic systems
              </h3>
              <Link
                className="w-50 block truncate text-ellipsis"
                href="https://cilamce.com.br/anais/arearestrita/apresentacoes/182/8449.pdf"
                target="_blank"
              >
                https://cilamce.com.br/anais/arearestrita/apresentacoes/182/8449.pdf
              </Link>
              <p>November 2020</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="mb-16 lg:grid lg:grid-cols-3">
        <h2 id="conferences-and-meetings" className="mb-4 lg:mb-0">
          Conferences and meetings
        </h2>
        <div className="col-span-2">
          <ul>
            <li>
              CILAMCE 2020, XLI Ibero-Latin American Congress on Computational
              Methods in Engineering, 16 - 19 November, 2020 - On-line.
            </li>
            <li>
              <Link
                href="http://sociedadcientifica.org.py/encuentrodeinvestigadores-convocatoria-2020/"
                target="_blank"
              >
                V Encuentro de Investigadores
              </Link>
              , 9 - 12 de noviembre de 2020 - Online.
            </li>
            <li>
              <Link
                href="http://sociedadcientifica.org.py/un-encuentro-para-celebrar-y-discutir-la-ciencia-que-se-construye-en-paraguay/"
                target="_blank"
              >
                IV Encuentro de Investigadores
              </Link>
              , 6 - 8 de noviembre de 2019 - Sociedad Científica del Paraguay,
              Asunción, Paraguay.
            </li>
            <li>
              <Link
                href="http://sociedadcientifica.org.py/el-22-de-agosto-inicia-el-ii-encuentro-de-investigadores/"
                target="_blank"
              >
                II Encuentro de investigadores
              </Link>
              , 22 - 25 de agosto de 2017 - Sociedad Científica del Paraguay,
              Asunción, Paraguay.
            </li>
            <li>
              <Link
                href="http://www.cc.pol.una.py/events/metting-in-applied-scientific-computing/"
                target="_blank"
              >
                Meeting in Applied Scientific Computing
              </Link>
              , Thursday 20/July/2017 9:00 hs NIDTEC - Facultad Politécnica -
              San Lorenzo, Paraguay.
            </li>
            <li>
              <Link
                href="http://www.epacis.net/ccis2016/en/index.php"
                target="_blank"
              >
                CCIS 2016 - 4th Conference of Computational Interdisciplinary
                Sciences
              </Link>
              , November 7th - 10th, 2016 - São José dos Campos, SP, Brazil.
            </li>
          </ul>
        </div>
      </section>
      <section className="mb-16 lg:grid lg:grid-cols-3">
        <h2 id="posters-and-presentations" className="mb-4 lg:mb-0">
          Posters and presentations
        </h2>
        <div className="col-span-2">
          <ul>
            <li>
              <Link
                href="docs/Integrador_geom_trico_de_contacto_con_restricciones_no_holon_micas___Poster_V_Encuentro_de_Investigadores_2020.pdf"
                target="_blank"
              >
                Integrador geométrico de contacto con restricciones no
                holonómicas
              </Link>
            </li>
            <li>
              <Link
                href="docs/Presentaci_n_de_Integrador_de_Contacto_para_el_Disco_Controlado_que_rueda_sin_deslizamiento.pdf"
                target="_blank"
              >
                Integrador de Contacto para el Disco Controlado que rueda sin
                deslizamiento
              </Link>
            </li>
            <li>
              <Link
                href="docs/SpMV_and_SpMM_Performance_Measurement___CCIS_2016.pdf"
                target="_blank"
              >
                SpMV and SpMM Performance Measurement
              </Link>
            </li>
            <li>
              <Link href="docs/WPFG___Presentaci_n.pdf" target="_blank">
                Evaluación de las rutinas de multiplicación sobre matrices
                dispersas
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="mb-16 lg:grid lg:grid-cols-3">
        <h2 id="awards" className="mb-6 mt-4 lg:mb-0 lg:mt-0">
          Awards
        </h2>
        <div className="col-span-2">
          <ul>
            <li>
              <b>Merit Honor</b>, National University of Asunción - 2018.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
