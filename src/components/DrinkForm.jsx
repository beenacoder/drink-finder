import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import useCategories from '../hooks/useCategories';
import useDrinks from '../hooks/useDrinks';
import { useState } from 'react';

const DrinkForm = () => {
    const [search, setSearch] = useState({
        drinkName: '',
        category:''
    });
    const [alert, setAlert] = useState ('');


    const {categories} = useCategories();
    const {getDrink} = useDrinks();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.values(search).includes('')) {
            setAlert("Todos los campos son obligatorios");
            return;
        }
        setAlert('');
        getDrink(search);
    }

    return (
        <Form onSubmit={handleSubmit}>
            {alert && <Alert variant='danger' className='text-center'>{alert}</Alert>}
            <Row>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='drink' className='fs-5'>Drink Name</Form.Label>
                        <Form.Control 
                            id='drink'
                            type="text"
                            placeholder='Ex.: Tequila, Daikiri...'
                            name="drinkName"
                            value={search.drinkName}
                            onChange = {e => setSearch({
                                ...search,
                                [e.target.name]: e.target.value
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='category' className='fs-5'>Categories</Form.Label>
                        <Form.Select id="category" name='category'
                             value={search.category}
                             onChange = {e => setSearch({
                                 ...search,
                                 [e.target.name]: e.target.value
                             })}
                        >
                            <option>- Select a category -</option>  
                            {categories.map(category => (
                                <option 
                                    key= {category.strCategory}
                                    value= {category.strCategory}
                                >{category.strCategory}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            
            <Row className="justify-content-center">
                <Col md={3}>
                    <Button
                        variant='danger'
                        className='text-uppercase w-100 mt-3'
                        type='submit'                     
                    >
                        Search Drink</Button>                    
                </Col>
            </Row>
        </Form>
  )
}

export default DrinkForm