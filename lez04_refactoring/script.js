const container = [
    {
        id: 101,
        x: 30,
        y: 50,
        w: 50,
        h: 20,
        color: "blue"
    },
    {
        id: 102,
        x: 130,
        y: 150,
        w: 30,
        h: 50,
        color: "red"
    },
];

const svg = d3.select("body")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .style("border", "1px solid blue");

svg.selectAll("rect")
    .data(container)        //Contenitore dati
    .enter()
    .append("rect")
    .attr("x", r => r.x)
    .attr("y", r => r.y)
    .attr("width", r => r.w)
    .attr("height", r => r.h)
    .attr("fill", r => r.color)
    .attr("id", r => r.id)
    .on("mouseover", function(event, r){
        // console.log(r)
        d3.select("#informazioni").text("Hai selezionato l'elemento con ID: " + r.id)
    })
