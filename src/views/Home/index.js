import React, {Component} from "react";
import {connect} from "react-redux";
import Tabbar from "../tabbar/index";
import {photoRecord} from "@/actions/home";

const stateToProps = state => {
    const {home} = state;
    return {
        record: home.record
    };
};

@connect(stateToProps, {photoRecord})
class Home extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.photoRecord();
    }

    render() {
        return (
            <div>
                <Tabbar/>
            </div>
        );
    }
}

export default Home;
