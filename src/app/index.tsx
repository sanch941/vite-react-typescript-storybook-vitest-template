import { Provider } from 'react-redux';
import { HomePage } from '../pages/home';
import { store } from './store';

// You can use reset or normalize css
// import 'reset-css';
import 'normalize.css';
import './styles/index.scss';
import './styles/tailwind.css';

export const App = () => {
    return (
        <Provider store={store}>
            <HomePage />
        </Provider>
    );
};
