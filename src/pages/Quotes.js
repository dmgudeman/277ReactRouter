


import React, {Fragment} from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Dave', text:"learning react is fun"},
    {id: 'q2', author: 'Joe', text:"learning react is kinda fun"},
    {id: 'q3', author: 'Momma', text:"learning react is very fun"},
];

const Quotes = () => {
    return (
        <Fragment>
        <main>
       <QuoteList quotes={DUMMY_QUOTES}/>
        </main>
        </Fragment>
    )
}

export default Quotes;