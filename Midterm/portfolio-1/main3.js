let myGraph3 = document.getElementById('myGraph3');
let trace3 = {};
trace3.type = "pie";
trace3.title = "新北市三大年齡層比例";
trace3.labels = [];
trace3.values = [];
trace3.domain = {
    row:0,
    column:0
    };
for(let x=0; x<evaluation_ratio.length; x++){
trace3.labels[x] = evaluation_ratio[x]['name'];
trace3.values[x] = evaluation_ratio[x]['count'];
}

let trace32 = {};
trace32.type = "pie";
trace32.title = "新北市男女比例";
trace32.labels = [];
trace32.values = [];
trace32.domain = {
row: 0,
column: 1
};
for (let x = 0; x < evaluation_ratio_2.length; x++) {
trace32.labels[x] = evaluation_ratio_2[x]['name'];
trace32.values[x] = evaluation_ratio_2[x]['count'];
}
let data3 = [];
data3.push(trace3);
data3.push(trace32);

let layout3 = {
margin:{
t:10,
l:0,
},
grid:{
rows:1,
columns:2
}
};
Plotly.newPlot(myGraph3, data3, layout3);