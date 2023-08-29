import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { createRequestFunc } from "../services/Services";

export const createUser = createAsyncThunk(
    "createUser",
    async (data) => {
        const response = await createRequestFunc("post", "/crud", data);
        return response;
    }
);

export const showUser = createAsyncThunk(
    "showUser",
    async (data) => {
        const response = await createRequestFunc("get", "/crud", data);
        return response;
    }
);

export const deleteUser = createAsyncThunk(
    "deleteUser",
    async (id) => {
        console.log(id, "deleteData");
        const response = await createRequestFunc("delete", `/crud/${id}`);
        console.log(response, "response");
        return response;
    }
);

export const editUser = createAsyncThunk(
    "editUser",
    async (data) => {
        console.log(data, "editData");
        const response = await createRequestFunc("get", `/crud`, data);
        console.log(response, "response");
        let editUserData = response?.data?.filter((el) => el.id == data)
        console.log(editUserData, "editUserData");
        return editUserData;
    }
);

export const updateUser = createAsyncThunk(
    "updateUser",
    async (data) => {
        console.log(data, "data upadate");
        const response = await createRequestFunc("put", `/crud/${data.id}`, data);
        console.log(response, "responseUpdate");
        return response;
    }
);


export const userDetails = createSlice({
    name: "userDetails",
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    extraReducers(builder) {
        builder
            //create
            .addCase(createUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(createUser.fulfilled, (state, action) => {
                console.log(action.payload, 'got the create action')
                state.users.data.push(action.payload.data);
                state.loading = false
            })
            .addCase(createUser.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })

            //view
            .addCase(showUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(showUser.fulfilled, (state, action) => {
                console.log(action.payload.data, 'got the view action')
                state.users = action.payload;
                state.loading = false
            })
            .addCase(showUser.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })

            //delete
            .addCase(deleteUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                console.log(action.payload, 'got the delete action')
                const { id } = action.payload.data;
                if (id) {
                    state.users.data = state.users.data.filter((el) => el.id !== id)
                }
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })


            //edit
            .addCase(editUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(editUser.fulfilled, (state, action) => {
                console.log("got the edit action", action.payload)
                state.users = action.payload
            })
            .addCase(editUser.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })

            // update
            .addCase(updateUser.pending, (state, action) => {
                state.loading = true
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                console.log(action.payload.data.id, "updated action");
                state?.users?.data?.map((el) => el.id === action.payload.data.id ? action.payload.data : el)
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
    }

})

export default userDetails.reducer