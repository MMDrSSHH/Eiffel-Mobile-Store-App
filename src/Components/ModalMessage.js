import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

// Images and icons
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

// Css styles
import styles from './ModalMessage.module.css';

const ModalMessage = ({ show, setShow, Success, message }) => {

    const modalHandler = (value) => {
        setShow(value);
    }

    return (
        <>
            {
                Success ?
                    <Modal
                        show={show}
                        onHide={() => modalHandler(false)}
                        backdrop="static"
                        dialogClassName={styles.modalContainer}
                        centered
                    >
                        <div className={styles.contentContainer}>
                            <CheckCircleOutlinedIcon className={styles.successIcon} />
                            <span className={styles.successMessage}>{message}</span>
                            <span className={styles.redirectMessage}>در حال انتقال به سایت</span>
                        </div>
                    </Modal> :
                    <Modal
                        show={show}
                        onHide={() => modalHandler(false)}
                        dialogClassName={styles.modalContainer}
                        centered
                    >
                        <div className={styles.contentContainer}>
                            <CancelOutlinedIcon className={styles.failureIcon} />
                            <span className={styles.failureMessage}>{message}</span>
                        </div>
                    </Modal>
            }
        </>

    );
}

export default ModalMessage;