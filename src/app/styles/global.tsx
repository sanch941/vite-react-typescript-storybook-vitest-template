import { Global as GlobalEmotion, css } from '@emotion/react';
import { normalize } from './normalize';

const globalStyles = css`
    ${normalize};

    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 1em;
        color: #5a5a5a;
        line-height: 1.4;
    }
`;

export const Global = () => <GlobalEmotion styles={globalStyles} />;
