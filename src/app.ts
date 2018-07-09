import express from 'express';
import UserRoutes from './user-routes';

const app = express();
const PORT = process.env.PORT || 3007;
const userRoutes = UserRoutes();

app.get('/users', userRoutes.list);

app.listen(PORT, function(){
    console.log("app starting on port", PORT);
});
