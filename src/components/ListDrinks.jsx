import { Row } from "react-bootstrap";
import useDrinks from "../hooks/useDrinks"
import { Drink } from "./Drink";


export const ListDrinks = () => {

    const {drinks} = useDrinks();
    return (
            <Row className='mt-4'>
                {drinks.map(drink => (
                    <Drink key={drink.idDrink} drink={drink}/>
                ))}
            </Row>
    )
}

