import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import React, { useRef, useState, useEffect } from 'react';

function UnderstandingGraph(props) {

    // ⬇ Creating the chart
    const chart = useRef(null);

    useEffect(() => {
        // ⬇ This creates the kind of chart that I would like from am4charts
        let x = am4core.create("chartdiv", am4charts.XYChart);
        // ⬇ Padding to the right of the graph
        x.paddingRight =  20;
        // ⬇ This declares what kind of date format I would like.
        x.dateFormatter.dateFormat = "yyyy-MM-dd";
        // ⬇ Adding from the data that I set in the getFeedback function
        // ⬇ Adding data
        let data = [{
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
            "date": "06/02/2021",
            "understanding": 3
        }, {
            "date": "06/03/2021",
            "understanding": 1
        }, {
            "date": "06/04/2021",
            "understanding": 2
        }];
        // ⬇ Making the data tied to the chart, called x.
        x.data = data;
        // ⬇ creating xAxes (the horizontal axis)
        let dateAxis = x.xAxes.push(new am4charts.DateAxis());
        // dateAxis.title.text = "Date";
        dateAxis.renderer.grid.template.location = 0;
        // ⬇ creating yAxes (the vertical axis)
        let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;
        // ⬇ Creating the series for a line graph
        let series = x.series.push(new am4charts.LineSeries());
        // ⬇ Binding the data to the series
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "understanding";
        series.tooltipText = "{valueY.value}";
        x.cursor = new am4charts.XYCursor();
        // ⬇ Scrollbar functionality at the top of the graph
        let scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(series);
        x.scrollbarX = scrollbarX;

        chart.current = x;
        
        return () => {
            x.dispose();
        };
    }, []);

    return(
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    );
};

export default UnderstandingGraph;