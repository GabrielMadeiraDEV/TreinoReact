// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookForm from './pages/BookForm';
import UserForm from './pages/UserForm';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/add-book" component={BookForm} />
                <Route path="/register-user" component={UserForm} />
            </Switch>
        </Router>
    );
};

export default App;
