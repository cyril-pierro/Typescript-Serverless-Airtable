export type studentDetailsType = {
    studentClassName: string,
    students: string[],
}
export type InitialStateType = {
    studentsDetails: studentDetailsType[],
    isLoggedIn: boolean,
    searchName: string,
    isLoading: boolean,
    errorMessage: string,
}

export type studentsList = {
    students: studentDetailsType[]
}

export type classesType = {
    studentClassName: string
}[]
