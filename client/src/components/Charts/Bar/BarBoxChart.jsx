import "./Bar.css"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function BarBoxChart(props) {


 return(
    <div className="bar">
        <h1 className='bar_title' >{props.title} </h1>
        <div className="bar_chart">
         <ResponsiveContainer width="99%" height="100%">
        <BarChart
        height={150}
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name"/>

          <YAxis />
          <Tooltip cursor={{fill:"none"}} labelStyle={{display:"none"}}  contentStyle={{background:"hsl(223, 96%, 9%)",borderRadius:"6px"}}   />
          <Legend />
          <Bar dataKey={props.dataKeys[0]} fill="#8884d8" />
          <Bar dataKey={props.dataKeys[1]} fill="#82ca9d" />
          <Bar dataKey={props.dataKeys[2]} fill="#0e6da8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
 )
}
