import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
const PieChart = ({userData}) => {
    return (
        <div style={{width:'40%'}}>
            <Pie data={userData}/>
        </div>
    );
}

export default PieChart;