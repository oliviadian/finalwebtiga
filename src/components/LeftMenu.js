import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom'

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class LeftMenu extends Component {
    constructor(){
        super();
        this.state = {
            menu : [
                {url: '/home',name:'Home',icons:'home'},
                {url: '/profile',name:'Profile',icons:'profile'},
                {url: '/portofolio',name:'Portofolio',icons:'reconciliation'},
                {url: '/contact',name:'Contact',icons:'contacts'},
            ],
        }
    }

    render() {
        return (
            <Menu mode="horizontal">
                {this.state.menu.map((data) => {
                    return(
                        <Menu.Item key={data.name}>
                            <Link to={data.url}>
                                <Icon type={data.icons} theme="outlined"/> {data.name}
                            </Link>
                        </Menu.Item>
                    )
                })}

            </Menu>
        );
    }
}

export default LeftMenu;