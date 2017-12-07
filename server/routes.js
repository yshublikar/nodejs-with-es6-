import {Router} from 'express';
import music from './controllers/crud';

let route = Router();

route.post('/create', music.create);
route.get('/search', music.search);
route.delete('/remove/:id', music.remove);
route.put('/update/:id', music.update);

export default route;
 