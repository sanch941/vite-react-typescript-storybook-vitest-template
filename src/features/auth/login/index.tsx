import { useState } from 'react';
import styled from '@emotion/styled';
import { Form } from 'formik';
import {
    imgUser,
    imgEye,
    imgEyeCrossedOut,
    imgLoading,
    imgLock
} from '../../../shared/assets';
import { i18nAdapter } from '../../../shared/lib/18n-adapter';
import { Input } from './input';
import { useAppSelector } from '../../../app/store/hooks';
import { FormikTemplate } from './formik';

export const Login = () => {
    const loading = useAppSelector(({ authLogin }) => authLogin.loading);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <FormikTemplate>
            <StyledFormWrapper>
                <StyledFormGroup>
                    <img src={imgUser} alt="" />
                    <Input
                        name="email"
                        type="text"
                        placeholder={i18nAdapter(
                            'E-mail',
                            'pages.login.body.email'
                        )}
                    />
                </StyledFormGroup>
                <StyledFormGroup>
                    <img src={imgLock} alt="" />
                    <Input
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder={i18nAdapter(
                            'Пароль',
                            'pages.login.body.password'
                        )}
                    />
                    <StyledShowPasswordButton
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <img
                            src={showPassword ? imgEye : imgEyeCrossedOut}
                            alt="show password"
                        />
                    </StyledShowPasswordButton>
                </StyledFormGroup>
                <StyledButtonLogin type="submit">
                    {loading && <img src={imgLoading} alt="loading" />}
                    {i18nAdapter('Войти в Relog', 'pages.login.body.login')}
                </StyledButtonLogin>
            </StyledFormWrapper>
        </FormikTemplate>
    );
};

export const StyledLogoWrapper = styled.div`
    width: 160px;
    margin: 0 auto 14px;

    img {
        width: 100%;
    }
`;

export const StyledText = styled.div`
    text-align: center;
    margin-bottom: 16px;

    p {
        color: rgb(253, 193, 25);
        font-weight: 600;
        margin: 0;
    }

    span {
        font-size: 13px;
        color: rgb(255, 255, 255);
    }
`;

export const StyledFormWrapper = styled(Form)`
    width: 237px;
    margin: 0 auto;
`;

export const StyledFormGroup = styled.div`
    height: 55px;
    position: relative;

    img {
        position: absolute;
        top: 8px;
        left: 10px;
        width: 14px;
        height: 14px;
    }

    input {
        padding: 7px 10px 7px 30px;
        border-radius: 2px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.85);
        border: none;
        width: 100%;
        box-sizing: border-box;

        &:focus {
            border-color: #40a9ff;
            box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
            border-right-width: 1px;
            outline: 0;
        }
    }
`;

export const StyledButtonLogin = styled.button`
    color: #fff;
    background: #1890ff;
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
    width: 100%;
    line-height: 1.5715;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    height: 32px;
    padding: 4px 15px;
    font-size: 14px;
    border: 1px solid #1890ff;
    border-radius: 2px;
    cursor: pointer;

    &:hover {
        border-color: #40a9ff;
        background: #40a9ff;
    }

    &:active {
        border-color: #096dd9;
        background: #096dd9;
    }

    img {
        width: 14px;
        margin-right: 5px;
    }
`;

export const StyledShowPasswordButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px;
    position: absolute;
    right: 15px;
    top: 0;
`;
