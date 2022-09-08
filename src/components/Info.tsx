import { InfoType } from "../types/Info"
import "../styles/info.css"

export default function StudentDetail({studentClassName, students}:InfoType){
    return (
        <div className="info-container">
            <div><p>Name</p></div>
            <div className="data-info">{studentClassName}</div>

            <div><p>Students</p></div>
            <div className="data-info">{students.toString()}</div>
        </div>
    )
}