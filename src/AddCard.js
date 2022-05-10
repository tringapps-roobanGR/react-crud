import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addUser } from "./AllDetails";

export default function AddCard(){
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userDetails = {
            name: {name},
            dob: {dob},
           
        }
        dispatch(addUser(userDetails));
        alert("successfull")
        setName('');
        setDob('');
       
    }

    return(
        <div className="addDetail">
            <h1>Add Detail</h1>
            <div>
                <form action={'showdetails'} onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" id='name' name='name' onChange={(e) => setName(e.target.value)} value={name} required></input><br/><br/>
                    <label>Date of Birth:</label>
                    <input type="date" id='dob' name='dob' onChange={(e) => setDob(e.target.value)} value={dob} required></input><br/><br/>
                    <input type="submit"></input>
                    </form>
            </div>
            <Link to ='showdetails'>Go to View All Details</Link>
        </div>
    )
}