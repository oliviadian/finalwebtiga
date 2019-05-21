import React, {Component} from 'react';
import { Row,Col,Typography,List } from 'antd';
import {Menu, Icon} from 'antd';
import { Card, Avatar } from 'antd';
import Instagram from './instagram.png';
import line from './line.png';
import twitter from './twitter.png';
import linkedin from './linkedin.png';
import { Button, Radio} from 'antd';


const { Meta } = Card;
const { Title } = Typography;
const data = [
    { name:'Address',icons:'environment',content:"Surakarta"},
    { name:'Phone',icons:'phone',content:"+62 878-3552-4850"},
    { name:'Email',icons:'mail',content:"oliviadiaan12@gmail.com"},
  ];

  
class Contact extends Component {
    state = {
        size: 'large',
      };
    
      handleSizeChange = e => {
        this.setState({ size: e.target.value });
      };
    
     
    render() {
        const size = this.state.size;
        return (
            <div>
                 <Row>
                 <h2>Contact</h2>
                    <hr/>
                    <br/>
                 
                        <Row style={{ margin: '16px 16px' }}>
                            <Col xs><Title style={{textAlign:"center"}}><i>Feel free to contact me!</i></Title></Col>
                            <List
                                size="large"
                                // header={<div>Header</div>}
                                // footer={<div>Footer</div>}
                                // bordered
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <Icon type={item.icons} theme="outlined"/> &nbsp;&nbsp; &nbsp;
                                        <Typography.Text strong>{item.name} : </Typography.Text> {item.content}
                                    </List.Item>
                                )}
                            />
                        </Row>
                  
            <Col xs><Title style={{textAlign:"center"}}><i>Social Media Apps</i></Title></Col>
            
             <Row gutter={24}>
                <Col span={6} ><Card
                            style={{ width: 220, height: 218 }}
                            cover={
                                <img justify="center" alt="example" src={Instagram} style={{width:'25%', marginRight: -102, marginLeft:82, marginTop:36}}/>
                            }
                            // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                            >
                            <Meta 
                            style={{textAlign:"center"}} title="Instagram"
                           /> 
                            <Button href="https://www.instagram.com/oliviabadawy/"type="primary" style={{paddingLeft:25, paddingRight:25, marginTop:23, marginLeft:29}} size={size} ghost> Visit me </Button>
                            
                        </Card>,
                </Col>
                <Col span={6} ><Card className="ant-col-6"
                            style={{width: 220, height: 218 }}
                            cover={
                                <img alt="example" src={line} style={{width:'25%', marginRight: -102, marginLeft:82, marginTop:36}}/>
                            }
                            >
                            <Meta
                            style={{textAlign:"center"}} title="Line"
                            />
                             <Button href="http://line.me/ti/p/oliviadianp" type="primary" style={{paddingLeft:25, paddingRight:25, marginTop:23, marginLeft:29}} size={size} ghost> Visit me </Button>
                        </Card>,
                </Col>
                <Col span={6} ><Card
                            style={{ width: 220, height: 218 }}
                            cover={
                                <img alt="example" src={twitter} style={{width:'25%', marginRight: -102, marginLeft:82, marginTop:36}}/>
                            }
                            >
                            <Meta
                            style={{textAlign:"center"}} title="Twitter"
                            />
                             <Button href="https://twitter.com/oliviadianprtw" type="primary" style={{paddingLeft:25, paddingRight:25, marginTop:23, marginLeft:29}} size={size} ghost> Visit me </Button>
                        </Card>,
                </Col>
                <Col span={6} ><Card
                            style={{ width: 220, height: 218 }}
                            cover={
                                <img alt="example" src={linkedin} style={{width:'25%', marginRight: -102, marginLeft:82, marginTop:36}}/>
                            }
                           >
                            <Meta
                            style={{textAlign:"center"}} title="Linkedin"
                             />
                              <Button href="https://www.linkedin.com/in/olivia-dian-b16108185/"type="primary" style={{paddingLeft:25, paddingRight:25, marginTop:23, marginLeft:29}} size={size} ghost> Visit me </Button>
                        </Card>,
                </Col>
            </Row>
        </Row>
            </div>
        );
    }
}

export default Contact;