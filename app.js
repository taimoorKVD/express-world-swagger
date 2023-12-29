const express = require('express'), // *** require express *** //
    app = express(), // *** create an instance of express and store it as app (variable) *** //
    PORT = 3000, // *** assign a port number *** //
    swaggerUi = require('swagger-ui-express'),
    fs = require("fs"),
    YAML = require('yaml'),
    file  = fs.readFileSync('./swagger.yaml', 'utf8'),
    swaggerDocument = YAML.parse(file);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// ***
// simple hey route
// ***
app.get('/hey', (req, res) => res.send('Hey, Express World!'));

// ***
// staging hey route
// ***
app.get('/staging/hey', (req, res) => res.send('Hey, Express Staging World!'));

// ***
// send response
// ***
app.get('/send', (req, res) => {
    let send = [
        {
            name: "Mohammad Taimoor Hussain",
            age: 28,
            mobile: "+923131094717"
        },
        {
            name: "Mohammad Taimoor Hussain 2",
            age: 28,
            mobile: "+923131094717"
        },
        {
            name: "Mohammad Taimoor Hussain 3",
            age: 28,
            mobile: "+923131094717"
        }
    ];
    res.send(send);
});

// ***
// json response
// ***
app.get('/json', (req, res) => {
    let json = [
        {
            name: "Mohammad Taimoor Hussain",
            age: 28,
            mobile: "+923131094717"
        },
        {
            name: "Mohammad Taimoor Hussain 2",
            age: 28,
            mobile: "+923131094717"
        },
        {
            name: "Mohammad Taimoor Hussain 3",
            age: 28,
            mobile: "+923131094717"
        }
    ];
    res.json(json);
});

// ***
// params usage in route
// ***
app.get('/params/stack/:stack/version/:version', (req, res) => {
    let stack = req.params.stack,
        version = req.params.version;

    res.json({
        stack,
        version
    });
});

// ***
// query string usage in route
// ***
app.get('/query-string', (req, res) => {
   let stack = req.query.stack,
       version = req.query.version;

   res.json({
       stack,
       version
   });
});

// ***
// const server = app | starts the web server and logs a message
// ***
app.listen(PORT, () => console.log(`Server is running on Port:${PORT}`));