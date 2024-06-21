import { Router } from "express";
import * as BC from "./book.controller.js"

const router = Router();

router.post("/" , BC.createBooks)
router.get("/" , BC.getBooks)
router.get("/:id" , BC.getBooksById)
router.patch("/" , BC.updateBook)
router.delete("/:id" , BC.deleteBook)





export default router;