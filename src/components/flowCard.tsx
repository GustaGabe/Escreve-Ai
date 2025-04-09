"use client"
import {
  Background,
  BackgroundVariant,
  Controls,
  NodeResizeControl,
  NodeToolbar,
  Panel,
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'

export const FlowCard = () => {
  const initialNodes = [{ id: '1', position: { x: 0, y: 0 }, data: { label: 'First node' } }]

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)

  return (
    <div className=" w-[500px] h-[400px] rounded-md text-center border overflow-auto border-violet-400">
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          fitView
          style={{ width: '300px', height: '100%' }}
          colorMode="dark"
          preventScrolling={true}
          nodesDraggable={true}
          onNodesChange={onNodesChange}
          panOnDrag={true}
        >
          <Background color="#FFFFFF" variant={BackgroundVariant.Dots} />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  )
}
