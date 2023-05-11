import React from 'react'
import DoughnutChart from './DoughnutChart'
import TotalCase from './TotalCase'
import { Bar } from 'react-chartjs-2'
import { Chart, LinearScale, CategoryScale, BarElement, Legend, Title, Tooltip } from 'chart.js'

Chart.register(LinearScale,CategoryScale,BarElement,Legend,Title,Tooltip)
const options = {
    plugins:{
        legend:{
            position:'top'
        },
        title:{
            display: true,
            text: "Case Tracker"
        }
    }
}
function MainDash() {

    const data = {
      labels: ['Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'],
      datasets:[{
        label:'External Case',
        data: [2,5,23,7,4,9,4],
        backgroundColor: 'aqua',
        borderColor: 'black',
        borderWidth: 1
      },
      {
        label:'Internal Case',
        data: [4,6,3,7,4,3,9],
        backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 1
      }]
    }

  return (
    <>
      <div className='container' style={{marginTop:'10px'}}>
        <Bar data={data} options={options} style={{height:''}}/>
      </div>
      <div className="d-md-flex justify-content-between p-5">
        <DoughnutChart />
        <TotalCase />
      </div>
    </>
  )
}
export default MainDash
