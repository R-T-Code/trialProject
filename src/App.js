import React from 'react';
import style from './index.module.scss';
import Nav from './components/Nav/Nav' 
import Hero from './components/Hero/Hero';
import Options from './components/Options/Options';
import Shortcuts from './components/Shortcuts/Shortcuts';
import Deals from './components/Deals/Deals';
import ChatBubble from './components/ChatBubble/ChatBubble';

function App() {
  return (
    <div className={style.app}>
          <Nav />
          <Hero />
          <Options />
          <Shortcuts />
          <Deals />
          <ChatBubble />
    </div>
  );
}

export default App;
