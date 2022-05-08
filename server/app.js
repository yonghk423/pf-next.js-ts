import express from 'express';
import KeepMemoriesRouter from './router/KeepMemories.js';
import NaraMalRouter from './router/NaraMal.js'

const app = express();

app.get('/', (req, res) => {
    res.send("hello");
})

app.use('/detailPagesPortFolio')
app.use('/detailPagesKeepMemories', KeepMemoriesRouter);
app.use('/detailPagesNaramal', NaraMalRouter);

app.use((req, res ) => {
    res.sendStatus(404);
})

app.use((error, req, res ) => {
    console.error(error);
    res.sendStatus(500);
})

app.listen(process.env.PORT || 8080);