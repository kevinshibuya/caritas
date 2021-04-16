import React from 'react';
import Categories from './components/Categories';
import GlobalStyles from './styles/global';
import ProjectsList from './components/ProjectsList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Categories />
      <ProjectsList />    
    </div>
  );
}

export default App;
