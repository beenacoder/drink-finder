import {Col, Card, Button} from 'react-bootstrap';
import useDrinks from '../hooks/useDrinks';


export const Drink = ({drink}) => {
    const { handleModalClick, handleDrinkId } = useDrinks();
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
                    <Button 
                        variant='danger' 
                        className='w-100 text-uppercase mt-3' 
                        onClick={() => { 
                            handleModalClick(), 
                            handleDrinkId(drink.idDrink)
                        }}
                        >
                            Ver Receta
                        </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}