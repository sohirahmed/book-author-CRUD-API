import { Router } from "express";
import * as AC from "./author.controller.js"

const router = Router();

router.post("/" , AC.createAuthor)
router.get("/" , AC.getAuthor)
router.get("/:id" , AC.getAuthorById)
router.patch("/" , AC.updateAuthor)
router.delete("/:id" , AC.deleteAuthor)





export default router;