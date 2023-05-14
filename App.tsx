import store from './src/redux/redux-store';
import { Provider } from 'react-redux'
import Main from './main';

export default function App() {
  // @ts-ignor
  return <Provider store={store}>
    <Main />
  </Provider>
}
