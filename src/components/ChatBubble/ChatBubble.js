import React from 'react';
import style from './index.module.scss';
import chatLogo from '../../assets/icons/icon__chat-bubble.svg'; 

const ChatBubble = () => {
    return (
        <div className={style.chatBubble}>
            <img  src={chatLogo} alt='chat logo'/>
        </div>
    )
}

export default ChatBubble
