// src/components/app.jsx

// Import dependencies
import React from 'react'
import './theme.scss'
import Sidebar from './components/sidebar/sidebar'
import Chat from './components/chat/chat'
// Create main App component
const App = () => (
    <div className="columns">
        <div className="column is-one-fifth">
        <Sidebar/>
        </div>
        <div className="column is-four-fifth">
            <Chat />
        </div>
    </div>
)

// Export the App component
export default App