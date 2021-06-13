import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

function AdminUnderstandingGraph() {
    
    const [feedback, setFeedback] = useState([]);
    
    useEffect(() => {
        getFeedback();
    })
        
    const getFeedback = () => {
        axios.get("/feedback")
        .then( (response) => {
            setFeedback(response.data)
        })
        .catch((error) => {
            console.log(`We have a server error`, error);
        });
    }

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

    // ⬇ creating yAxes (the vertical axis)



    return(
        <>
        
        </>
    )
}

export default AdminUnderstandingGraph;