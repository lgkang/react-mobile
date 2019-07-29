import React, {PureComponent} from "react";
import "./index.scss";
import classNames from "classnames";
import {withRouter} from "react-router-dom";

@withRouter
class Tarbar extends PureComponent {
    state = {
        config: [{
            normal: require("../../assets/images/index_none.png"),
            active: require("../../assets/images/index_active.png"),
            path: "/home",
            text: "首页",
        }, {
            normal: require("../../assets/images/more_none.png"),
            active: require("../../assets/images/more_active.png"),
            path: "/more",
            text: "拍照",
        }, {
            normal: require("../../assets/images/order_none.png"),
            active: require("../../assets/images/order_active.png"),
            path: "/order",
            text: "订单",
        }, {
            normal: require("../../assets/images/mine_none.png"),
            active: require("../../assets/images/mine_active.png"),
            path: "/mine",
            text: "我的",
        }],
    };

    handleTabBarClick({path}) {
        const {push} = this.props.history;
        push(path);
    }

    render() {
        const {pathname} = this.props.history.location;
        return (
            <div id="tabbar">
                {
                    this.state.config.map(item => {
                        return <div className="item" key={item.path} onClick={() => this.handleTabBarClick(item)}>
                            <img src={pathname === item.path ? item.active : item.normal} className="icon"/>
                            <span className={classNames({"active": pathname === item.path})}>{item.text}</span>
                        </div>;
                    })
                }
            </div>
        );
    }
}

export default Tarbar;
