import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <main className="home-shell">
      <section className="home-card">
        <p className="kicker">Portal de procesos</p>
        <h1>Selecciona la vista de flujo</h1>
        <p>
          Esta aplicacion esta preparada para incrustarse en SharePoint y mostrar
          arboles de decision interactivos por proceso.
        </p>
        <Link className="cta" to="/flujo">
          Ir al arbol de decision
        </Link>
      </section>
    </main>
  )
}

export default HomePage
