import Button from "./Button"
import "../styles/login.css"
import { useAppDispatch, useAppSelector} from '../app/hooks';
import { selectStudent,searchStudent } from '../features/students/studentSlice';


export default function Login(){
    const dispatch = useAppDispatch()
    const student = useAppSelector(selectStudent)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(searchStudent(e.target.value))
    }

    return (
        <div className="login-container">
            {student.errorMessage === ""? <br></br> : <h1>{student.errorMessage}</h1>}
            <div><p>Student Name:</p></div>
            <div><input type="text" placeholder="Input Student Name" onChange={handleChange}/></div>
            <div><Button/></div>
        </div>
    )
}