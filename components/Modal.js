import React from 'react';
import styles from './modal.module.css'
const Modal = (props) => {
    if(!props.show){
        return null
    }
    return (
        <div className={styles.modal} onClick={props.onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()} >
                <div className={styles.modalHeader}>
                    <h4 className={styles.modalTitle}>{props.title}</h4>
                </div>
                <div className={styles.modalBody}>
                    {props.body}
                </div>
                <div className={styles.modalFooter}>
                    <button onClick={props.onClose} className="button">Close</button>
                </div>
            </div>
        </div>
    )
}


export default Modal;