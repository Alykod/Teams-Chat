import React, {useState, useEffect} from 'react'

const TextArea = (props) => {
    const [currentText, setCurrentText] = useState("");

    const handleMessageSending = () => {
        props.messageTyped(currentText);
        setCurrentText("");
    }


    return (
        <div className="field is-horizontal">
            <input type="text" value={currentText} onChange={(e)=> setCurrentText(e.target.value)} onKeyPress={(e) => e.keycode === 13 && handleMessageSending()}/>
            <button className="button is-info" onClick={handleMessageSending}>Send</button>
        </div>
    )
}

export default TextArea;