import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import React, { useRef, useState, useEffect } from 'react';
import axios from "axios";

function UnderstandingGraph(props) {
    
    const [feedback, setFeedback] = useState('');    

    // ⬇ Creating the chart
    const chart = useRef(null);

    useEffect(() => {
        // ⬇ This calls my get request from the server
        getFeedback();
        // ⬇ This creates the kind of chart that I would like from am4charts
        let x = am4core.create("chartdiv", am4charts.XYChart);
        // ⬇ Padding to the right of the graph
        x.paddingRight =  20;
        // ⬇ This declares what kind of date format I would like.
        x.dateFormatter.dateFormat = "yyyy-MM-dd";
        // ⬇ Adding from the data that I set in the getFeedback function
        let data = dataArray;
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

    // ⬇ This gets my data from the database and sets it to feedback
    const getFeedback = ()  => {
        axios.get('/feedback') 
        .then( (response) => {
            setFeedback(response.data)
        })
        .catch((error) => {
            console.log(`We have a server error`, error);
        });
    }

    //!! Want the graph to render? Cut nearly any line from this page, then the graph will force reload and show. Why?
    //! I have been copy/pasting line 71 to make the graph show.
    //! Interesting though, that when the page loads, I only see one console.log. When I re-paste it, I see two...
    //! It's almost like the computer can't think fast enough to get the data and then come back. Is there an async screen pause?
    console.log('feedback', feedback)
    
    // ⬇ Arrays of the data I will need:
    const dataArray = []
    // ⬇ Loops through feedback 
    for (let i=0; i < feedback.length; i++){
        // ⬇ Checking that I can get the dates that I want - I can!
        // console.log(feedback[i])
        // console.log(feedback[i].date) // Will log the long long date
        // console.log(feedback[i].understanding) // Will log the number

        // ⬇ Makes an object, called data, that I can use to push into the dataArray.
        // Later we will use this to set the data points of the graph.
        let data = {
            "date": feedback[i].date,
            "understanding": feedback[i].understanding
        }
        dataArray.push(data)
    }

    

    return(
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    );
};

export default UnderstandingGraph;
