import numpy as np
import matplotlib.pyplot as plt
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from io import BytesIO

app = Flask(__name__)
CORS(app)

# Global variables for A and B matrices
A = None
B = None

@app.route('/')
def home():
    return 'Home Page Route'

@app.route('/api/set_matrices', methods=['POST'])
def set_matrices():
    global A, B

    # Get matrix A and B values from the request JSON
    data = request.get_json()
    A = np.array(data['matrix_A'])
    B = np.array(data['matrix_B'])

    return jsonify({'message': 'Matrices A and B set successfully!'}), 200

@app.route('/api/plot_system', methods=['GET'])
def plot_system():
    global A, B

    if A is None or B is None:
        return jsonify({'error': 'Matrices A and B are not set. Please set them using the /api/set_matrices endpoint.'}), 400

    # Define the initial state vector x0
    x0 = np.array([0, 0, 0])

    # Define the input vector u (for example, a step input)
    u = np.array([1])

    # Define the time vector
    t = np.linspace(0, 100, 10000)  # Adjust time span and number of points as needed

    # Simulate the system using state space equations
    x = np.zeros((len(t), 3))  # Initialize state vector over time
    x[0] = x0

    for i in range(1, len(t)):
        dxdt = np.dot(A, x[i-1]) + np.dot(B, u)
        x[i] = x[i-1] + dxdt * (t[i] - t[i-1])

    # Calculate the system's output (e.g., a linear combination of state variables)
    # Modify this equation according to your system's output definition
    y = np.sum(x, axis=1)

    # Plot the system's output
    plt.figure(figsize=(10, 6))
    plt.plot(t, y, label='System Output')
    plt.xlabel('Time')
    plt.ylabel('System Output')
    plt.title('System Output over Time')
    plt.legend()
    plt.grid(True)

    # Save the plot to a BytesIO object
    img_buf = BytesIO()
    plt.savefig(img_buf, format='png')
    img_buf.seek(0)

    # Clear the plot to avoid memory issues
    plt.clf()
    plt.close()

    # Return the image as a response
    return send_file(img_buf, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)
