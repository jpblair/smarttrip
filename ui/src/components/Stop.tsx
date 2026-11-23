import { Lines } from "./Lines"
import stopLines from "../data/stopLines.json"

export interface StopProps {
  name: string
  timestamps: number[]
  rank: number
}

export function Stop({ name, rank, timestamps }: StopProps) {
  return (
    <div
      className="w-70 sm:w-90 flex justify-between bg-yellow-950 p-2 gap-3 items-center rounded-md"
      data-tooltip-id="stop-list"
      data-visits={timestamps.join()}
    >
      <div className="flex gap-2 items-center">
        <span className="text-sm sm:text-base text-gray-400">{rank}</span>
        <span className="text-md sm:text-xl text-white font-semibold truncate">{name}</span>
        <span className="text-sm sm:text-base text-gray-400">({timestamps.length})</span>
      </div>
      <Lines lines={stopLines[name as keyof typeof stopLines] ?? []} />
    </div>
  )
}
