import numpy as np
import matplotlib.pyplot as plt

# Matrix sistem (A) dan input (B)
A = np.array([[0, 1, 0],
              [0, 0, 1],
              [-1, -2, -3]])

B = np.array([[0],
              [0],
              [1]])

# initial state vector x0
x0 = np.array([0, 0, 0])

# Vector Input (ini step)
u = np.array([1])

# time vector
t = np.linspace(0, 100, 10000)  # Adjust time span and number of points as needed

# Simulasi & Perhitungan
x = np.zeros((len(t), 3))  # Perubahan state vector setiap waktu
x[0] = x0

for i in range(1, len(t)):
    dxdt = np.dot(A, x[i-1]) + np.dot(B, u)
    x[i] = x[i-1] + dxdt * (t[i] - t[i-1])

# Output sistem (Sederhana ae)
y = np.sum(x, axis=1)

# System plot
plt.figure(figsize=(10, 6))
plt.plot(t, y, label='System Output')
plt.xlabel('Time')
plt.ylabel('System Output')
plt.title('System Output over Time')
plt.legend()
plt.grid(True)
plt.show()
