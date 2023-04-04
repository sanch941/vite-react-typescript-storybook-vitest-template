import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { NotificationContextParams } from '../../../app/providers/notifications/context';
import type { AuthLoginInitialValues } from './formik';

interface InitialState {
    loading: boolean;
}

const initialState: InitialState = {
    loading: false
};

const slice = createSlice({
    name: 'authLogin',
    initialState,
    reducers: {
        setLoading(state, { payload }: PayloadAction<boolean>) {
            state.loading = payload;
        }
    }
});

export const authLoginReducer = slice.reducer;
const actions = slice.actions;

interface MakeLoginParams
    extends AuthLoginInitialValues,
        NotificationContextParams {}

export const makeLogin = createAsyncThunk(
    `${slice.name}/makeLogin`,
    async (
        { email, password, addNotification }: MakeLoginParams,
        { dispatch, rejectWithValue }
    ) => {
        try {
            dispatch(actions.setLoading(true));

            const url = import.meta.env.DEV
                ? '/relog-local-api/api/login'
                : `${window.location.origin}/api/login`;

            const params = {
                email,
                password
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            });

            if (response.ok) {
                const json = await response.json();
                const token = json?.token?.token;
                const userId = json?.user_id;

                if (token) {
                    localStorage.setItem('Meteor.loginToken', token);
                    localStorage.setItem('Meteor.userId', userId);
                    location.href = `${window.location.origin}/appsbystatus`;
                } else {
                    addNotification({
                        title: 'Ошибка!',
                        level: 'error',
                        message: 'Произошла ошибка попробуйте позже'
                    });

                    dispatch(actions.setLoading(false));
                }
            } else {
                const json = await response.json();

                addNotification({
                    title: 'Ошибка!',
                    level: 'error',
                    message: getErrorMessage(json.error)
                });

                dispatch(actions.setLoading(false));
            }
        } catch (err) {
            addNotification({
                title: 'Ошибка!',
                level: 'error',
                message: 'Произошла ошибка попробуйте позже'
            });

            dispatch(actions.setLoading(false));
            return rejectWithValue(err);
        }
    }
);

const getErrorMessage = (message: string) => {
    if (['User not found', 'Incorrect password'].includes(message)) {
        return 'Неверный адрес или пароль';
    }

    return 'Произошла ошибка попробуйте позже';
};
