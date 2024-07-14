const numCirc = 200;
const radius = 5;

const svg = d3.select("svg");

const { width, height } = svg.node().getBoundingClientRect();

const points = d3.range(numCirc).map(() => [
    Math.random() * width, Math.random() * height
])

svg.selectAll("circle")
    .data(points)
    .enter()
    .append("circle")
    .attr("r", radius)
    .attr("cx", cir => cir[0])
    .attr("cy", cir => cir[1]);
