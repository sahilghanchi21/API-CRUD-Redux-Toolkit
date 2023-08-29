import React from 'react';

const Modal = ({id}) => {
    
    return (
        <>
            {/* <div className="modal fade" id={"staticBackdrop"} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true"  >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {id && id?.map((e) => {
                                return (
                                    <>
                                        <h3 className="card-subtitle mb-2 text-body-secondary">{e.id}</h3>
                                        <h5 className="card-title">{e.name}</h5>
                                        <p className="card-text">{e.email}</p>
                                        <p className="card-text">{e.age}</p>
                                        <p className="card-text">{e.gender}</p>
                                    </>

                                )
                            })}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default Modal;
