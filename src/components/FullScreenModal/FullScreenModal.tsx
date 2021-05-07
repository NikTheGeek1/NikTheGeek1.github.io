import { useEffect } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import './FullScreenModal.css';
import ReactDOM from 'react-dom';

const FullScreenModal = ({ children, toggleModal}: {
    toggleModal: () => void,
    children: React.ReactNode
}) => {

    useEffect(() => {
        document.addEventListener("keydown", keyDownHandler);
        return () => document.removeEventListener("keydown", keyDownHandler);
    }, []);

    const keyDownHandler = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            toggleModal();
        }
    };

    document.getElementsByTagName("body")[0].setAttribute("style", "overflow: hidden");
    const targetElement = document.getElementById('full-screen-modal') as HTMLElement;

    const FullScreenModalJSX =  (
        <Backdrop closeModalHandler={toggleModal} >
            <div className="full-screen-modal-container" onClick={e => e.stopPropagation()}>
                <div className="full-screen-modal-x-container" onClick={toggleModal.bind(this, false)}>
                </div>
                    {children}
            </div>
        </Backdrop>
    );

    return ReactDOM.createPortal(FullScreenModalJSX, targetElement);
};

export default FullScreenModal;