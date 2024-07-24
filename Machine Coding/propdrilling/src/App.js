// App.js
import React from 'react';
import MyContext from './mycontext';
import OuterComponent from './OuterComponent';

const App = () => {
    const contextValue = { data: 'Hello from Context!' };

    return (
        <MyContext.Provider value={contextValue}>
            <OuterComponent />
        </MyContext.Provider>
    );
};

export default App;
