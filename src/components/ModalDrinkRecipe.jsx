import { Modal, Image } from 'react-bootstrap';
import useDrinks from '../hooks/useDrinks';


const ModalDrinkRecipe = () => {

    const { modalShow, handleModalClick, recipe, loading } = useDrinks();

    const getIngredients = () => {
        let ingredients = [];

        for(let i = 1; i < 15; i++) {
            if(recipe[`strIngredient${i}`]){
                ingredients.push(
                        <li >{recipe[`strIngredient${i}`]} - {recipe[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients;
    }

    return (
            <Modal show={modalShow} onHide={handleModalClick}>
                        <Image src={recipe.strDrinkThumb} alt={recipe.strDrink} className=''/>
                        <Modal.Header className=''>
                            <Modal.Title>{recipe.strDrink}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='p-3'>
                                <h3>Ingredients</h3>
                                {getIngredients()}  
                                <hr className='w-25'/>
                                <h4>How to</h4>
                                <p>{recipe.strInstructions}</p>
                            </div>
                        </Modal.Body>
            </Modal>
        ) 
    
}

export default ModalDrinkRecipe