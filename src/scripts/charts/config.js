import { setupBarChart } from "./barChart/setup.js";
import { setupPieChart } from "./pieChart/setup.js";
import { setupPolarChart } from "./polarChart/setup.js";
import { setupRadarChart } from "./radarChart/setup.js";

let configBar = setupBarChart();
let configPolar = setupPolarChart();
let configRadar = setupRadarChart();
let configPie = setupPieChart();

const ctx1 = document.getElementById('bar-chart');
const ctx2 = document.getElementById('polar-chart');
const ctx3 = document.getElementById('radar-chart');
const ctx4 = document.getElementById('pie-chart');

new Chart(ctx1, configBar);
new Chart(ctx2, configPolar);
new Chart(ctx3, configRadar);
new Chart(ctx4, configPie);