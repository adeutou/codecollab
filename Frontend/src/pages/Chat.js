import React from 'react'
import {Container,Row,Col } from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import NavigationL from '../components/NavigationL'
import MessageForm from '../components/MessageForm'
import './chat.css'
function Chat() {
  return (
    <div>
      <NavigationL />
      <Container className='con'> 
        <Row>
          <Col style={{ color: "   rgb(114, 175, 244) " }} md={3}>
            <Sidebar className='slide' />
          </Col>
          <Col md={9}>
            <MessageForm />
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default Chat