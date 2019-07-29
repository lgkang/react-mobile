import React, {Component} from "react";
import {connect} from "react-redux";
import Tabbar from "../tabbar/index";

class Order extends Component {
    render() {
        return (
            <div>
                <Tabbar/>
            </div>
        );
    }
}

export default Order;
