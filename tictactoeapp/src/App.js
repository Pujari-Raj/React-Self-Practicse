import {ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Row, Col, Toast } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import Icons from './components/Icons';
import './App.css';

const itemArray = new Array(9).fill("empty");

function App() {

  const [isCross, setIscross] = useState(false); 
  const [message, setMessage] = useState(""); 

  const reloadGame = () => {
    //reload game
    setIscross(false);
    setMessage("");
    itemArray.fill("empty", 0, 9);
  }

 //  checking  winner of the game on different conditions
  const checkIsWinner = () => {   
     if (
      itemArray[0] === itemArray[1] &&  
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setMessage(`${itemArray[0]} won`);
    } 
    else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setMessage(`${itemArray[3]} won`);
    } 
    else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setMessage(`${itemArray[6]} won`);
    } 
    else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setMessage(`${itemArray[0]} won`);
    } 
    else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setMessage(`${itemArray[1]} won`);
    } 
    else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setMessage(`${itemArray[2]} won`);
    } 
    else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setMessage(`${itemArray[0]} won`);
    } 
    else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setMessage(`${itemArray[2]} won`);
    }
  }

  const changeItem = itemNumber => {
    //

    if (message) {
      return toast(message, {type: "success"});
    }

    if (itemArray[itemNumber] === "empty") {
        itemArray[itemNumber] = isCross ? "cross" : "circle"
        setIscross(!isCross);
    }

    else{
      
        message= toast.error('Reload the page');
        // return toast(message='Reload the page',{type: "error"});
    }

    checkIsWinner();
  };

  return (
    <Container className='p-5'>
      <ToastContainer position='bottom-center' />
      <Row>
        <Col md={6} className='offset-md-3'>
          {message ? (
            <div className='mb-2 mt-2'>
              <h1 className='text-success text-uppercase text-center'>
                {message}
              </h1>
              <Button color='success' block onClick={reloadGame}>
                Reload Game
              </Button>
            </div>
          ) : (
            <h1 className='text-center text-warning'>
              {isCross ? "Cross" : "Circle"} turn
            </h1>
          )}
          <div className='grid'>
            {itemArray.map((item, index)  => ( 
              <Card color='warning' onClick={()=> changeItem(index)}>
                <CardBody className='box'>
                  <Icons name={item} key={index} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>     
    </Container>
  );
}

export default App;