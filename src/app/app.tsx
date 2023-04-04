import { Provider } from 'react-redux';
import { HomePage } from '../pages/home';
import { store } from './store';
import { Global } from './styles/global';

export const App = () => {
    return (
        <>
            <Global />

            <Provider store={store}>
                <HomePage />
            </Provider>
        </>
    );
};
