import React, {Component} from 'react';

class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors : ['black', 'red', 'green', 'blue', '#ccc', '#3366ff', '#00cc99', '#ccff66', '#ccccff',]
        }
    }
    showColor(color) {
        // console.log(this.props.color);
        return {
            backgroundColor: color
        }
    }
    setActiveColor(color){
        this.props.onReceiveColor(color);
    }

    render() {
        var elmColors = this.state.colors.map((color, index) => {
            return <span 
                key = {index} 
                style = {this.showColor(color)}
                className = {this.props.color === color ? 'active' : ''}
                onClick = { () => this.setActiveColor(color)}
            ></span>
        })
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h4 className="panel-title">Color Picker</h4>
                    </div>
                    <div className="panel-body">
                        { elmColors }
                        <hr/>
                    </div>  
                </div>
            </div>
        );
    }
}

export default ColorPicker;
