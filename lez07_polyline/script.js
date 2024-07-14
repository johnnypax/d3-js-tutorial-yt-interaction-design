const svg = d3.select("svg");

const points = [
    { x: 50, y: 70 },
    { x: 30, y: 190 },
    { x: 250, y: 270 },
    { x: 220, y: 290 },
]

const lineGen = d3.line()
                    .x(poi => poi.x)
                    .y(poi => poi.y);

svg.append("path")
    .datum(points)
    .attr("d", lineGen)
    .attr("stroke", "red")
    .attr("stroke-width", 5)
    .attr("fill", "none")

svg.selectAll("circle")
    .data(points)
    .enter()
    .append("circle")
    .attr("cx", cir => cir.x)
    .attr("cy", cir => cir.y)
    .attr("r", 5)