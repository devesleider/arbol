import { useMemo, useState } from 'react'
import DecisionNode from './DecisionNode'

function cloneTree(tree) {
  return structuredClone(tree)
}

function DecisionTree({ processTree }) {
  const treeData = useMemo(() => cloneTree(processTree), [processTree])
  const [expanded, setExpanded] = useState(() => new Set([processTree.id]))
  const [selectedNodeId, setSelectedNodeId] = useState(processTree.id)

  const handleToggle = (nodeId) => {
    setExpanded((current) => {
      const next = new Set(current)
      if (next.has(nodeId)) {
        next.delete(nodeId)
      } else {
        next.add(nodeId)
      }
      return next
    })
  }

  return (
    <section className="tree-wrap" aria-label="Arbol de decision">
      <ul className="tree-root" role="tree">
        <DecisionNode
          node={treeData}
          level={0}
          expanded={expanded}
          selectedNodeId={selectedNodeId}
          onToggle={handleToggle}
          onSelect={setSelectedNodeId}
        />
      </ul>
    </section>
  )
}

export default DecisionTree
