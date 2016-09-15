
readTextFile('test_sr');

var trace1 = {
  x: [1, 2, 3, 4],
  y: [5, 12, 19, 20],
  fill: 'tozeroy',
  type: 'scatter'
};
var data = [trace1];

Plotly.newPlot('myDiv', data);
