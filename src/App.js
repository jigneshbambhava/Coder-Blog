// src/App.js
import React from 'react';
import Header from './components/Header';
import BlogPage from './components/BlogPage';  // Import BlogPage component
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Header/>
      <BlogPage/>
      <Footer/>
    </div>
  );
};

export default App;
