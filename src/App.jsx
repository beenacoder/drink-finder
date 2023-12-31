import {Container} from 'react-bootstrap';
import DrinkForm from './components/DrinkForm';
import { CategoriesProvider } from './context/CategoriesProvider';
import { DrinksProvider } from './context/DrinksProvider';
import { ListDrinks } from './components/ListDrinks';
import ModalDrinkRecipe from './components/ModalDrinkRecipe';



function App() {


    return (
        <CategoriesProvider>
            <DrinksProvider>
                <header className="py-5">
                    <h1>Drink Finder</h1>
                </header>
                <Container className='mt-5 background' >
                    <DrinkForm />
                    <ListDrinks />
                    <ModalDrinkRecipe />
                </Container>
            </DrinksProvider>
        </CategoriesProvider>
    )
}

export default App
