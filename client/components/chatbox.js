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
    // console.log(newMessage);
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
      // console.log(response);
      // console.log(responseData);
      // Update local state with both the user's message and the bot's response
      setMessages([...updatedMessages, { text: responseData, sender: "bot" }]);
    } catch (error) {
      console.error("Error:", error.message);
      // Handle error, e.g., display an error message in the chat box
    }
  };

  return (
    <div className='flex'>
      <div style={{ width: "150vh" }}>
        <div
          className='flex ml-2 bg-cyan-50'
          style={{ height: "45vh", border: "4px" }}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/a/ac/NIT_AGARTALA_MAIN_GATE.jpg'
            alt='xyzzzz'
            width={400}
          />

          <div className='px-11 pt-10'>
            <h2 className='text-2xl text-black font-semibold border border-x-8 border-black text-center'>
              National Institute of Technology, Agartala
            </h2>
            <br />
            <p className='text-base text-justify text-black'>
              Welcome to the academic haven of innovation and excellence, the
              National Institute of Technology Agartala. Nestled in the
              picturesque landscapes of Agartala, our institute stands as a
              beacon of learning and advancement in the realm of engineering,
              technology, and science. At NIT Agartala, we foster a culture of
              intellectual curiosity, where students are not just learners but
              torchbearers of innovation. Our esteemed faculty, drawn from
              diverse fields, are dedicated to imparting knowledge that
              transcends the conventional and prepares our students for the
              challenges of a dynamic world.
            </p>
            {/* </br> */}
          </div>
        </div>
        <div className='mt-5 mx-16'>
          <h2 className='text-3xl text-center my-5 border border-x-8 border-black text-black font-bold'>
            InfoBot
          </h2>

          <p className='text-lg px-5 text-justify text-black'>
            🎓 Welcome to NIT Agartala Chatbot! 🎉 Embark on a seamless journey
            of discovery and information with our interactive chatbot! Whether
            you're a prospective student, a curious parent, or a member of our
            vibrant community, this virtual assistant is here to answer your
            questions and provide a glimpse into the heart of NIT Agartala. 🏰
            Explore Our Campus: Discover the state-of-the-art facilities, lush
            green spaces, and dynamic learning environments that make NIT
            Agartala a unique academic haven. 👋 Ready to Begin? Ask Away! Type
            your questions and let the chatbot be your companion in uncovering
            the essence of NIT Agartala. Your educational adventure starts here!
          </p>
        </div>
      </div>

      {/* chat-box div  */}
      <div>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            maxWidth: "400px",
            width: "400px",
            marginLeft: "2px",
            padding: "20px",
            borderLeft: "4px solid black",
            borderRight: "4px solid black",
            borderTop: "4px solid black",
            borderRadius: "10px",
            height: "100vh",
          }}>
          <div
            className='overflow-y-scroll'
            style={{
              padding: "2px",
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
                    <div className='chat-bubble '>{message.text}</div>
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
              style={{ marginTop: "10px", display: "flex", padding: "20px" }}>
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
