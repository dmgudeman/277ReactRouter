import React, { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';


const DUMMY_QUOTES = [
    {id: 'q1', author: 'Dave', text:"learning react is fun"},
    {id: 'q2', author: 'Joe', text:"learning react is kinda fun"},
    {id: 'q3', author: 'Momma', text:"learning react is very fun"},
];

  

const QuoteDetail = () => {
    const params = useParams();
    console.log('hi there', params.quoteId);

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    if(!quote) {
        return <p>No Quote Found</p>
    }
  


  return (
    <Fragment>
    <div>
      <h1>QuoteDetail</h1>
    <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quoteId}/comments`}><Comments/></Route>
      </div>
    </Fragment>
  );
};

export default QuoteDetail;
