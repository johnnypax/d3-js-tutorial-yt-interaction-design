const svg = d3.select("svg");

const circleOne = svg.append("circle")
                    .attr("cx", 500)
                    .attr("cy", 400)
                    .attr("r", 40)
                    .attr("fill", "steelblue")
                    .attr("stroke", "black")
                    .call(
                        d3.drag()
                            .on("start", dragStarted)
                            .on("drag", dragged)
                            .on("end", dragEnd)
                    )

const circleTwo = svg.append("circle")
                    .attr("cx", 540)
                    .attr("cy", 410)
                    .attr("r", 40)
                    .attr("fill", "steelblue")
                    .attr("stroke", "black")
                    .call(
                        d3.drag()
                            .on("start", dragStarted)
                            .on("drag", dragged)
                            .on("end", dragEnd)
                    )

function dragStarted(event, d){
    d3.select(this).raise().attr("fill", "red");
}

function dragged(event, d){
    d3.select(this)
        .attr("cx", event.x)
        .attr("cy", event.y);
}

function dragEnd(event, d){
    d3.select(this).attr("fill", "steelblue");
}