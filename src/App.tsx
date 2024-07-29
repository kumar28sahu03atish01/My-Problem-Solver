import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome/welcome';
import Content from './Components/Content/Content';
import { Counter } from './Components/Counter/Counter';
import { Arithmetic } from './Components/Arithmetic/Arithmetic';
const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Arithmetic" element={<Arithmetic />} />
      </Routes>
    </>
  );
}
export default App;