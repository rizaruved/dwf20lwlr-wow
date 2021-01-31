import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from "../pages/Landing";
import AfterLoginPage from "../pages/AfterLogin";
import SubscribePage from "../pages/Subscribe";
import ActiveProfilePage from "../pages/ActiveProfile";
import BookDetailPage from "../pages/BookDetail";
import ReadBookPage from "../pages/ReadBook";
import AddBookPage from "../pages/AddBook";
import TransactionListPage from "../pages/TransactionList";

const Route = () => {
    return (
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/after-login/:url" exact component={AfterLoginPage} />
            <Route path="/subscribe" exact component={SubscribePage} />
            <Route path="/active-profile/:url" exact component={ActiveProfilePage} />
            <Route path="/book-detail/:url" exact component={BookDetailPage} />
            <Route path="/read-book/:url" exact component={ReadBookPage} />
            <Route path="/add-book" exact component={AddBookPage} />
            <Route path="/transaction-list/:url" exact component={TransactionListPage} />
        </Switch>
    )
}