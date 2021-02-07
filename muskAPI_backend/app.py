from flask import Flask
from flask_restplus import Api, Resource, fields
from flask_cors import CORS, cross_origin
import json
import random

app = Flask(__name__)
api = Api(app)
CORS(app)

tweetsModel = api.model(
    "index", {"time": fields.Date, "tweet": fields.String, "status": fields.String, "image": fields.String})
with open('tweets.json') as f:
    tweets = json.load(f)


@api.route("/random")
class MuskAPI(Resource):
    def get(self):
        return tweets[str(random.randint(0, len(tweets)-1))]


if __name__ == "__main__":
    app.run(debug=True)
