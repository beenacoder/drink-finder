import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
    const [drinks, setDrinks] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [drinkId, setDrinkId] = useState('');
    const [recipe, setRecipe] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        const getRecipe = async () => {
            if (!drinkId) return;
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
                const {data} = await axios(url);
                setRecipe(data.drinks[0]);
                console.log(data.drinks[0]);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }

        }
        getRecipe();
    }, [drinkId])


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

    const handleDrinkId = (id) => {
        setDrinkId(id);
    }

    return (
        <DrinksContext.Provider value={{ getDrink, drinks, handleModalClick, modalShow, handleDrinkId, recipe, loading }}>
            {children}
        </DrinksContext.Provider>
    )
}

export { DrinksProvider }

export default DrinksContext;