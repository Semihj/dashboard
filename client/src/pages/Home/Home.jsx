import "./Home.css";
import PieBox from "../../components/Charts/Pie/Pie";
import LineBoxChart from "../../components/Charts/Line/LineChart";
import { categoriesChart, clothSaleLineChart, costLineChart, revenueLineChart, techSaleLineChart, usersAgeChart, viewedByBoxChart } from "../../data";
import BarBoxChart from "../../components/Charts/Bar/BarBoxChart";

export default function Home() {


  return (
      <div className="home">
        <h1 className="home-title">Chat APP</h1>
        <div className="charts">
          <div className="box box-1 "><PieBox  {...usersAgeChart} /></div>
          <div className="box box-2 "><LineBoxChart {...revenueLineChart} /></div>
          <div className="box box-3 "><PieBox {...categoriesChart} /></div>
          <div className="box box-4 "><LineBoxChart {...techSaleLineChart}/> </div>
          <div className="box box-5 "><LineBoxChart {...costLineChart}/> </div>
          <div className="box box-6 "><LineBoxChart {...clothSaleLineChart}/> </div>
          <div className="box box-7 "><BarBoxChart {...viewedByBoxChart} /></div>
        </div>
      </div>
  );
}
