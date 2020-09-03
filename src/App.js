import React, {Component} from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            color : 'black',
            fontSize : 14
        }
        this.onSettingColor = this.onSettingColor.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.settingDefault = this.settingDefault.bind(this)
    }
    onSettingColor(param){
        // console.log(param);
        this.setState({
            color: param
        })
    }
    onChangeSize(param){
        // console.log(param)
        if (this.state.fontSize + param >= 8  && this.state.fontSize + param <= 36){
            this.setState({
                fontSize : this.state.fontSize+param
            })
        }
    }
    settingDefault(value){
        if(value){
            this.setState({
                color : 'black',
                fontSize : 14
            })
        }
    }
    render() {
        return (
            <div className="container mt-50">
                <div className="row">
                    <ColorPicker color = {this.state.color} onReceiveColor = {this.onSettingColor}/>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting fontSize = {this.state.fontSize} onReceiveSize = {this.onChangeSize}/>
                        <Reset onSettingDefault = {this.settingDefault}/>
                    </div>
                    <Result color = {this.state.color} fontSize = {this.state.fontSize}/>
                </div>
            </div>
        );
    }
}

export default App;
