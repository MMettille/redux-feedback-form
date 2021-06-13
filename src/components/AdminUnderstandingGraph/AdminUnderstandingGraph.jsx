import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

function AdminUnderstandingGraph() {
    
    // ⬇ Creating the chart
    const chart = am4core.create("chartdiv", am4charts.XYChart);

    // ⬇ Adding data
    chart.data = [{
        "date": "05/21/2021",
        "understanding": 5
    }, {
        "date": "05/24/2021",
        "understanding": 5
    }, {
        "date": "05/25/2021",
        "understanding": 3
    }, {
        "date": "05/26/2021",
        "understanding": 2
    }, {
        "date": "05/27/2021",
        "understanding": 3
    }, {
        "date": "05/28/2021",
        "understanding": 4
    }, {
        "date": "05/31/2021",
        "understanding": 5
    }, {
        "date": "06/01/2021",
        "understanding": 2
    }, {
        "date": "05/02/2021",
        "understanding": 3
    }, {
        "date": "05/03/2021",
        "understanding": 1
    }, {
        "date": "05/04/2021",
        "understanding": 2
    }]

    // ⬇ creating xAxes (the horizontal axis)
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.title.text = "Date";
    // ⬇ creating yAxes (the vertical axis)
    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "understanding"
    categoryAxis.title.text = "Understanding";
    // ⬇ Creating the series for a line graph
    const series = chart.series.push(new am4charts.LineSeries());
    series.stroke = am4core.color("#ff0000");
    series.strokeWidth = 3;
    // ⬇ Binding the data to the series
    series.dataFields.valueY = "understanding";
    series.dataFields.dateX = "date"

    // ⬇ Something here?
    series.tensionX = 0.8;
    series.bullets.push(new am4charts.CircleBullet());


    return(
        <>
        {chart}
        </>
    )
}

export default AdminUnderstandingGraph;