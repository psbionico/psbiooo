import {Router} from 'express'
import bodyParser from 'body-parser';
import Usuario from './models/Usuario';
const router=Router()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) => {
    res.render('/index.html');
});

router.get('/formulario.html', (req, res) => {
    res.render('/formulario.html');
});

router.post("/form", urlencodedParser, async(req,res) => {
const usuario = Usuario(req.body)

await usuario.save()

res.send("Guardado");
});
export default router;