export function setupPolarChart(dataGoals) {
    const labels = dataGoals.teams;
    const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: dataGoals.goals,
        backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
        ]
    }]
};

    const config = {
        type: 'polarArea',
        data: data,
        options: {}
    };
    return config;
}