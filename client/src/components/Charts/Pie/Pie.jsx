import "./Pie.css";
import { PieChart, Cell, Pie, ResponsiveContainer, Tooltip } from "recharts";
export default function PieBox(props) {
  const data = [
    { name: "0-18", value: 400, color: "#336998" },
    { name: "18-25", value: 300, color: "#18a38c" },
    { name: "25-40", value: 300, color: "#bc4f14" },
    { name: "40+", value: 200, color: "#21c437" },
  ];

  return (
    <div className="pie">
      <h1 className="pie-title">{props.title} </h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{
                background: "white",
                borderRadius: "6px",
                border:"none"
              }}
            />
            <Pie
              data={props.data}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {props.data?.map((item, index) => (
                <Cell key={`cell-${index}`} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {props.data?.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
