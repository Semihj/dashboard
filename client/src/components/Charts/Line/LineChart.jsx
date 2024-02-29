import "./Line.css";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";
export default function LineBoxChart(props) {

  return (
    <div className="line">
      <h1 className="line_title">{props.title}</h1>
      <div className="line_chart">
        <ResponsiveContainer width="99%" height="100%">
          <LineChart data={props.data}>
            <Tooltip
              itemStyle={{ color: "#fff" }}
              contentStyle={{ background: "transparent", border: "none" }}
              labelStyle={{ display: "none" }}
            />
            <Line
              type="monotone"
              dataKey={props.dataKey}
              stroke={props.color}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
