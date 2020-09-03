import React, {Component} from 'react';

class Result extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'red'
        }
    }
    setStyle(){
        return{
            color : this.props.color,
            borderColor : this.props.color,
            fontSize : this.props.fontSize
        }
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>KẾT QUẢ: Color : {this.props.color} - FontSize : {this.props.fontSize}px</p>
                <div id = "content" style = {this.setStyle()}>Nội dung setting</div>
            </div>
        );
    }
}

export default Result;
