import os
from app import create_app

app = create_app()

if __name__ == '__main__':
    # Running the app on port 5000
    app.run(debug=True, port=5000)
