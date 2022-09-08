import "../styles/home.css";
import StudentsList from './Students';
import Button from './Button';
import { useAppSelector} from "../app/hooks"
import { selectStudent} from "../features/students/studentSlice"



const ShowContent = ()=>{
    return(
    <div>
        <div className='btn-logout'>
            <Button />
        </div>
        <StudentsList/>
        </div>
        )
}

export default function InfoSection(){
    const student = useAppSelector(selectStudent)
    
    return ( 
    <>
    {student.isLoading ? <h1>Loading data.....</h1> : <ShowContent /> }
    </>
    )
}