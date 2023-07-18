const express = require("express");
const path = require("path");

// Constant
const HOST = "localhost";
const PORT = 3000;
const app = express();

/* Middleware */
app.use(express.urlencoded({ extended: true }));

/* Routes */
app.post("/form", (req, res) => {
	try {
		const formData = req.body;
		console.log(formData);
		// Extract the data

		res.redirect("/success");
	} catch (error) {
		res.status(500).json({ status: "error", message: error.message });
	}
});

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/success", (req, res) => {
	res.sendFile(path.join(__dirname, "success.html"));
});

app.post("/json", (req, res) => {
	try {
		const formData = req.body;
		console.log(formData);
		res.json({ status: "success", message: "Data received" });
		//ajax request
	} catch (error) {
		res.status(500).json({ status: "error", message: error.message });
	}
});

app.listen(PORT, HOST, () => {
	console.log(`Server is running on http://${HOST}:${PORT}`);
});
