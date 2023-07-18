const express = require("express");
const cors = require("cors");

// Constant
const HOST = "localhost";
const PORT = 3000;
const app = express();

/* Middleware */
app.use(cors());
app.use(express.urlencoded({ extended: true })); // Parse form data

/* Routes */
app.get("/", (req, res) => {
	const formData = req.body;
	console.log(formData);

	res.send("Form data received successfully!");
});

app.listen(PORT, HOST, () => {
	console.log(`Server is running on http://${HOST}:${PORT}`);
});
