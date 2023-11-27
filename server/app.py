from flask import Flask,request
from chat_manager import xyz,chat_manager
from flask_cors import CORS
from training_manager import trainer
from train import train_bot

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/chat', methods=['GET','POST'])
def chat():
    data = request.get_json()

    if not data or 'message' not in data:
        return "Invalid request. 'message' parameter not found."

    message = data['message']
    print(f"Received message: {message}")
    if(message == 'quit'):
        return "have a good day ahead!"

    try:
        res = chat_manager(message)
        print(f"Response: {res}")
        return res
    except Exception as e:
        print(f"Error in chat_manager: {e}")
        return "Internal Server Error", 500  # Return a 500 Internal Server Error response


@app.route('/train', methods=['GET','POST'])
def train():
    data = request.get_json()
    # print(data)
    try:
        trainer(data)
        return "intent successfully added"
    except Exception as e:
        print(f"Error in trainer: {e}")
        return "Internal Server Error", 500 # Return a 500 Internal Server Error response
    

@app.route('/trainer_bot',methods=['POST'])
def trainer_bot():

    data = request.get_json()
    print(data)
    try:
        train_bot()
        return "bot Successfully trained"
    except Exception as e:
        print(f"Error in trainer: {e}")
        return "Internal Server Error", 500 # Return a 500 Internal Server Error response


if __name__ == '__main__':
    app.run(debug=True)
