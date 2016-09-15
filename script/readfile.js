var sr = new Array;
var xx = new Array;
var done = 0;

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var lines = allText.split("\n");
                for(var i = 0; i < lines.length -1; i++){
                    sr.push(lines[i]);
                    xx.push(i+1);
                }
                done = 1;

            }
        }
    }
    rawFile.send(null);
}


function plotSR(){
    readTextFile('script/sr-armzi');
    var trace1 = {
        x: xx,
        y: sr,
        fill: 'tozeroy',
        type: 'scatter',
        hoverinfo: 'y',
        marker:{
            color: 'rgb(255, 128, 0)'
        }
    };
    var data = [trace1];
    var layout = {
           xaxis: {
            showticklabels: false,
            fixedrange: true},
           yaxis:{
            fixedrange: true,
            range: [2500, 2900]
           }
        };

    Plotly.newPlot('sr_graph',data, layout, {displayModeBar: false});

}

function gen_table(){

    var max = sr.length-10;
    if(max < 0) max = 0;
    for(var i = sr.length-1; i>=max;i--){
        if (sr[i]-sr[i-1] > 0)
            document.write("<tr class=\"success\"><td>"+sr[i]+"</td><td>\+"+(sr[i]-sr[i-1])+"</td></tr>");
        else
            document.write("<tr class=\"danger\"><td>"+sr[i]+"</td><td>"+(sr[i]-sr[i-1])+"</td></tr>");
    }
}
