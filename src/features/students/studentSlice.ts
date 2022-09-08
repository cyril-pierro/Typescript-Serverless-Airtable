import { createAsyncThunk,createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState,} from '../../app/store';
import { InitialStateType} from '../../types/State';
import { getStudentData} from '../../utils/airtable';

const initialState: InitialStateType ={
    isLoggedIn: false,
    studentsDetails: [],
    searchName: "",
    isLoading: false,
    errorMessage: "",
}

export const studentDetailsAsync = createAsyncThunk(
    'students/getStudentData',
    async (student: string) => {
      const students = await getStudentData(student);
      if (students.length < 1){
        throw new Error("No user found")
      }
      return students;
    }
  );

export const studentSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        searchStudent: (state, action:PayloadAction<string>)=>{
            state.searchName = action.payload
        },

        resetState: (state)=>{
            state.isLoggedIn = false
            state.studentsDetails= []
            state.searchName = ""
            state.isLoading = false
        }
    },

    extraReducers: (builder) => {
        builder
          .addCase(studentDetailsAsync.pending, (state) => {
            state.isLoading = true;
            state.isLoggedIn = true
          })
          .addCase(studentDetailsAsync.fulfilled, (state, action) => {
            state.studentsDetails = action.payload
            state.isLoading = false;
          })
          .addCase(studentDetailsAsync.rejected, (state) => {
            state.isLoading = false;
            state.errorMessage = "Student Not found"
            state.isLoggedIn = false
            state.studentsDetails= []
            state.searchName = ""
          });
      },

})


export const {searchStudent, resetState} = studentSlice.actions

export const selectStudent = (state: RootState) => state.students

export default studentSlice.reducer