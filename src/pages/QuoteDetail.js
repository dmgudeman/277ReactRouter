import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';


  

const QuoteDetail = () => {
    const params = useParams();

  console.log(params.quoteId);
  return (
    <Fragment>
    <div>
      <h1>QuoteDetail</h1>
      <h2>{params.quoteId}</h2>
      </div>
    </Fragment>
  );
};

export default QuoteDetail;
