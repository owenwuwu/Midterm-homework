let myGraph2 = document.getElementById('myGraph2');
let trace2 = {};
trace2.type = "bar";
trace2.x = [];
trace2.y = [];
for(let i=0;i<counties.length;i++){
trace2.x[i] = counties[i]['name'];
trace2.y[i] = counties[i]['count'];
}
let data2 = [];
data2.push(trace2);
let layout2 = {
margin:{
t:0
}
};
Plotly.newPlot(myGraph2, data2, layout2);