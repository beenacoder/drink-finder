import { Modal, Image } from 'react-bootstrap';
import useDrinks from '../hooks/useDrinks';


const ModalDrinkRecipe = () => {

    const { modalShow, handleModalClick } = useDrinks();

    return (
        <Modal show={modalShow} onHide={handleModalClick} closeButton>
            <Modal.Header closeButton>
                Titulo Modal
            </Modal.Header>
            <Modal.Body>
                Cuerpo Modal
            </Modal.Body>
        </Modal>
    )
}

export default ModalDrinkRecipe