import { useField } from 'formik';
import { css } from '@emotion/react';

export const Input: React.FC<any> = ({ ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <div
                    css={css`
                        color: #ff4d4f;
                        font-size: 14px;
                    `}
                >
                    {meta.error}
                </div>
            ) : null}
        </>
    );
};
