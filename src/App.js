import { Component } from "react";
import { Form } from "react-bootstrap";
import spaceX from "./assets/api/spaceX";
import Flight from "./components/SpaceXFlight";


class App extends Component{
    constructor(){
        super()
        this.state = {
            data                :  [],
            Filtered            :  []
        }
    }
    componentDidMount(){
        this.getFlight();
    }
    getFlight(e){
        spaceX.get()
        .then(res => {
            const data = res.data;
            this.setState({ 
                data : data,
                Filtered : data 
            });
        })
    }
    getFlightName(e){
        e.preventDefault()
        let query = this.refs.query.value.toLowerCase()
        if( query !== ""){
            this.setState({
                Filtered: this.state.data.filter(data => data.name.toLowerCase().includes(query) || data.details.toLowerCase().includes(query))
            })
        } else {
            this.setState({
                Filtered: this.state.data
            })
        }
    }
    render(){
        return(
            <div className="main">
                <div className="search-bar">
                    <Form onSubmit={((e)=>{e.preventDefault()})} onChange={this.getFlightName.bind(this)}>
                        <Form.Group controlId="query">
                            <Form.Control type="text" ref="query" placeholder="Enter Keywords" />
                        </Form.Group>
                    </Form>
                </div>
                <div className="SpaceX"> 
                    {
                        this.state.Filtered.map((data,index) => {
                            return(  
                                <Flight 
                                    name={data.name} 
                                    img={data.links.patch.large}
                                    year_launch={data.date_local}
                                    details={data.details}
                                    id={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default App;