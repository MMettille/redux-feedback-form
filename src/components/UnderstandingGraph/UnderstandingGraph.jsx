import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import axios from "axios";

function UnderstandingGraph(props) {
    
    const [feedback, setFeedback] = useState('');    
    // ⬇ This gets my data from the database and sets it to feedback
    const getFeedback = () => {
        axios.get('/feedback') //OMFG IS IT BECAUSE OF DOUBLE QUOTES????
        .then( (response) => {
            setFeedback(response.data)
            // my understanding, then is that I cannot console.log feedback here? Maybe because
            // I am still in the function?
            //TODO ASK DANE!!!
        })
        .catch((error) => {
            console.log(`We have a server error`, error);
        });
    }

    console.log('feedback', feedback)
    
    // ⬇ Arrays of the data I will need:
    const dataArray = []
    // ⬇ Loops through feedback 
    for (let i=0; i < feedback.length; i++){
        // ⬇ Checking that I can get the dates that I want:
        // console.log(feedback[i])
        // console.log(feedback[i].date) // Will log the long long date
        // console.log(feedback[i].understanding) // Will log the number
    
        // ⬇ This pairs down my date data?
        let date = new Date('feedback[i].date');
        let formatOptions = {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
            hour: false,
            minute: false,
            hour12: false
        }
        let dateString = date.toLocaleDateString('en-US', formatOptions);
        console.log(dateString)

        let data = {
            "date": feedback[i].date,
            "understanding": feedback[i].understanding
        }
        dataArray.push(data)
    }

    // ⬇ Creating the chart
    const chart = useRef(null);

    useLayoutEffect(() => {
        getFeedback()
    let x = am4core.create("chartdiv", am4charts.XYChart);
    // ⬇ Padding to the right of the graph
    x.paddingRight =  20;
    x.dateFormatter.dateFormat = "yyyy-MM-dd";
    // ⬇ Adding data

    let data = dataArray;

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

    // ⬇ Something here?
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