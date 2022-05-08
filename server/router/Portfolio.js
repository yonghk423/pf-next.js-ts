import express from 'express';

const router = express.Router();

const detailPagesPortFolio = {

}

router.get('/', (req, res) => {
    res.status(201).send(detailPagesPortFolio);
})

export default router;