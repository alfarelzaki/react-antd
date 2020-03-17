import React from 'react';
import { Menu } from 'antd';
import { Row, Col, notification, Button, message } from 'antd';
import {
  MailOutlined,
  UserOutlined,
  MessageOutlined,
  PhoneOutlined,
  ShoppingOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const key = 'updatable';

class TopMenu extends React.Component {
  state = {
    profile: 'Masuk',
    current: ''
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  openMessage = () => {
    message.loading({ content: 'Mengambil data diri ...', key });
    setTimeout(() => {
      message.success({ content: 'Sukses Masuk!', key, duration: 2 });
    }, 1000);
  };

  masukAkun = () => {
      this.openMessage()
      this.setState({
          profile: 'Alfarel'
      })
  }

  render(openMessage) {

    return (
        <div className="menu-container">
            <Row justify="space-between">
                <Col span={4}>
                    <h1>Furnitura</h1>
                </Col>
                
                <Col span={8}>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                        <Menu.Item key="produk">
                            <ShoppingOutlined />
                            Produk
                        </Menu.Item>
                        <SubMenu
                            title={
                                <span className="submenu-title-wrapper">
                                <MailOutlined />
                                Hubungi
                                </span>
                            }
                        >
                            <Menu.ItemGroup title="Melalui">
                                <Menu.Item key="setting:1"><MessageOutlined />Telefon</Menu.Item>
                                <Menu.Item key="setting:2"><PhoneOutlined />Pesan</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <Menu.Item key="lokasi">
                            <EnvironmentOutlined />
                            <a href="https://www.google.com/maps/place/Relasi+Co-Working+Space/@-7.7650384,110.3403631,13z/data=!4m8!1m2!2m1!1srelasi!3m4!1s0x2e7a59e8d0df021b:0x9c7d5bfab2f5068b!8m2!3d-7.7581611!4d110.3768733" target="_blank" rel="noopener noreferrer">
                                Lokasi
                            </a>
                        </Menu.Item>
                        <Menu.Item key="profile" onClick={this.masukAkun}>
                            <UserOutlined />
                            {this.state.profile}
                        </Menu.Item>
                    </Menu>                
                </Col>
            </Row>
            
        </div>
    );
  }
}

export default TopMenu