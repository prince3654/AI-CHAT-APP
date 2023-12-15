import React, { useEffect } from 'react';
import axios from 'axios';

function ChatPage() {
    const fetchChat = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/chat');
            console.log(response.data);  // Assuming the data is in response.data
        } catch (error) {
            console.error('Error fetching chat:', error.message);
        }
    };

    useEffect(() => {
        fetchChat();
    }, []);

    return (
        <div>
            <h1>ChatPage</h1>
        </div>
    );
}

export default ChatPage;
