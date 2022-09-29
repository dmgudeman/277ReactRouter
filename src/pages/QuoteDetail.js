import React, { Fragment } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Dave', text: 'learning react is fun' },
  { id: 'q2', author: 'Joe', text: 'learning react is kinda fun' },
  { id: 'q3', author: 'Momma', text: 'learning react is very fun' },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  console.log('hi there', match);

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Quote Found</p>;
  }

  return (
    <Fragment>
      <div>
        <h1>QuoteDetail</h1>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`${match.path}`} exact>
          <div className="centered">
            <Link
              className="btn--flat"
              to={`/quotes/${params.quoteId}/comments`}
            >
              Load Comments
            </Link>
          </div>
        </Route>

        <Route path={`${match.path}/comments`}>
          <Comments />
        </Route>
      </div>
    </Fragment>
  );
};

export default QuoteDetail;
