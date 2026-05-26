export async function getWinsRanking() {
    const url = 'http://localhost:3000/classificacaoGeral';
    const response = await fetch(url);
    const data = await response.json();

    const teams = [];
    const wins = [];

    data.forEach((item) => {
        teams.push(item.time);
        wins.push(item.vit);
    });

    console.log(teams);
    console.log(wins);
    return { teams, wins };
}