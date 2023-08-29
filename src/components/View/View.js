import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, editUser, showUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import CustomModal from '../CustomModal/CustomModal';

const View = () => {
    const users = useSelector((state) => state.app.users.data);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [radioData, setRadioData] = useState("");
    const [searchTerm, setSearchTerm] = useState("")
    const [showModal, setShowModal] = useState(false);
    const [id, setid] = useState();

    const handleImageClick = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        dispatch(showUser())
    }, []);

    console.log(users, 'userssssss')

    const editData = (e) => {
        dispatch(editUser(e.id))
        navigate("/edit")
    }

    return (
        <>
            <div className="mt-5 w-50 mx-auto">
                <div className="mt-5 mx-auto " style={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: "5px" }}>
                        <div className="form-check" >
                            <input className="form-check-input"
                                type="radio"
                                name='gender'
                                value=""
                                onChange={(e) => setRadioData(e.target.value)}
                                checked={radioData == ""} />
                            <label className="form-check-label"
                            >
                                All
                            </label>
                        </div>
                        <div className="form-check" >
                            <input className="form-check-input"
                                id='female'
                                type="radio"
                                name='gender'
                                value="female"
                                onChange={(e) => setRadioData(e.target.value)}
                                checked={radioData == "female"} />
                            <label className="form-check-label"
                                htmlFor="female" >
                                Female
                            </label>
                        </div>
                        <div className="form-check"
                        >
                            <input className="form-check-input"
                                id='male'
                                type="radio"
                                name='gender'
                                value="male"
                                onChange={(e) => setRadioData(e.target.value)}
                                checked={radioData == "male"} />
                            <label className="form-check-label"
                                htmlFor="male">
                                Male
                            </label>
                        </div>
                    </div>
                    <div >
                        <input
                            type="text"
                            id="myInput"
                            placeholder="seach..."
                            onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                </div>
                <>
                    {users && users?.filter((el) => {
                        if (radioData === "male") {
                            return el.gender === radioData
                        } else if (radioData === "female") {
                            return el.gender === radioData
                        } else {
                            return el
                        }
                    }).filter((val) => {
                        if (searchTerm == "") {
                            return val;
                        } else if (val.name.toLowerCase().includes(searchTerm)) {
                            return val;
                        }
                    }).map((e) => {
                        return (
                            <div className="mt-2">
                                <div className="card  " key={e.id}  >
                                    <div className="card-body " style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                                        <h3 className="card-subtitle mb-2 text-body-secondary">{e.id}</h3>
                                        <h5 className="card-title">{e.name}</h5>
                                        <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                                            <button type="button" class="btn btn-info p-1" onClick={() => { handleImageClick(); setid(e.id) }} >View</button>
                                            <button type="button" class="btn btn-secondary p-1" onClick={() => editData(e)} >Edit</button>
                                            <button type="button" class="btn btn-danger p-0" onClick={() => dispatch(deleteUser(e.id))} >Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {showModal && (<CustomModal id={id} />)}
                    {users && users?.length === 0 && (
                        <h1 style={{ marginLeft: "100px", marginTop: "150px" }}>
                            No data available
                        </h1>
                    )}
                </>
            </div>
        </>
    );
}

export default View;
