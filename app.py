from os import X_OK
from flask import Flask ,render_template,url_for ,jsonify
from flask_restful import Resource, Api


app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('index.html')



api = Api(app)

class HelloWorld(Resource):
    def get(self):
        x = ['mustapha' , 'belkassem' ,'algeria']
        return jsonify(x)

todos = {}

class TodoSimple(Resource):
    def get(self, todo_id):
        return {todo_id: todos[todo_id]}

    def put(self, todo_id):
        todos[todo_id] = 'mustapha'
        return {todo_id: todos[todo_id]}


api.add_resource(TodoSimple, '/mus/<string:todo_id>')

api.add_resource(HelloWorld, '/tomahook')





if __name__ == '__main__':
    app.run(debug=True)