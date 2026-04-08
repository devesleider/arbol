import { useMemo, useState } from 'react'
import DecisionTree from '../components/DecisionTree'
import ProcessSelector from '../components/ProcessSelector'
import treeDataSource from '../data/decisionTrees.json'

function DecisionTreePage() {
  const [activeProcess, setActiveProcess] = useState('onboarding')

  const processTree = useMemo(
    () => treeDataSource.processTemplates[activeProcess],
    [activeProcess],
  )

  return (
    <main className="app-shell">
      <header className="hero">
        <div>
          <p className="kicker">Flujo inteligente de procesos</p>
          <h1>Arbol de decision visual para SharePoint</h1>
          <p className="subtitle">
            Haz clic en cada opcion para desplegar nodos anidados y visualizar el
            flujo que debes seguir en cada proceso.
          </p>
        </div>

        <ProcessSelector
          processNames={treeDataSource.processNames}
          activeProcess={activeProcess}
          onChange={setActiveProcess}
        />
      </header>

      <section className="workspace one-column">
        <DecisionTree key={activeProcess} processTree={processTree} />
      </section>
    </main>
  )
}

export default DecisionTreePage
