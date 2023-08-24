import express from "express";
import { obtenerAdministrador, obtenerAdministradores, login } from "../controllers/admins.controller";

const router = express.Router();

router.get('/', obtenerAdministradores);
router.get('/:id', obtenerAdministrador);
router.post('/login', login);

export default router;