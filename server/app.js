import express from 'express';
import KeepMemoriesRouter from './router/KeepMemories.js';

const app = express();

app.get('./', (req, res) => {
    res.send("hello");
})

// app.use('/detailPagesKeepMemories', KeepMemoriesRouter);

// app.use((req, res ) => {
//     res.sendStatus(404);
// })

// app.use((error, req, res ) => {
//     console.error(error);
//     res.sendStatus(500);
// })

app.listen(8080);