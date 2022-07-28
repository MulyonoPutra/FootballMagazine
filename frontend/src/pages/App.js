import './App.css';
import Navigation from './../config/routes/index'
import { Provider } from 'react-redux';
import store from './../config/redux/store'

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
}

export default App;
