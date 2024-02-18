import Sidebar from '../../components/Sidebar/Sidebar';
import Bar from '../../components/Charts/Bar/Bar';
import "./Home.css"
import Pie from '../../components/Charts/Pie/Pie';
export default function Home() {

  return (
    <div className='home-page' >
      <Sidebar/>
      <div className="home-charts">
        <h1 className='home-title' >Chat APP</h1>
      <Bar/>
      <Pie/>
      </div>
    </div>
  )
}
