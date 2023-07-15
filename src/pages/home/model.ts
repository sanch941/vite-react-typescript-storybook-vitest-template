import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'home',
    initialState: {
        show: false
    },
    reducers: {
        setShow(state, { payload }: PayloadAction<boolean>) {
            state.show = payload;
        }
    }
});
export const homeReducer = slice.reducer;
export const homeActions = slice.actions;
