import { setupBarChart } from "./barChart/setup.js";
import { setupPieChart } from "./pieChart/setup.js";
import { setupPolarChart } from "./polarChart/setup.js";
import { setupRadarChart } from "./radarChart/setup.js";

import { getRanking8Teams } from "../../api/rankingApi.js";
import { getGoalsStats } from "../../api/goalsStats.js";
import { getWinsRanking } from "../../api/winStats.js";

const dataRanking = await getRanking8Teams();
const dataGoals = await getGoalsStats();
const dataWins = await getWinsRanking();

let configBar = setupBarChart(dataRanking);
let configPolar = setupPolarChart(dataGoals);
let configRadar = setupRadarChart();
let configPie = setupPieChart(dataWins);

const ctx1 = document.getElementById('bar-chart');
const ctx2 = document.getElementById('polar-chart');
const ctx3 = document.getElementById('radar-chart');
const ctx4 = document.getElementById('pie-chart');

new Chart(ctx1, configBar);
new Chart(ctx2, configPolar);
new Chart(ctx3, configRadar);
new Chart(ctx4, configPie);