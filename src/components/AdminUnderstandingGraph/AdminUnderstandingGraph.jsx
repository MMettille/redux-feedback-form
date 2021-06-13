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
    
    const chart = am4core.create("chartdiv", am4charts.XYChart);
    return(
        <>
        
        </>
    )
}

export default AdminUnderstandingGraph;