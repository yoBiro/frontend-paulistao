export async function getRanking8Teams() {
    const url = 'http://localhost:3000/melhores8';
    const response = await fetch(url);
    const data = await response.json();
    return data;
}