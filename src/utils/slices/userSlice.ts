import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUser {
    id: number;
    name: string;
    lastName: string;
    email: string;
    role: string;
}

const initialState: IUser = {
    id: 0,
    name: "",
    lastName: "",
    email: "",
    role: "user",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateField<K extends keyof IUser>(state : IUser, action: PayloadAction<{ field: K; value: IUser[K] }>) {
            state[action.payload.field] = action.payload.value;
        },
        updateUser(state, action: PayloadAction<IUser>) {
            return { ...state, ...action.payload };
        }
    }
})

export const { updateField, updateUser } = userSlice.actions;
export default userSlice.reducer;