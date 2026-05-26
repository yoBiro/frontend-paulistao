export function setupPieChart(dataWins) {
    const labels = dataWins.teams;
    const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: dataWins.wins,
        backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(153, 102, 255)',
        'rgb(255, 159, 64)',
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)'
        ],
        hoverOffset: 4
    }]
};

    const config = {
        type: 'pie',
        data: data,
    };
    return config;

}