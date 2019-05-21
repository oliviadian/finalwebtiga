import React, {Component} from 'react';
import { Row,Col,Typography,List } from 'antd';
import {Menu, Icon} from 'antd';
import {Card} from 'antd';
import { Progress } from 'antd';
import { Carousel } from 'antd';
import '../Slide.css';
import App from '../../App';


const { Title } = Typography;
const data = [
    { name:'Date of birth',icons:'calendar',content:"13 May 1999"},
    { name:'Address',icons:'environment',content:"Surakarta"},
    { name:'Phone',icons:'phone',content:"+62 878-3552-4850"},
    { name:'Email',icons:'mail',content:"oliviadiaan12@gmail.com"},
  ];

  const pertama = [
    { icons:'team',content:"Staff of BEM KM UGM 2017"},
    { icons:'team',content:"Staff of Himakomsi UGM"},
    { icons:'heart',content:"Public Relation of Give Your Heart Community"},
  ];

  const kedua = [
    { icons:'crown',content:"Dirjen PSDM of BEM KM UGM 2018"},
    { icons:'notification',content:"Event Staff of KPUM UGM 2018"},

  ];

  const { Meta } = Card;

class Profile extends Component {
    render() {
        return (

            <Carousel autoplay>
                <div>
                    
                            <Row>
                            <Card style={{  width: '100%', height: '900px' }}>
                                <Col xs={12}>

                                    <Row style={{ margin: '16px 16px' }}>
                                        <Col xs>
                                            <Title><i> Biodata </i></Title>
                                        </Col>
                                        
                                        <List
                                            size="large"
                                            // header={<div>Header</div>}
                                            // footer={<div>Footer</div>}
                                            // bordered
                                            dataSource={data}
                                            renderItem={item => (
                                                <List.Item>
                                                    <Icon type={item.icons} theme="outlined"/> &nbsp;&nbsp;&nbsp;
                                                    <Typography.Text strong>{item.name} : </Typography.Text> {item.content}
                                                </List.Item>
                                            )}
                                        />
                                    </Row>
                                </Col>

                        <Col xs={12}>
                            <Row style={{ margin: '16px 16px' }}>
                                <Col xs>
                                    <Title><i> Experience </i></Title>
                                    </Col>

                                <h3><b>2017</b></h3>
                                <List
                                    size="large"
                                    // header={<div>Header</div>}
                                    // footer={<div>Footer</div>}
                                    // bordered
                                    dataSource={pertama}
                                    renderItem={item => (
                                        <List.Item>
                                            <Icon type={item.icons} theme="outlined"/> &nbsp;&nbsp; &nbsp;
                                            <Typography.Text strong>{item.name} : </Typography.Text> {item.content}
                                        </List.Item>
                                    )}
                                />

                                <h3><b>2018</b></h3>
                                <List
                                    size="large"
                                    // header={<div>Header</div>}
                                    // footer={<div>Footer</div>}
                                    // bordered
                                    dataSource={kedua}
                                    renderItem={item => (
                                        <List.Item>
                                            <Icon type={item.icons} theme="outlined"/> &nbsp;&nbsp;&nbsp;
                                            <Typography.Text strong>{item.name} : </Typography.Text> {item.content}
                                        </List.Item>
                                    )}
                                />
                            </Row>
                        </Col>
                        </Card>
                    </Row>

                </div>

                <div>
            
                 <Card style={{  width: '100%', height: '900px' }}>
                    <Col>
                        <Row style={{ margin: '16px 16px' }}>
                            <Col xs>
                                <Title><i> Experience </i></Title>
                                </Col>

                                <div>
                
                <h4><b>Microsoft</b></h4>
                <Progress
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                percent={80}
                />

                <h4><b>Html</b></h4>
                <Progress
                strokeColor={{
                    from: '#108ee9',
                    to: '#87d068',
                }}
                percent={60}
                status="active"
                />

                <h4><b>PHP</b></h4>
                <Progress
                strokeColor={{
                    from: '#108ee9',
                    to: '#87d068',
                }}
                percent={50}
                status="active"
                />

                <h4><b>C++</b></h4>
                <Progress
                strokeColor={{
                    from: '#108ee9',
                    to: '#87d068',
                }}
                percent={50}
                status="active"
                />

                <h4><b>Photoshop</b></h4>
                <Progress
                strokeColor={{
                    from: '#108ee9',
                    to: '#87d068',
                }}
                percent={60}
                status="active"
                />

                <h4><b>CorelDraw</b></h4>
                <Progress
                strokeColor={{
                    from: '#108ee9',
                    to: '#87d068',
                }}
                percent={60}
                status="active"
                />

            </div>   
                        </Row>
                    </Col>
                </Card>

                </div>

            </Carousel>
        
        );
    }
}

export default Profile;