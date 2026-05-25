export async function getGoalsStats() {
    const url = 'http://localhost:3000/maiorSaldoGols';
    const response = await fetch(url);
    const data = await response.json();

    const teams = [];
    const goals = [];

    data.forEach((item) => {
        teams.push(item.time);
        goals.push(item.saldoGols);
    });

    console.log(teams);
    console.log(goals);
    return { teams, goals };
}