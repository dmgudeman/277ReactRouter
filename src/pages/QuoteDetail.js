import React, { Fragment } from 'react';
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';


  

const QuoteDetail = () => {
    const params = useParams();
  

  console.log(params.quoteId);
  return (
    <Fragment>
    <div>
      <h1>QuoteDetail</h1>
      <h2>{params.quoteId}</h2>
      <Route path={`/quotes/${params.quoteId}/comments`}><Comments/></Route>
      </div>
    </Fragment>
  );
};

export default QuoteDetail;
