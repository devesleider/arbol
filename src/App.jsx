import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import DecisionTreePage from './pages/DecisionTreePage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <div>
      <nav className="top-nav" aria-label="Navegacion principal">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)} end>
          Inicio
        </NavLink>
        <NavLink to="/flujo" className={({ isActive }) => (isActive ? 'active' : undefined)}>
          Arbol de decision
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flujo" element={<DecisionTreePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
