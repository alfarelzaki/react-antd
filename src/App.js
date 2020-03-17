import React from 'react';
import './App.css';

import { 
  Layout,
  Statistic,
  Carousel,
  Row,
  Col,
  Card,
  Button,
  message,
  notification
} from 'antd';

import {
  CheckCircleOutlined,
} from '@ant-design/icons';

import TopMenu from './components/menu';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const key = 'updatable';

const openMessage = () => {
  message.loading({ content: 'Mengambil data diri ...', key });
  setTimeout(() => {
    message.success({ content: 'Sukses!', key, duration: 2 });
  }, 1000);
};

const close = () => {
  console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.',
  );
};

const openNotification = () => {
const key = `open${Date.now()}`;
const btn = (
  <Button type="primary" size="small" onClick={() => notification.close(key)}>
      Confirm
  </Button>
);
  notification.open({
      message: 'Maaf, Furnitura masih belum rilis',
      description:
      'Jika ingin membantu dalam pengembangan Furnitura, hubungi saya dengan mengirim email ke: alfarell.zaki@gmail.com',
      btn,
      key,
      onClose: close,
  });
};

const carauselImage = [
  {
    alt: 'soft chair'
  },
  {
    alt: 'playing table'
  },
  {
    alt: 'chair'
  },
  {
    alt: 'rack'
  },
]

const furnituraPoint = [
  {
    source: 'require("./assets/estetis.jpg")',
    title: 'Minimalis',
    description: 'Kami merancang ruang kerja yang minimalis, sehingga ruang kerja anda akan tetap bersih dan rapi sepanjang waktu'
  },
  {
    source: 'require("./assets/minimalis.jpg")',
    title: 'Nyaman',
    description: 'Perabotan dengan kualitas tinggi dengan peletakan yang pas akan memberikan suasana yang nyaman bagi anda'
  },
  {
    source: 'require("./assets/nyaman.jpg")',
    title: 'Estetis',
    description: 'Tanpa mengenyampingkan fungsionalitas, kami juga mendekor ruang kerja anda sehingga tidak membosankan'
  },
]

class PositionCarouselDemo extends React.Component {
  state = {
    dotPosition: 'bottom',
  };

  render() {

    let containerWide = {
      width: '940px',
      height: '500px',
      objectFit: 'cover'
    }

    let carouselDesc = {
      zIndex: '1',
      fontSize: '40px',
      color: '#ad2102'
    }

    let carouselBlock = {
      background: '#ffe7ba',
      padding: '50px',
      height: '500px'
    }

    return (
      <div>
        <Row>
          <Col span={8} style={carouselBlock}>
            <div className="webText">
              <h1 style={carouselDesc}>Bangun ruang kerjamu dengan Furnitura.</h1>
              <p>Tatanan ruang kerja yang buruk berpotensi menghambat produktivitas anda.</p>
              <p><em><b>Furnitura</b></em> memberikan rancangan ruangan yang estetis dan fungsional
                sehingga memberikan kenyamanan bagi anda untuk beraktivitas.</p>
            </div>
          </Col>

          <Col span={16}>
            <Carousel dotPosition={this.state.dotPosition}>
              {carauselImage.map ((props, index) =>
                <a href='/'>
                  <img style={containerWide} alt={props.alt} src={require(`./assets/furniture${index+1}.jpg`)}></img>
                </a>
              )}
            </Carousel>
          </Col>
        </Row>        
      </div>
    );
  }
}

function App() {
  return (
    <Layout className="layout">
      <Header>
        <TopMenu openMessage={openMessage}/>
      </Header>

      <Content style={{background: '#ffffff',}}>
        <PositionCarouselDemo/>
      </Content>

      <Content style={{padding: '50px 50px 50px 50px', background: '#ffffff'}}>
        <Row gutter={16}>
          <Col span={6}>
            <h1 style={{fontSize: '28px'}}>Kami memberikan yang terbaik untuk anda</h1>
            <p>Kami memiliki beberapa aspek yang kami tonjolkan dalam merancang ruang kerja.
              Beberapa aspek yang kami prioritaskan yaitu</p>
              <Button type="primary" onClick={openNotification}>
                Rancang sekarang
              </Button>
          </Col>
          {furnituraPoint.map ((data, index) =>
            <Col>
              <Card
                hoverable
                style={{ width: 300, }}
                cover={<img style={{ height: 200, objectFit: 'cover' }} alt="example" src={require(`./assets/point${index+1}.jpg`)} />}
              >
                <Meta title={data.title} description={data.description} />
              </Card>
            </Col>
          )}
        </Row>
      </Content>

      <Content style={{padding: '25px 50px', background: '#ffe7ba'}}>
        <Row className="normalRow">
          <Col className="normalCol" span={24} style={{textAlign: 'center'}}>
            <h1>Penilaian kami</h1>
          </Col>
        </Row>
        <Row className="normalRow" justify="center" gutter={24}>
          <Col span={4} className="normalCol">
            <div>
              <Statistic title={"Proyek Selesai"} value={172} prefix={<CheckCircleOutlined />} />
            </div>
          </Col>

          <Col span={4} className="normalCol">
            <div>
              <Statistic title={"Review"} value={4.8} prefix={<CheckCircleOutlined />} suffix="/5"/>
            </div>
          </Col>
        </Row>
      </Content>

      <Footer style={{textAlign: 'center', background:'#ad2102', color: '#ffffff' }}>Furnitura ©2019 Created by Alfarel Zaki</Footer>
    </Layout>
  );
}

export default App;
