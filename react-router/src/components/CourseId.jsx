import { Link, useNavigate, useParams } from "react-router-dom"


export default function CourseId() {
    const {courseid} = useParams();
    const navigate = useNavigate();
     return(
       <div className="">
         <h1>URL parameter is: {courseid} </h1>
         <button onClick={() => {
          navigate("/dashboard", {state: courseid});
         }} className="btn btn-primary">
          Price
        </button>
        <Link to="/dashboard" state={"Using Link Tag"}>CLICK ME</Link>
       </div>
     )
 }