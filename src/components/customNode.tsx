import { Handle, NodeResizer, Position } from "@xyflow/react"

export const CustomNode = ({ data }: any) => {
    return (
        <div className="px-4 py-2 shadow-md rounded-md bg-black border-2 border-violet-500">
           <NodeResizer />
          <div className="flex">
         
            <div className="rounded-full w-12 h-12 flex justify-center items-center text-white">
              {data.label}
            </div>
          </div>z
     
          <Handle
            type="target"
            position={Position.Top}
            className="w-16 !bg-white"
          />
          <Handle
            type="source"
            position={Position.Bottom}
            className="w-16 !bg-white"
          />
        </div>
    )
}