from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/hello', methods=["Get"])
def home():
    return "hello there"


app.run(debug=True)
