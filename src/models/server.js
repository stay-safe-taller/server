import express from 'express';
import cors from 'cors';
import { dbConnectMongo } from '../db/config';

import routerLogin from '../routes/login';
import routerRegister from '../routes/register';
import routerUser from '../routes/user';

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.path = {
            user: '/user',
            login: '/login',
            register: '/register'
        };

        this.middlewares();
        this.connectDB();
        this.routes();
        this.listen();
    };

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors({
            credentials: true,
            origin: '*'
        }));
    };

    async connectDB(){
        await dbConnectMongo();
    }
    
    routes() {
        this.app.use(this.path.login, routerLogin);
        this.app.use(this.path.register, routerRegister);
        this.app.use(this.path.user, routerUser);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenner on port ${this.port}`);
        });
    };
};

export default Server;