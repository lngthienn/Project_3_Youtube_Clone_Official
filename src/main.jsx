import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/components/Shared/GlobalStyles/Global.scss';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import { ThemeProvider } from './context/Theme/ThemeContext.jsx';

window.addEventListener('offline', () => {
    if (!sessionStorage.getItem('previousURLBeforeOffline')) {
        sessionStorage.setItem('previousURLBeforeOffline', window.location.href);
    }
    window.location.href = '../public/Pages/DisconnectingPage/offline.html';
});

window.addEventListener('online', () => {
    location.reload();
});

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </Provider>,
);
