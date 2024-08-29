from flask import request, jsonify
from app import app
from app.git_commands import run_git_command, get_git_levels

@app.route('/execute', methods=['POST'])
def execute_command():
    data = request.json
    command = data.get('command', '')
    result = run_git_command(command)
    return jsonify(result)

@app.route('/levels', methods=['GET'])
def levels():
    levels = get_git_levels()
    return jsonify(levels)
