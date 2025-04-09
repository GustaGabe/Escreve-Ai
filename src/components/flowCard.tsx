"use client"
import {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlow,
  ReactFlowProvider,
  useNodesState,
} from '@xyflow/react'
import { CustomNode } from './customNode'

export const FlowCard = () => {
 

  
  const nodeTypes = {
    custom: CustomNode,
  }

  const initialNodes = [{ id: '1', type: 'custom', position: { x: 0, y: 0 }, data: { label: 'First node' } }]

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
          nodeTypes={nodeTypes}
          panOnDrag={true}
          className='bg-violet-500 text-black'
        >
          <Background color="#FFFFFF" variant={BackgroundVariant.Dots} />
          <Controls />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  )
}
