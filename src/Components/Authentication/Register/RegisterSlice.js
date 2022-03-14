import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserApi from '../../../Api/UserApi/UserApi';

export const regiterAction = createAsyncThunk(
    'users/register',
    async (payload) => {
        // Check user va email ton tai chua
        const myUser = payload
        const getAllUser = await UserApi.getAll()
        const allUser = Object.values(getAllUser.data)
        const check = allUser.filter((item) => {
            return myUser.userName === item.userName || myUser.userEmail === item.userEmail
        })
        if (check.length === 0) {
        // Gửi dữ liệu lên server
        const response = await UserApi.add(payload)
        // Lưu vào localstorage
        localStorage.setItem("userData", JSON.stringify(response.config.data))
        // const gido = localStorage.getItem("userData")
        // const cmm = JSON.parse(gido)
        // console.log(cmm);
        // Report
        return response.config.data;
       }
    }
)

export const RegisterSlice = createSlice({
    name: 'register',
    initialState: {
        value: 0,
    },
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: {
        'users/register/pending': () => {

        },
        'users/register/fulfilled': (state, action) => {
            state.value = action.payload
        },
        'users/register/rejected': () => {

        },
    }
})