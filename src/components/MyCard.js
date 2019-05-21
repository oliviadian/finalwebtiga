import React from 'react';
import { Card, Icon, Avatar } from 'antd';
import { Row,Col,Typography,List } from 'antd';
import { Button, Radio} from 'antd';


const { Meta } = Card;

class MyCard extends React.Component{
    state = {
        size: 'large',
      };
    
      handleSizeChange = e => {
        this.setState({ size: e.target.value });
      };
    
    render() {
        const size = this.state.size;
        return(

        <Row gutter={24}>
        <Col span={6} > 
        <Card
                style={{width: 240, height:  290 , paddingLeft:12, paddingRight:12, paddingTop:5}}
                cover={
                    <img  alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                }
               
            >
                <Meta
                    style={{textAlign:"center"}}
                    title="My Garage"
                />
                 <Button href="https://www.figma.com/file/ES0nrjMkc9B6fi5l6AF03C7p/MyGarage?node-id=0%3A1" type="primary" style={{paddingLeft:25, paddingRight:25, marginTop:23, marginLeft:29}} size={size} ghost> Visit me </Button>
            </Card>
        </Col>
        <Col span={6} >
        <Card
                style={{width: 240, height:  290 , paddingLeft:12, paddingRight:12, paddingTop:5 }}
                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
               
            >
                <Meta
                    style={{textAlign:"center"}}
                    title="Event Pride"
                />
                 <Button href="https://www.figma.com/file/ZXstmfWhu6ifRb269BV8vWts/Eventpride" type="primary" style={{paddingLeft:25, paddingRight:25, marginTop:23, marginLeft:29}} size={size} ghost> Visit me </Button>
            </Card>
        </Col>

        <Col span={6} >
        <Card
                style={{ width: 240, height:  290 , paddingLeft:12, paddingRight:12 , paddingTop:5 }}
                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                
            >
                <Meta
                    style={{textAlign:"center"}}
                    title="Github"
                   
                />
                 <Button href="https://github.com/oliviadian" type="primary" style={{paddingLeft:20, paddingRight:25, marginTop:25, marginLeft:29}} size={size} ghost> Visit me </Button>
            </Card>
        </Col>

        <Col span={6} >
        <Card
                style={{width: 240, height:  290  , paddingLeft:12, paddingRight:12, paddingTop:5 }}
                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
               
            >
                <Meta
                    style={{textAlign:"center"}}
                    title="Blog"
                    
                />
                 <Button href="https://oliviadian1305.blogspot.com/" type="primary" style={{paddingLeft:25, paddingRight:25, marginTop:23, marginLeft:29}} size={size} ghost> Visit me </Button>
            </Card>
        </Col>
        </Row>

        );
    }
}

export default MyCard;