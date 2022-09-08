import Login from './Login';
import InfoSection from './InfoSection';
import { selectStudent} from '../features/students/studentSlice';
import { useAppSelector} from '../app/hooks';
import "../styles/home.css"


export default function Home(){
    const student = useAppSelector(selectStudent)

    return (
        <div className='info'>
            {student.isLoggedIn ? <InfoSection/> : <Login />}  
            
        </div>
    )
}