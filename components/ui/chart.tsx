"use client"
import {
  Bar,
  BarChart as RechartsBarChart,
  Line,
  LineChart as RechartsLineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts"

interface ChartProps {
  data: any[]
  index: string
  categories: string[]
  colors?: string[]
  className?: string
}

export function BarChart({ data, index, categories, colors = ["#ef4444"], className }: ChartProps) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" className="dark:stroke-gray-700" />
          <XAxis
            dataKey={index}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickMargin={10}
            className="text-gray-600 dark:text-gray-400"
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickMargin={10}
            className="text-gray-600 dark:text-gray-400"
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-800 p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-gray-500 dark:text-gray-400">
                          {payload[0].name}
                        </span>
                        <span className="font-bold text-gray-900 dark:text-gray-100">
                          {payload[0].payload.formattedValue || payload[0].value}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          {categories.map((category, i) => (
            <Bar key={category} dataKey={category} fill={colors[i % colors.length]} radius={[4, 4, 0, 0]} />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function LineChart({
  data,
  index,
  categories,
  colors = ["#ef4444", "#3b82f6", "#10b981"],
  className,
}: ChartProps) {
  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" className="dark:stroke-gray-700" />
          <XAxis
            dataKey={index}
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickMargin={10}
            className="text-gray-600 dark:text-gray-400"
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickMargin={10}
            className="text-gray-600 dark:text-gray-400"
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-white dark:bg-gray-900 dark:border-gray-800 p-2 shadow-sm">
                    <div className="grid grid-cols-2 gap-2">
                      {payload.map((entry) => (
                        <div key={entry.name} className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-gray-500 dark:text-gray-400">
                            {entry.name}
                          </span>
                          <span className="font-bold text-gray-900 dark:text-gray-100">
                            {entry.payload.formattedValue || entry.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
          <Legend />
          {categories.map((category, i) => (
            <Line
              key={category}
              type="monotone"
              dataKey={category}
              stroke={colors[i % colors.length]}
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 2 }}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  )
}
