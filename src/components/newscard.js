import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/style.css'

let defaultImageLink = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'

export default function newscard(props) {
    
    return (   
        <Card style={{ width: '25rem' }} className='myCard'>
            { props.imageLink == null? <Card.Img className='myCardImg' variant="top" src={defaultImageLink} /> : <Card.Img className='myCardImg' variant="top" src={props.imageLink} />}
            <Card.Body className='myCardBody'>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.cardText}
            </Card.Text>
            <Button variant="primary" href={props.readLink} target='_blank' rel='noreferrer'>Read more</Button>
            </Card.Body>
        </Card>
    )
}
