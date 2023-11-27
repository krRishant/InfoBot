import React, { useState } from "react";
import axios from "axios";

const plus = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    title='Add a new question'
    height='1em'
    viewBox='0 0 512 512'>
    <style></style>
    <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z' />
  </svg>
);

const minus = () => (
  <svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'>
    <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z' />
  </svg>
);

const Training = () => {
  const [intent, setIntent] = useState("");
  const [questions, setQuestions] = useState([{ question: "", answer: "" }]);

  const handleChange = (index, key, value) => {
    const newQuestions = [...questions];
    newQuestions[index][key] = value;
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    if (questions.length < 5) {
      setQuestions([...questions, { question: "", answer: "" }]);
    }
  };

  const handleRemoveQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const  handleTrain = async () => {
    // console.log("first")
    const data = {
      name : "train"
    }
    try {
      const response = await axios.post('http://localhost:5000/trainer_bot',data,{
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      alert(response.data);

    } catch (error) {
      console.log(error);
    }
    
  }
  const handleSubmit = () => {
    const data = {
      intent,
      questions: questions.map((q) => q.question),
      answers: questions.map((q) => q.answer),
    };
    console.log(data);
    // Send data to the backend using Axios
    axios
      .post("http://localhost:5000/train", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Backend response:", response.data);
        alert("Success!");
        // Handle backend response as needed
      })
      .catch((error) => {
        console.error("Error sending data to backend:", error);
        // Handle error
      });
  };

  return (
    <div className='flex'>
      <div className='app-container'>
        <div className='p-10'>
          <h1
            className='text-2xl font-semibold px-1'
            style={{ color: "#141E46" }}>
           Create a new Intent
          </h1>
          <div className='form-control flex flex-row gap-5'>
            <div className='w-80'>
              <label className='label'>
                <span className='label-text' style={{ color: "#141E46" }}>
                  Intent *
                </span>
              </label>
              <input
                style={{
                  background: "#2E4374",
                  border: "1px solid #333",
                  color: "#fff",
                }}
                type='text'
                placeholder='Type here'
                className='input input-bordered w-full max-w-xs'
                id='intent'
                value={intent}
                onChange={(e) => setIntent(e.target.value)}
                required
              />
            </div>
          </div>
          {questions.map((q, index) => (
            <div key={index} className='form-control flex flex-row gap-5'>
              <div className='w-80'>
                <label className='label'>
                  <span
                    className='label-text'
                    style={{ color: "#141E46" }}>{`Question ${
                    index + 1
                  } *`}</span>
                </label>
                <input
                  style={{
                    background: "#2E4374",
                    border: "1px solid #333",
                    color: "#fff",
                  }}
                  type='text'
                  placeholder='Type here'
                  className='input input-bordered w-full max-w-xs'
                  value={q.question}
                  onChange={(e) =>
                    handleChange(index, "question", e.target.value)
                  }
                  required
                />
              </div>
              <div className='w-80'>
                <label className='label'>
                  <span className='label-text' style={{ color: "#141E46" }}>
                    Answer
                  </span>
                </label>
                <input
                  style={{
                    background: "#2E4374",
                    border: "1px solid #333",
                    color: "#fff",
                  }}
                  type='text'
                  placeholder='Type here'
                  className='input input-bordered w-full max-w-xs'
                  value={q.answer}
                  onChange={(e) =>
                    handleChange(index, "answer", e.target.value)
                  }
                />
              </div>
              {index === questions.length - 1 && (
                <div className='flex gap-1'>
                  {index < 4 && (
                    <span
                      title='Add a new question'
                      className='cursor-pointer'
                      onClick={handleAddQuestion}>
                      {plus()}
                    </span>
                  )}
                  {index > 0 && (
                    <span
                      title='Remove question'
                      className='cursor-pointer'
                      onClick={() => handleRemoveQuestion(index)}>
                      {minus()}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
          <button
            className='btn btn-success mt-5 text-stone-50 border-green-950'
            onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <div style={{height: "100vh", width: "50%" }}>
        <div
          style={{
            paddingLeft: "50px",
            paddingTop: "50px",
            paddingRight: "50px",
            paddingBottom: "50px",
            height: "78vh",
            width: "70vh",
            backgroundColor: "#141E46",
            margin: "20px 100px",
            borderRadius: "50px",
            color: "white",
          }}>
          <div className=""> 
          <h3 className="border border-x-8 text-center text-2xl font-semibold mt-5">Five Steps to add a intent !</h3>
            <ol type="1" className="leading-10 mt-8 text-lg">
              <li>1.  create a intent (it should not be empty)</li>
              <li>2.  add atleast 1 question and 1 corresponding response to the intent</li>
              <li>3.  you can have multiple questions and responses for the same intent</li>
              <li>4.  no of questions and responses need not to be same</li>
              <li>5.  click add intent and you are done !</li>
            </ol>
          </div>
        </div>
        <div className="mx-auto">
          <h1 className="text-center font-semibold text-blue-900 text-lg">After adding the intent click here to train the bot.</h1>
          <button onClick={handleTrain} className="flex btn btn-success mx-auto">Train the bot  </button>
        </div>
      </div>
    </div>
  );
};

export default Training;
