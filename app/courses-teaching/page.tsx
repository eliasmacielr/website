import Link from "next/link";

export default function CoursesAndTeaching() {
  return (
    <div className="px-8 lg:px-0">
      <h2 id="teaching" className="mb-4">Teaching</h2>
      <dl className="mb-12">
        <dt>
          <p className="font-bold">Algorithms I</p>
        </dt>
        <dd>
          <p>National University of Asunción - Engineering Faculty<br />
          Mechatronic Engineering<br />
          Assistant lecturer</p>
        </dd>
      </dl>
      <dl className="mb-12">
        <dt>
          <p className="font-bold">Programación Funcional en Haskell</p>
        </dt>
        <dd>
          <p><Link href="https://drive.google.com/open?id=1hKwQ8JaRDSUPoV-IUloNr6DpI3fbt8WT" target="_blank" rel="noreferrer">[materials]</Link></p>
        </dd>
      </dl>

      <h2 id="schools-and-seminars" className="mb-4">Schools and seminars I&apos;ve attended</h2>
      <ul>
        <li className="mb-2"><p><Link href="https://www.ci2ma.udec.cl/epanum2019/">EPANUM 2019</Link></p></li>
        <li className="mb-2"><p><Link href="http://www.cc.pol.una.py/index.php/2016/06/01/current-trends-in-data-science-seminar/" target="_blank" rel="noreferrer">Current Trends in Data Science</Link></p></li>
        <li className="mb-2"><p><Link href="#">Introducción a la Programación Competitiva</Link></p></li>
      </ul>
    </div>
  )
}