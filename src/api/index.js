import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true })); //urlencoder from express



app.get('/',(req, res)=>{
    res.send('Thank You For Your Response ');
});

app.post('/yourdata', (req, res) => {
    const { fname, lname, Mobile, email, pwd, cpwd, dob, gender, Country, Image } = req.body;

    // Create a response message
    const responseMessage = `
    <html>
        <head>
            <link rel="stylesheet" type="text/css" href="/styles.css">
        </head>
        <body>
            <h1>User Data</h1>
            <p><strong>First Name:</strong> ${fname}</p>
            <p><strong>Last Name:</strong> ${lname}</p>
            <p><strong>Mobile Number:</strong> ${Mobile}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Country:</strong> ${Country}</p>
            <img src="${Image}" alt="You need to pay $100 to display"/>
        </body>
        </html>
    `;

    // Send the user data as the response
    res.send(responseMessage);
});

const PORT = process.env.PORT || 3000; 

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});