import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QueryParamComponent from './QueryParamComponent';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<QueryParamComponent />} />
            </Routes>
        </Router>
    );
};

export default App;