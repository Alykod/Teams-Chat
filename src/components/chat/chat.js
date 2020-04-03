import React, { useState, useEffect, useRef } from 'react';
import ChatTextArea from './chatTextArea'
import './chat.scss'
const fetchData = async () => {
    let fetchChat = await fetch("https://jsonplaceholder.typicode.com/posts")
    let chatData = fetchChat.json();

    return chatData;
}


const Chat = (props) => {
    const chatRef = useRef();
    const chatLocation = useRef();
    const [chatData, setChatData] = useState(null);

    useEffect(() => {
        const getChatData = async () => {
            if (!chatData) {
                let chatData = await fetchData();
                setChatData(chatData);
            }
        }
        getChatData();

    }, [])
    useEffect(()=> {
        let ctx = chatRef.current;
        debugger;
        if(ctx.scrollTop === 0 || Math.round(chatLocation.current) === Math.round(ctx.scrollTop)){
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
            chatLocation.current = chatRef.current.scrollTop
        }
    }, [chatData])

    const handleMessageTyped = (message) => {
        let updatedChat = chatData;
        updatedChat = [...updatedChat, {id: Math.random(),
        userId: "aly",
        body: message}]
        setChatData(updatedChat);
    }

    return (
        <div>
            <div className="rows chatContainer" ref={chatRef}>
                {chatData && chatData.map(values => (
                    <div className="row field is-horizontal" key={values.id}>
                        {console.log(values)}
                        <p className="has-text-success label m-r-lg">{values.userId}</p>
                        <p className="has-text-info">{values.body}</p>
                    </div>
                ))}
            </div>

            <ChatTextArea messageTyped={handleMessageTyped}/>
        </div>
    )
}

export default Chat;