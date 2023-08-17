import {Col, Card, Button} from 'react-bootstrap';

export const Drink = ({drink}) => {
    return (
        <Col md={6} lg={3} >
            <Card className='mb-4'>
                <Card.Img 
                    variant='top'
                    src={drink.strDrinkThumb} 
                    alt={drink.strDrink}
                />
                <Card.Body>
                    <Card.Title className='text-center' >{drink.strDrink}</Card.Title>
                    <Button variant='danger' className='align-center'>Ver Receta</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}