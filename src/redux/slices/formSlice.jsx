import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const submitForm = createAsyncThunk('form/submitForm', async (formData) => {
  try {
    const response = await fetch('https://formspree.io/f/mrgwoooa', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error('Error al enviar el formulario');
    }
  } catch (error) {
    throw new Error('Error inesperado al enviar el formulario:', error);
  }
});

const initialState = {
  name: '',
  email: '',
  message: '',
  status: 'idle',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateForm: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetFormStatus: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitForm.fulfilled, (state) => {
        state.status = 'success';
      })
      .addCase(submitForm.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const { updateForm, resetFormStatus } = formSlice.actions;
export default formSlice.reducer;
