import { Global as GlobalEmotion, css } from '@emotion/react';
import { normalize } from './normalize';

const globalStyles = css`
    ${normalize};

    body {
        font-family: 'Ubuntu', sans-serif !important;
    }

    input,
    h2,
    p,
    span,
    a,
    button,
    div {
        font-family: 'Ubuntu', sans-serif !important;
    }
`;

export const Global = () => <GlobalEmotion styles={globalStyles} />;
