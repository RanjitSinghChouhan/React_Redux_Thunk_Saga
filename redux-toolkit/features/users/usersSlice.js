const createSlice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios').default;

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const fetchusers = createAsyncThunk('users/fetchUsers', async() => {
    return await axios.get('https://jsonplaceholder.typicode.com/users').then(response => response.data.map(user => user.id))
})

const usersSlice = createSlice({
    name: 'users',
    initialState: initialState,
    extraReducers: builder => {
        builder.addCase(fetchusers.pending, state => {
            state.loading = true;
        })
        builder.addCase(fetchusers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = '';
        })
        builder.addCase(fetchusers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        })
    }
});

module.exports = usersSlice.reducer;
module.exports.fetchusers = fetchusers;