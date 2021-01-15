// Load google charts
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['HTML', 9],
        ['CSS', 8],
        ['JAVASCRIPT', 6],
        ['PHP', 5],
        ['JQUERY', 4]
        
    ]);

    // Optional; add a title and set the width and height of the chart
    var options = { 'title': 'Heres a piechart representation', 'width': 550, 'height': 400 };

    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
}