import React from "react";
import '/home/user/pw/personal-web/src/styles/diagram.css';
import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
 
const initialNodes = [
  { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' } },
  { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' } },
  { id: 'n3', position: { x: 0, y: 200 }, data: { label: 'Node 3' } },
  { id: 'n4', position: { x: 0, y: 300 }, data: { label: 'Node 4' } },
];

const initialEdges = [
    { id: 'n1-n2', source: 'n1', target: 'n2' },
    { id: 'n3-n2', source: 'n3', target: 'n2' },
    { id: 'n4-n2', source: 'n4', target: 'n2' }
];

export default function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges); 
 
  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );
 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        panOnScroll = "false"
        fitView
      />
    </div>
  );
}