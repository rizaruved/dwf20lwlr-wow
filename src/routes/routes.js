import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from "../pages/Landing";
import AfterLoginPage from "../pages/AfterLogin";
import SubscribePage from "../pages/Subscribe";
import ActiveProfilePage from "../pages/ActiveProfile";
import BookDetailPage from "../pages/BookDetail";
import ReadBookPage from "../pages/ReadBook";
import AddBookPage from "../pages/AddBook";
// import TransactionListPage from "../pages/TransactionList";

const Route = () => {
    return (
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/after-login/" component={AfterLoginPage} />
            <Route path="/subscribe" component={SubscribePage} />
            <Route path="/active-profile/" component={ActiveProfilePage} />
            <Route path="/book-detail/"component={BookDetailPage} />
            <Route path="/read-book/" component={ReadBookPage} />
            <Route path="/add-book" component={AddBookPage} />
            {/* <Route path="/transaction-list/" component={TransactionListPage} /> */}
        </Switch>
    )
}