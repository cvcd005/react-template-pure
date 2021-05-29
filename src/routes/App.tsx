import { Route, HashRouter } from 'react-router-dom';
import { HomePage } from 'src/page/Home';

const App = () => (
  <HashRouter>
    <Route exact path="/" component={HomePage} />
  </HashRouter>
);

export default App;
