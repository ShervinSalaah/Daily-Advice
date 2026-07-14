import express from "express"; 
import bodyParser from "body-parser"; 

const app = express(); 
const port = 3000; 

// ✅ Set EJS as the view engine
app.set('view engine', 'ejs');

// ✅ Body parser middleware
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

// ✅ Home route - renders the form
app.get("/", (req, res) => {
    res.render("index", { 
        letterCount: null,  // No count yet
        fullName: null,     // No name yet
        error: null         // No error yet
    }); 
});

// ✅ Handle form submission
app.post("/submit", (req, res) => {
    const { fname, lname } = req.body;
    
    // Validate input
    if (!fname || !lname || fname.trim() === "" || lname.trim() === "") {
        return res.render("index", { 
            letterCount: null,
            fullName: null,
            error: "Please enter both first and last name!"
        });
    }
    
    // Calculate total letters (remove spaces and count)
    const fullName = fname.trim() + " " + lname.trim();
    const letterCount = fullName.replace(/\s/g, '').length;
    
    // Render the form with results
    res.render("index", { 
        letterCount: letterCount,
        fullName: fullName,
        error: null
    });
});

// Start server
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
    console.log(`📍 Visit: http://localhost:${port}`);
});