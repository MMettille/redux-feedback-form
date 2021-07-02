import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import './UnderstandingGraph.css'
import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

function UnderstandingGraph(props) {
  // ⬇ Creating the chart
  const chart = useRef(null);

  useEffect(() => {
    // ⬇ This calls my get request from the server
    getFeedback();
  }, []);

  // ⬇ This gets my data from the database and sets it to feedback
  const getFeedback = () =>
    axios
      .get("/feedback")
      .then((response) => {
        const feedbackData = response.data;

        // ⬇ This creates the kind of chart that I would like from am4charts
        let x = am4core.create("chartdiv", am4charts.XYChart);
        // ⬇ Padding to the right of the graph
        x.paddingRight = 20;
        x.paddingLeft = 20;
        // ⬇ This declares what kind of date format I would like.
        x.dateFormatter.dateFormat = "yyyy-MM-dd";

        // ⬇ Adding from the data that I set in the getFeedback function
        let data = feedbackData
        // ⬇ Making the data tied to the chart, called x.
        x.data = data;
        console.log(data)
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
      })
      .catch((error) => {
        console.log(`We have a server error`, error);
      });

  return <div id="chartdiv"></div>;
}

export default UnderstandingGraph;
