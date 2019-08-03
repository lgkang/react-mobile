import React, {Component} from "react";
import {connect} from "react-redux";

const stateToProps = state => {

};

@connect(stateToProps)
class Home extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div>
                我是主页
            </div>
        );
    }
}

export default Home;
