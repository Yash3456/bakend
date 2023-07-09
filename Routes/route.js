import express from 'express';
import {Usersignup,Userlogin} from '../Controller/usercontroller.js'
import { Getproducts,Getproductbyid } from '../Controller/ProductController.js';

const router = express.Router();

router.post("/signup",Usersignup);
router.post("/login",Userlogin);


router.get("/products",Getproducts);
router.get("/product/:id",Getproductbyid);

export default router;