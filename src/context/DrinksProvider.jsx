import {useState, useEffect, createContext} from 'react';
import axios from 'axios';

const DrinksContext = createContext();

const DrinksProvider = ({children}) => {
    const [drinks, setDrinks] = useState([]);





    return(
        <DrinksContext.Provider value={{}}>
            {children}
        </DrinksContext.Provider>
    )
}

export {DrinksProvider}

export default DrinksContext;