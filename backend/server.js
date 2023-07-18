const express = require("express");

// Constant
const HOST = "localhost";
const PORT = 8000;
const app = express();

/* Middleware */
app.use(express.urlencoded({ extended: true }));

/* Routes */
/* This looks for http://127.0.0.1:8080/form */
app.post("/form", (req, res) => {
	try {
		const formData = req.body;
		console.log(formData);
		res.redirect("http://127.0.0.1:8080/sucess");
	} catch (error) {
		res.status(500).json({ status: "error", message: error.message });
	}

	// if (res.ok) {
	// 	res.send("Form data received successfully!");
	// 	try {
	// 		res.redirect("/success");

	// 		const formData = req.body;
	// 		console.log(formData);
	// 	} catch (error) {
	// 		res.status(500).json({ status: "error", message: error.message });
	// 	}
	// } else {
	// 	console.error("Error: ", error);
	// }
});

app.post("/json", (req, res) => {
	try {
		const formData = req.body;
		console.log(formData);
		res.redirect("http://127.0.0.1:8080/sucess");
	} catch (error) {
		res.status(500).json({ status: "error", message: error.message });
	}
});

app.listen(PORT, HOST, () => {
	console.log(`Server is running on http://${HOST}:${PORT}`);
});
