// api/yourdata.js
import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true })); // URL encoder from express
app.use(express.json()); // Add this if you're also accepting JSON data

app.get('/', (req, res) => {
    res.send('Thank You For Your Response');
});

app.post('/', (req, res) => { // Change the route to '/'
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
            <img src="${Image}" alt="User Image"/>
        </body>
    </html>
    `;

    // Send the user data as the response
    res.send(responseMessage);
});

// Export the app as a serverless function
export default app;
