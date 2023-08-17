import {createContext, useState} from 'react';
import axios from 'axios';

const DrinksContext = createContext();

const DrinksProvider = ({children}) => {
    const [drinks, setDrinks] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    const getDrink = async drinks => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinks.drinkName}&c=${drinks.category}`;
            const { data } = await axios(url);
            setDrinks(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }

    const handleModalClick = () => {
        setModalShow(!modalShow);
    }

    return(
        <DrinksContext.Provider value={{getDrink, drinks, handleModalClick, modalShow}}>
            {children}
        </DrinksContext.Provider>
    )
}

export {DrinksProvider}

export default DrinksContext;