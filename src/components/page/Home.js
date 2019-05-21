import React from 'react'
import { Row,Col,Typography,List } from 'antd';
import { Card, Icon, Avatar } from 'antd';
import Picture from './picture.jpg';
import { Carousel } from 'antd';
import '../Slide.css';

const { Meta } = Card;
const { Title } = Typography;
  
class Home extends React.Component{       
    render(){
        return(

    
                    <div>
                        <h2>Home</h2>
                        <hr/>
                        <br/>
                        <Row>
                            <Col xs={12}>
                                 <Avatar size={400}  src={Picture} style={{align:'center', marginTop:'80px'}}/>
                            </Col>
                       

                         <Col xs={12} style={{marginTop:'170px'}}>
                         <Title><i> Hi! Here is Olivia Dian</i></Title>
                            <h1>"</h1>
                            <h3><i> A girl who always feel less and love to learn the new things. </i></h3>
                            <h3><i> Love to play, share, and disscuss. </i></h3>
                            <h1>"</h1>
                        </Col>
                        </Row>
                    </div>

                
           

            );         
        
    }
}

export default Home;