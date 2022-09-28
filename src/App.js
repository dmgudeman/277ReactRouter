import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';

import QuoteDetail from './pages/QuoteDetail';
import Quotes from './pages/Quotes';
import NewQuote from './pages/NewQuote';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
