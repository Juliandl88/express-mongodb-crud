import { Router } from 'express';

const router = Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/about", (req, res) => {
    res.render("view");
});

export default router;