import {useState, useEffect, createContext} from 'react';
import axios from 'axios';
const CategoriesContext = createContext();

const CategoriesProvider = ({children}) => {
    const [categories, setCategories] = useState([]);

    const getCategory = async () => {
        try {
            const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
            const { data } = await axios(url);
            setCategories(data.drinks)
        } 
        catch (error) {
            console.log("Error")
        }
    } 

    useEffect(() => {
        getCategory();
    }, [])



    return(
        <CategoriesContext.Provider value={{categories}}>
            {children}
        </CategoriesContext.Provider>
    )
}

export {CategoriesProvider}

export default CategoriesContext