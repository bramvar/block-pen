import React, { useState, useRef } from 'react'
import GeneModal from './practice/GeneModal'
import styled from 'styled-components';
import ImageData from '../data/ImageData';
import { Container, Col, Form, Row } from 'react-bootstrap';




export default function PracticeOpView() {

    const [estadoModal1, cambiarEstadoModal1] = useState(false);
    const [currentImg, setImg] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setminutes] = useState(0);
    const [minutesLimit, setLimitMM] = useState(0);
    const [secondsLimit, setLimitSS] = useState(0);
    const [playStop, setplaystop] = useState("m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z");
    const intervalid = useRef()
    const isStop = useRef(true)
    const isrunnig = useRef(false);
    const counter =useRef(0);
    const ciclo =useRef(0);
    const counterImg =useRef(0);
    //let isStop= true;

    const changeImg = () => {
        if (!isrunnig.current) {
            isrunnig.current=!isrunnig.current;
            intervalid.current = setInterval(() => {
                ciclo.current++
                let limit = parseInt(minutesLimit * 60) + parseInt(secondsLimit)
                if (limit < ciclo.current) {
                    if (counterImg.current < ImageData.length - 1) {
                        setImg(prev => prev + 1)
                        counterImg.current++
                        ciclo.current = 1
                        counter.current = 0
                        setSeconds(0)
                        setminutes(0)
                    } else {
                        finishPractice()
                        counter.current--
                    }
                }
                counter.current++
                if (counter.current === 60) {
                    counter.current = 0
                    setSeconds(0)
                    increaseMinutes()
                } else {
                    setSeconds(counter.current)
                }


            }, 200);
        }
    }
    const stoppractice=()=>{
        clearInterval(intervalid.current)
        isrunnig.current=!isrunnig.current
        intervalid.current=0
    }
    const finishPractice = () => {
        clearInterval(intervalid.current)
        isrunnig.current=!isrunnig.current
        setplaystop("m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z")
        isStop.current=!isStop.current;
        intervalid.current=0
        counter.current=0
        ciclo.current=0
        counterImg.current=0
        setminutes(0)
        setSeconds(0)
        setImg(0)
        console.log(counter.current)
        console.log(ciclo.current)
        console.log(counterImg.current)
    }
    const increaseMinutes = () => {
        setminutes(prev => prev + 1)
    }
    const startPractice = () => {
        if (secondsLimit !== 0) {
            cambiarEstadoModal1(!estadoModal1)
        } else {
            alert("Por favor seleccione un tiempo de ejecución")
        }
    }
    const playpractices=()=>{
        if(isStop.current){
            setplaystop("M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z")
            changeImg()
            isStop.current=!isStop.current;
            
        }
        else{
            setplaystop("m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z")
            stoppractice()
            isStop.current=!isStop.current;
        }

    }
    const closeModal= ()=>{
        cambiarEstadoModal1(!estadoModal1)
        finishPractice()
    }
    
    return (
        <div style={{display:'flex'}}>
            <ContainerColletion>
                barra de colleciones
            </ContainerColletion>
            <ContainerGalleryCounter>
            <Boton onClick={() => startPractice()}>Empezar</Boton>
            <Container style={{ width: '200px' }}>
                <Row style={{ alignItems: 'center' }}>
                    <Col style={{ paddingRight: '5px', paddingLeft: '5px; ' }}>
                        <Form.Control id style={{ textAlign: 'center' }} placeholder="mm" type="number" max="10" min="0"
                            onChange={event => setLimitMM(event.target.value)} />
                    </Col>
                    :
                    <Col style={{ paddingRight: '5px', paddingLeft: '5px; ' }}>
                        <Form.Control style={{ textAlign: 'center' }} placeholder="ss" type="number" max="59" min="1"
                            onChange={event => setLimitSS(event.target.value)} />
                    </Col>
                </Row>
            </Container>
            </ContainerGalleryCounter>
            <GeneModal
                estado={estadoModal1}
                cambiarEstado={closeModal}
                titulo="time"
                mostrarHeader={false}
                mostrarOverlay={true}
                posicionModal={'center'}
                padding={'5px'}
            >
                <Contenido>
                    <Container>
                        <Row className="justify-content-md-center" style={{ display: 'grid' }}>
                            <Col xs={6} lg={2}><p>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</p></Col>
                        </Row>
                        <Row className="justify-content-md-center" style={{ display: 'grid' }}>
                            <Col xs={12} lg={8}><img src={"/image/" + ImageData[currentImg]} /></Col>
                        </Row>
                        <Row className="justify-content-md-center" style={{ display: 'grid' }}>
                            <Col xs={6} lg={2} onClick={playpractices} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-play-fill" viewBox="0 0 16 16 " style={{marginTop:'10px' }} >
                                    <path d={playStop} />
                                </svg> 
                            </Col>
                        </Row>
                    </Container>
                </Contenido>
            </GeneModal>
        </div>
    )
}

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;
const Contenido = styled.div`
	display: flex;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
        background: #605959;
        width: 80px;
        text-align: center;
        color: white;
	}
	img {
        height: 500px;
        border-radius: 3px;
	}
    height: 100%;
`;
const ContainerColletion = styled.div`
	boder: 10px solid rgb(70,69,69);
    background: white;
    width: 50%;
    height: 500px;
    margin: 5px;
`;
const ContainerGalleryCounter = styled.div`
	
`;