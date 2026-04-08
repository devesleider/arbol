import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="home-shell">
      <section className="home-card">
        <h1>Pagina no encontrada</h1>
        <p>La ruta solicitada no existe en esta aplicacion.</p>
        <Link className="cta" to="/">
          Volver al inicio
        </Link>
      </section>
    </main>
  )
}

export default NotFoundPage
