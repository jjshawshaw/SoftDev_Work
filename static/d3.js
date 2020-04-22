var rendered = false;
var index = 0;
const category= ["Year", "Score", "Title"];

//returns hex color corresponding to score (red -> green gradient)
var color = function(x){
  rgb = [];
  if (x <= 50){
    rgb = [255, Math.floor(x * 5.1), 0]
  } else {
    rgb = [255 - Math.floor((x - 50) * 5.1), 255, 0]
  }
  s = rgb.map(function(x){
    x = parseInt(x).toString(16);
    return (x.length==1) ? "0"+x : x;
  })
  return "#" + s.join('')
}

//display the chart
var render = function() {
  if (!rendered){
    console.log(data);

    const div = d3.create("div")

    //only take 10 data points
    var chartdata;
    if (index+10 >= data.length){
      chartdata = data.slice(index, data.length);
    } else {
      chartdata = data.slice(index, index+10);
    }

    //create a div to place bars
    d3.select("#chart")
      .append("div")
        .attr("id", "bars")

    //create bars
    d3.select("#bars").selectAll(".div")
      .data(chartdata)
      .join("div")
        .style("background", d => `${color(d.Score)}`) //assign color based on score
        .style("padding", "3px")
        .style("margin", "1px")
        .style("margin-top", "20px")
        .style("width", "85px")
        .style("float", "left")
        .style("text-align", "center")
        .style("height", "350px")
        .style("position", "relative")
        .attr("id", "bar")
        .text(d => d.Title)
        .transition() //animate the bars going to height
          .duration(1000)
          .style("height", d => `${(d.Score)* 6}px`) //assign heigh based on score

    //add score text on the bottom
    d3.selectAll("#bar")
      .append("div")
        .text(d => d.Score)
        .style("bottom", "0px")
        .style("position", "absolute")
        .style("text-align", "center")
        .style("width", "85px")

    //show years above
    d3.selectAll("#bar")
      .append("div")
        .text(d => d.Year)
        .style("top", "-20px")
        .style("position", "absolute")
        .style("text-align", "center")
        .style("width", "85px")



    rendered = true;
  }
};

var transition = function() {
  if(rendered){
    d3.select("#chart").selectAll("*").remove();
    rendered = false;
    //shift the index to see the next 10 entries
    if (index + 10 < data.length){
      index += 10;
    } else {
      index = 0;
    }
    render();
  }
};



d3.select("#render").on("click", render);
d3.select("#transition").on("click", transition);
