import React, {Component} from "react";
import {connect} from "react-redux";
import {Button, Modal} from "antd-mobile";

const stateToProps = state => {
    return {};
};

@connect(stateToProps)
class Home extends Component {
    componentDidMount() {
    }

    render() {
        const alert = Modal.alert;
        const showAlert = () => {
            alert("Delete", "Are you sure???", [
                {text: "Cancel", onPress: () => console.log("cancel"), style: "default"},
                {text: "OK", onPress: () => console.log("ok")},
            ]);
        };
        return (
            <div>
                <Button type="primary" onClick={showAlert}>你好</Button>
            </div>
        );
    };
}

export default Home;
