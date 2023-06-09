import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/?limit=10');
    return response.data;
  } catch (error) {
    console.log('Error:', error);
    throw error;
  }
});

const contactSlice = createSlice({
  name: 'contact',
  initialState: { value: [], loading: false },
  reducers: {
    addContact: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    editName: (state, action) => {
      state.value = state.value.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            name: action.payload.name
          };
        }
        return user;
      });
    },
    editEmail: (state, action) => {
      state.value = state.value.map((user) => {
        if (user.id === action.payload.id) {
          return {
            ...user,
            email: action.payload.email
          };
        }
        return user;
      });
    },
    deleteContact: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.value = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { addContact, editName, editEmail, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;
