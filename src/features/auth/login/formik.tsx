import * as Yup from 'yup';
import { Formik } from 'formik';
import { useAppDispatch } from '../../../app/store/hooks';
import { makeLogin } from './model';
import { useContext } from 'react';
import {
    NotificationContext,
    NotificationContextParams
} from '../../../app/providers/notifications/context';

export const FormikTemplate: ReactFCWithChildren = ({ children }) => {
    const dispatch = useAppDispatch();
    const { addNotification } = useContext(
        NotificationContext
    ) as NotificationContextParams;

    const onSubmit = (values: InitialValues) =>
        dispatch(
            makeLogin({
                addNotification,
                ...values
            })
        );

    return (
        <Formik
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {children}
        </Formik>
    );
};

interface InitialValues {
    email: string;
    password: string;
}
export type AuthLoginInitialValues = InitialValues;

const initialValues: InitialValues = {
    email: '',
    password: ''
};

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Please enter a valid email')
        .required('Please input your username!'),
    password: Yup.string().required('Please input your password!')
});
