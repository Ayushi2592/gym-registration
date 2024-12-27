document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Collect form data
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const batch = document.getElementById("batch").value;
    const payment = document.getElementById("payment").value;
  
    // Mock API call
    registerStudent(name, address, batch, payment)
      .then((response) => {
        document.getElementById("status-message").textContent = response.message;
        document.getElementById("status-message").style.color = "green";
      })
      .catch((error) => {
        document.getElementById("status-message").textContent = error.message;
        document.getElementById("status-message").style.color = "red";
      });
  });
  
  // Mock register function
  function registerStudent(name, address, batch, payment) {
    return new Promise((resolve, reject) => {
      // Simulate backend validation
      setTimeout(() => {
        if (payment >= 500) {
          resolve({ message: "Registration successful!" });
        } else {
          reject({ message: "Payment failed. Please try again." });
        }
      }, 1000);
    });
  }
  