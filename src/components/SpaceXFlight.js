import { Component } from "react";
import moment from "moment";

class Flight extends Component{
    render(){
        return(
            <div className="fetched-data" key={this.props.id}>
                <div className="spaceX-img">
                    <img
                        src={this.props.img}
                        alt={this.props.name}
                    />
                </div>
                <div className="info">
                    <h5>{this.props.name}({moment(this.props.year_launch).format("MMM DD,YYYY")})</h5>
                    <h6>{this.props.details}</h6>
                </div>
            </div>
        )
    }
}
export default Flight;