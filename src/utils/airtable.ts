import Airtable from "airtable"
import { classesType } from "../types/State";
const getAirtableApiKey = ()=> process.env.REACT_APP_AIRTABLE_API_KEY


Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: getAirtableApiKey()
});

// connect to the base
const base = Airtable.base('app8ZbcPx7dkpOnP0');
const table = base("tblgh8YARZPqeJF07")
const studentsTable = base("Students")




export const getStudentData = async (student: string)=>{
    const search = `SEARCH("${student}", {Students} )`
    const records = await table.select({
                filterByFormula: search,
                view: "Grid view",
            }).all()
            
    const listData  = records.map(record=> {
        const classes = record.get("Name") as string
        return {studentClassName: classes} 
    })

    const data = await processUtility(listData);

   return data
}   

const processUtility= async (data: classesType)=>{
    const datalist = []

   for (let record of data){
        const className = record.studentClassName  
        const student = await getStudentNamesInClass(className) as string[]
        datalist.push({studentClassName: className, students: student})
   }

   return datalist
}

const getStudentNamesInClass = async (className: string)=>{
    const searchClasses = `SEARCH("${className}", {Classes} )`
    const records = await studentsTable.select({filterByFormula: searchClasses}).all()
    const names = records.map(record=> record.get("Name"))
    return names
}
