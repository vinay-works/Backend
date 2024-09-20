import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

app.get('/', (req, res) => {
    res.send('Thank You For Your Response');
});

app.post('/', (req, res) => { 
    const { fname, lname, Mobile, email, dob, gender, Country, Image } = req.body;

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
            <img src="${Image}" alt="User Image"/>
        </body>
    </html>
    `;

    res.send(responseMessage);
});

export default app;
