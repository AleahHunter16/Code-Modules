export const displayTrucks = (trucks) => {
    const gallery = document.getElementById('truckGallery');
    gallery.innerHTML = ''; //delete results also dogs equal trucks
    trucks.forEach(truck => {
        const truckDiv = document.createElement('div');
        truckDiv.className = 'truck';
        truckDiv.innerHTML = `<img src="${truck}" alt="Tow Truck" style="width:100%;">`;
        gallery.appendChild(truckDiv);
    });
};