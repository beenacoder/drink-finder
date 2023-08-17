import { Modal, Image } from 'react-bootstrap';
import useDrinks from '../hooks/useDrinks';


const ModalDrinkRecipe = () => {

    const { modalShow, handleModalClick, recipe } = useDrinks();

    const getIngredients = () => {

    }

    return (
        <Modal show={modalShow} onHide={handleModalClick}>
            <Image src={recipe.strDrinkThumb} alt={recipe.strDrink} className=''/>
            <Modal.Header className=''>
                <Modal.Title>{recipe.strDrink}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='p-3'>
                    <h2>Instructions</h2>
                    <h2>Ingredients and quantities </h2>
                </div>
                {recipe.strInstructions}
                {getIngredients()}
            </Modal.Body>
        </Modal>
    )
}

export default ModalDrinkRecipe