import express from "express"; 

const app = express(); 
const port = 3000; 

app.get("/", (req,res) => {
    const today = new Date("June 24, 2023 11:13:00"); 
    const day = today.getDay(); 

    let type = "a weekday"; 
    let adv = "It's Time To Work Hard";

    if (day == 0 || day ==6){
        type = "a weekend"; 
        adv = "It's Time To Relax"; 
    } 

    res.render("index.ejs", {
        dayType: type,
        advice: adv, 
    }); 
});



app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);
}); 

