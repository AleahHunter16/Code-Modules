import { fetchTrucks } from './api.js';
import { displayTrucks } from './ui.js';

document.getElementById('searchBtn').addEventListener('click', async () => {
    const trucks = await fetchTrucks();
    displayTrucks(trucks);
});