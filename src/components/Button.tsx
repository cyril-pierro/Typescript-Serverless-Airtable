import { useAppSelector, useAppDispatch } from "../app/hooks"
import { resetState, selectStudent, studentDetailsAsync} from "../features/students/studentSlice"
import { InitialStateType } from "../types/State"

export default function Button(){

    const student: InitialStateType = useAppSelector(selectStudent)
    const dispatch =useAppDispatch()

    const handleClick = async ()=>{
        
        if (student.isLoggedIn){
            dispatch(resetState())
        } else{  
           await dispatch(studentDetailsAsync(student.searchName))
        }
    }

    return (
    <div>
        <button onClick={handleClick}> {student.isLoggedIn ? "LogOut" : "LogIn"}</button>
    </div>
    )
}