import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";

const ChatBox = () => {
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scrollToBottom = () => {
    messagesEndRef.current &&
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    console.log("smooth");
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    // Update local state with the user's message
    const updatedMessages = [...messages, { text: newMessage, sender: "user" }];
    setMessages(updatedMessages);
    setNewMessage("");
    console.log(newMessage);
    try {
      // Send the user's message to the backend using Axios
      const response = await axios.post(
        "http://localhost:5000/chat",
        {
          message: newMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Assuming the server responds with a JSON object containing the bot's message
      const responseData = response.data;
      console.log(response);
      console.log(responseData);
      // Update local state with both the user's message and the bot's response
      setMessages([...updatedMessages, { text: responseData, sender: "bot" }]);
    } catch (error) {
      console.error("Error:", error.message);
      // Handle error, e.g., display an error message in the chat box
    }
  };

  return (
    <div className='flex'>
      {/* <div className="" style={{background: csed}}>
        <img src="" alt="" />
      </div> */}
      <div style={{ width: "150vh" }}>
        helllooo
        {/* <img
          src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fresearchersjob.com%2Fregular-faculty-position-in-nita%2F&psig=AOvVaw1QKpfAIs0bCFXTjPb_Gi4Z&ust=1701096382683000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPipsv7z4YIDFQAAAAAdAAAAABAY'
          alt=''
        /> */}
        
      </div>
      <div>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: "400px",
            margin: "0 0 0 0",
            padding: "20px",
            borderLeft: "4px solid black",
            height: "100vh",
          }}>
          <div
            className='overflow-y-scroll'
            style={{
              padding: "20px",
              height: "85vh",

              scrollbarColor: "transparent transparent",
            }}>
            {messages.map((message, index) => (
              <div className=''>
                {message.sender === "user" ? (
                  <div className='chat chat-end'>
                    <div className='chat-image avatar'>
                      <div className='w-10 rounded-full'>
                        <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
                      </div>
                    </div>
                    <div className='chat-header'>You</div>
                    <div className='chat-bubble'>{message.text}</div>
                  </div>
                ) : (
                  <div className='chat chat-start'>
                    <div className='chat-image avatar'>
                      <div className='w-10 rounded-full'>
                        <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
                      </div>
                    </div>
                    <div className='chat-header'>InfoBot</div>
                    <div className='chat-bubble'>{message.text}</div>
                  </div>
                )}
              </div>
            ))}
            <form
              className='absolute bottom-5'
              style={{ marginTop: "10px", display: "flex" }}>
              <input
                type='text'
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder='Type your message...'
                style={{
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ddd",
                  background: "#2E4374",
                  border: "1px solid #333",
                  color: "#fff",
                }}
              />
              <button
                type='submit'
                onClick={handleSendMessage}
                style={{
                  marginLeft: "10px",
                  padding: "8px 12px",
                  borderRadius: "4px",
                  backgroundColor: "#3498db",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}>
                Send
              </button>
            </form>
            <div style={{ marginBottom: 100 }} ref={messagesEndRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
