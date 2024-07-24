import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome/welcome';
import Content from './Components/Content/Content';
const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path="/Content" element={<Content />} />
      </Routes>
    </>
  );
}
export default App;