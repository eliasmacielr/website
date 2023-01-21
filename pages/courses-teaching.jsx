import MainLayout from "../components/MainLayout";

export default function CoursesTeaching() {
  return (
    <MainLayout>
      <h2>Teaching</h2>

      <dl>
        <dt>Algorithms I</dt>
        <dd>
          National University of Asunción - Engineering Faculty<br />
          Mechatronic Engineering<br />
          Assistant lecturer
        </dd>
      </dl>

      <dl>
        <dt>Programación Funcional en Haskell</dt>
        <dd>
          <a href="docs/programacion_funcional_en_haskell_programa.pdf" target="_blank">[course program]</a><br />
          <a href="https://drive.google.com/open?id=1hKwQ8JaRDSUPoV-IUloNr6DpI3fbt8WT" target="_blank" rel="noreferrer">[materials]</a>
        </dd>
      </dl>

      <h2>Schools and seminars I&apos;ve attended</h2>
      <a href="https://www.ci2ma.udec.cl/epanum2019/">
        EPANUM 2019
      </a>
      <br />
      <a href="http://www.cc.pol.una.py/index.php/2016/06/01/current-trends-in-data-science-seminar/" target="_blank" rel="noreferrer">
        Current Trends in Data Science
      </a>
      <br />
      <a href="#">
        Introducción a la Programación Competitiva
      </a>
    </MainLayout>
  );
}
