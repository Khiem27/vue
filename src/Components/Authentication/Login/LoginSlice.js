import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserApi from '../../../Api/UserApi/UserApi';

export const loginAction = createAsyncThunk(
    'users/login',
    async (payload) => {
        const myUser = payload

        // Lấy dữ liệu từ server
        const response = await UserApi.getAll()
        const allUser = Object.values(response.data)

        // Check myUser có bằng allUser không
        const check = allUser.filter((item) => {
            return myUser.userName === item.userName && myUser.userPass === item.userPass
        })

        // Lưu localstorage
        localStorage.setItem("userLogin", JSON.stringify(check))

        return check
    }   
)

export const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        value: 0,
    },
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        'users/login/pending': () => {

        },
        'users/login/fulfilled': (state, action) => {
            state.value = action.payload
        },
        'users/login/rejected': () => {

        },
    }
})