import StudentDetail from './Info';
import { useAppSelector } from "../app/hooks"
import {selectStudent} from "../features/students/studentSlice"


export default function StudentsList(){

    const student = useAppSelector(selectStudent)

    const studentslist = student.studentsDetails.map((student, index)=>{
        return (
            <div key={index}>
            <StudentDetail
             studentClassName={student.studentClassName}
             students={student.students}/>
            </div>
        )
    })

    return (
        <div>
            {studentslist}
        </div>
    )
}