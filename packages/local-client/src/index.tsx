import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './state';

import CellList from './components/cell-list';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <div>
          <CellList />
        </div>
      </Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
