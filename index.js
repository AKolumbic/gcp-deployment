const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static('react-app/build'));

app.listen(port, () => {
    console.log(`App listening on port:${port}`);
});

app.get(`/api/endpoint/:id`, (request, response) => {
    const id = request.params.id;
    const record = getRecord(id);

    if(!record) {
        response.status(404).send({ 
            error: `Error retrieving response with ID#${id}`
        })
    } else {
        response.send({ data: record });
    }
});

function getRecord(id) {
    const records = [
        { id: 1, name: 'test1' },
        { id: 2, name: 'test2' },
        { id: 3, name: 'test3' },
        { id: 4, name: 'test4' },
        { id: 5, name: 'test5' },
    ];

    return records.find((record) => record.id == id);
};