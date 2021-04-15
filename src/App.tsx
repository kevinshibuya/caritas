import React from 'react';
import Categories from './components/Categories';
import GlobalStyles from './styles/global';
import ProjectsList from './components/ProjectsList';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Categories />
      <ProjectsList />    
    </div>
  );
}

export default App;
