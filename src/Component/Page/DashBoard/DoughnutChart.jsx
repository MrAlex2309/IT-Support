import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

function DoughnutChart() {

    const data = {
        labels: ['Makara','Dara'],
        datasets: [{
            label: 'Cases',
            data: [12,24],
            backgroundColor: ['blue','green'],
            borderColor: ['blue','green'],
            borderWidth: 1,
        },
    ]
    }
    const option = {

    }

  return (
    <div className='w-100 d-flex justify-content-center' style={{width:'500px', height:'500px'}}>
      <Doughnut data={data} options={option}/>
    </div>
  )
}

export default DoughnutChart
