import subprocess

def run_git_command(command):
    try:
        result = subprocess.run(
            command, shell=True, check=True, capture_output=True, text=True
        )
        return {'output': result.stdout, 'error': None}
    except subprocess.CalledProcessError as e:
        return {'output': None, 'error': e.stderr}

def get_git_levels():
    levels = [
        {
            'level': 1,
            'description': 'Initialize a Git repository and make your first commit.',
            'command': 'git init && git add . && git commit -m "Initial commit"',
        },
        {
            'level': 2,
            'description': 'Create a new branch and switch to it.',
            'command': 'git branch new-feature && git checkout new-feature',
        },
        # Add more levels as needed
    ]
    return levels
