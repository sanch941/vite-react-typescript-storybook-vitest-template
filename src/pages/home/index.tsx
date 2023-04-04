import styled from '@emotion/styled';
import { Login } from '../../features/auth/login';
import { imgLogo } from '../../shared/assets';
import { i18nAdapter } from '../../shared/lib/18n-adapter';

export const HomePage = () => {
    return (
        <>
            <StyledContainer>
                <div>
                    <StyledLogoWrapper>
                        <img src={imgLogo} alt="" />
                    </StyledLogoWrapper>
                    <StyledText>
                        <p>
                            {i18nAdapter(
                                'Добро пожаловать!',
                                'pages.login.header.welcome'
                            )}
                        </p>
                        <span>
                            {i18nAdapter(
                                'Для продолжения работы необходимо войти в систему.',
                                'pages.login.header.loginNotificator'
                            )}
                        </span>
                    </StyledText>

                    <Login />
                </div>
            </StyledContainer>
        </>
    );
};

const StyledContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(84, 31, 134);
`;

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
