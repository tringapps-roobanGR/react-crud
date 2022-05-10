import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PersonDetails from "./PersonDetails";

export default function ShowDetails(){
    const storedValue = useSelector(state => state.allDetail.value);
    return(
        <div className="showDetails">
            <h1>All Details</h1>
            <div className="allUserContainer">
                {storedValue.map((user, index = 0) => {
                    console.log(user)
                    return <PersonDetails key={index} user={user}/>
                })}
            </div>
            <Link to ='/'>Go to Add Details</Link>
        </div>
    )
}