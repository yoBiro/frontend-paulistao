export async function getRanking8Teams() {
    const url = 'http://localhost:3000/melhores8';
    const response = await fetch(url);
    const data = await response.json();

    const teams = [];
    const points = [];

    data.forEach((item) => {
        teams.push(item.time);
        points.push(item.pts);
    });

    console.log(teams);
    console.log(points);
    return { teams, points };
}