import express from 'express';
import * as empresaController from "../controllers/empresaController.js";

const router = express.Router();

router.get('/empresas', empresaController.getEmpresa);
router.post('/empresas', empresaController.createEmpresa);
router.put('/empresas/:cnpj', empresaController.updateEmpresa);
router.delete('/empresas/:cnpj', empresaController.deleteEmpresa);
router.get('/empresas/search', empresaController.searchEmpresa);

export default router;
