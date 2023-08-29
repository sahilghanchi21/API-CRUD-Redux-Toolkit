import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        age: "",
        gender: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(userData))
        navigate("/view")
    }


    return (
        <div className='w-50 mx-auto' >
            <h2 className="mt-5 w-50 mx-auto">Create post</h2>
            <form className='mx-auto ' style={{ border: "1px solid black", padding: "20px", borderRadius: "18px" }}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={userData.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={userData?.email} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="number" className="form-control" name="age" value={userData.age} onChange={handleChange} />
                </div>
                <div>
                    <div className="form-check">
                        <input className="form-check-input" id='female' type="radio" name='gender' value="female" onChange={handleChange} />
                        <label className="form-check-label" htmlFor="female">
                            Female
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" id='male' type="radio" name='gender' value="male" onChange={handleChange} />
                        <label className="form-check-label" htmlFor="male">
                            Male
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>CREATE</button>
            </form>

        </div>
    );
}

export default Create;
