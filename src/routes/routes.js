import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Import Pages
import LandingPage from "../pages/Landing";
import AfterLoginPage from "../pages/AfterLogin";
import SubscribePage from "../pages/Subscribe";
import ActiveProfilePage from "../pages/ActiveProfile";
import BookDetailPage from "../pages/BookDetail";
import ReadBookPage from "../pages/ReadBook";
import AddBookPage from "../pages/AddBook";
import TransactionListPage from "../pages/TransactionList";
import ErrorPage from "../pages/Error";

//Import NavbarTes
import NavbarTest from "../components/NavbarTest/NavbarTest";

const PageRoute = () => {
    return (
        <NavbarTest />
        <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/after-login/" exact component={AfterLoginPage} />
            <Route path="/subscribe" exact component={SubscribePage} />
            <Route path="/active-profile/" exact component={ActiveProfilePage} />
            <Route path="/book-detail/" exact component={BookDetailPage} />
            <Route path="/read-book/" exact component={ReadBookPage} />
            <Route path="/add-book" exact component={AddBookPage} />
            <Route path="/transaction-list/" exact component={TransactionListPage} />
            <Route component={ErrorPage} />
        </Switch>
    )
}

export default PageRoute;