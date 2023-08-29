import React, { useState } from 'react';
import "./CustomModal.css";
import { useSelector } from 'react-redux';

const CustomModal = ({ id }) => {
    const selectedData = useSelector(((state) => state.app.users.data));
    const filterdData = selectedData.filter((el) => el.id === id);
    const [showModal, setShowModal] = useState(true);
    const handleImageClick = () => {
        setShowModal(false);
    };
    return (
        <>
            {
                showModal && (
                    <div className='modal-bg'>
                        <div className='modal-inner'>
                            <div className='close-btn'>
                                <h2 onClick={handleImageClick}>❌</h2>
                            </div>
                            {filterdData.map((el) => {
                                return (
                                    <>
                                        <h1>{el.id}</h1>
                                        <p>Name : {el.name}</p>
                                        <p>Email : {el.email}</p>
                                        <p>Age : {el.age}</p>
                                        <p>Gender : {el.gender}</p>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                )
            }

        </>
    );
}

export default CustomModal;