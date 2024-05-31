import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Tags from './pages/Tags/Tags';

const App: React.FC = React.memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:tags" element={<Tags />} />
        </Routes>
    );
});

export default App;