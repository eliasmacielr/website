export default function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="flex flex-col items-center bg-slate-800 text-gray-200">
      <p className="p-12 text-3xl">
        Built with Brain &amp; Brawn by Elias Maciel - {year}.
      </p>
    </footer>
  )
}
