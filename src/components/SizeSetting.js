import React, {Component} from 'react';

class SizeSetting extends Component {
    changeSize(size){
        // console.log(size);
        this.props.onReceiveSize(size);
    }
    render() {
        return (
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h4 className="panel-title">Size : {this.props.fontSize}px</h4>
                    </div>
                    <div className="panel-body">
                        <button type="button" className="btn btn-success" onClick = { () => {this.changeSize(-2)}}>Giảm</button>&nbsp;
                        <button type="button" className="btn btn-success" onClick = { () => {this.changeSize(2)}}>Tăng</button>
                    </div>
                </div>
        );
    }
}

export default SizeSetting;
