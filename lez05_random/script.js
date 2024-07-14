//Variables
const width = 500;
const height = 500;
const numCirconfer = 80;
const raggio = 6;

//Funzione per la generazione delle coordinate
function getRandomCoord(numeroMax, width, height){
    const coordinates = [];

    for(let i=0; i<numeroMax; i++){
        const varX = Math.random() * width;
        const varY = Math.random() * height;

        coordinates.push({x: varX, y: varY})
    }

    return coordinates;
}

const svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border", "1px solid blue");

const container = getRandomCoord(numCirconfer, width, height);

svg.selectAll("circle")
    .data(container)
    .enter()
    .append("circle")
    .attr("cx", cir => cir.x)
    .attr("cy", cir => cir.y)
    .attr("r", raggio)
    .attr("fill", "blue")