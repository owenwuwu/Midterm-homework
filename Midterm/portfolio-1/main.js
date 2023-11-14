

let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.mode = "markers";
trace1.mode = "scatter";
trace1.x = [];
trace1.y = [];

for(let i=0;i<set1.length;i++){
    trace1.x[i]= set1[i][0];
    trace1.y[i]= set1[i][1];
}
let data = [];    
data.push(trace1);


let layout = {
    margin:{
        t:0
    }
};

Plotly.newPlot(myGraph, data, layout);
Plotly

