const express = require("express");

// Constant
const HOST = "localhost";
const PORT = 8000;
const app = express();

/* Middleware */
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.post("/form", (req, res) => {
	const formData = req.body;
	console.log(formData);

	if (res.ok) {
		res.send("Form data received successfully!");
	}
});

app.listen(PORT, HOST, () => {
	console.log(`Server is running on http://${HOST}:${PORT}`);
});
