import { BarChart } from '@mui/x-charts/BarChart'
import "./Bar.css"
export default function Bar() {
  return (
    <div className="bar" >
        <div className="info" >
        <h1>Revenue</h1>
        <div className="colors" >
        <p> <span className="color1" ></span> <span>Revenue</span> </p>
        <p> <span className="color2" ></span> <span>Targeted</span> </p>
        </div>
     
      </div> 
      <BarChart
  series={[
    { data: [10, 20, 33, 44, 55], color: "blue" },
    { data: [10, 20, 30, 4, 15], color: "red" },
  ]}
  xAxis={[{ data: ["1", "2", "3", "4", "5"], scaleType: "band" }]}
/*   style={{
    flex:   1, // Dynamically resize based on container
    minHeight: 300,// Set a minimum height for better responsiveness
  }} *//>
    </div>
  )
}
