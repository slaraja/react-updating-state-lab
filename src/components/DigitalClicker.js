import React from "react";

class DigitalClicker extends React.Component {

    constructor() {
        super();
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        let newClick = this.state.timesClicked + 1;
        this.setState({
            timesClicked: newClick,
        })

    }

    render() {
        return (
            <div>
              <p> {this.state.timesClicked} </p>
              <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }

}

export default DigitalClicker