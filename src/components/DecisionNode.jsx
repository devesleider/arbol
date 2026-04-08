function DecisionNode({
  node,
  level,
  expanded,
  selectedNodeId,
  onToggle,
  onSelect,
}) {
  const isOpen = expanded.has(node.id)
  const hasChildren = node.children.length > 0
  const isSelected = selectedNodeId === node.id

  return (
    <li className="tree-node" role="treeitem" aria-expanded={hasChildren ? isOpen : undefined}>
      <div className={`node-card ${isSelected ? 'selected' : ''}`}>
        <button
          className="node-main"
          onClick={() => {
            onSelect(node.id)
            if (hasChildren) {
              onToggle(node.id)
            }
          }}
          title="Haz clic para expandir/colapsar"
          type="button"
        >
          <span className="node-chip">Nivel {level + 1}</span>
          <h3>{node.label}</h3>
          <p>{node.detail}</p>
        </button>

        {hasChildren ? (
          <button
            className="toggle"
            onClick={() => onToggle(node.id)}
            aria-label={isOpen ? 'Colapsar nodo' : 'Expandir nodo'}
            type="button"
          >
            {isOpen ? '-' : '+'}
          </button>
        ) : (
          <span className="leaf">Fin</span>
        )}
      </div>

      {hasChildren && isOpen && (
        <ul className="tree-branch" role="group">
          {node.children.map((child) => (
            <DecisionNode
              key={child.id}
              node={child}
              level={level + 1}
              expanded={expanded}
              selectedNodeId={selectedNodeId}
              onToggle={onToggle}
              onSelect={onSelect}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

export default DecisionNode
