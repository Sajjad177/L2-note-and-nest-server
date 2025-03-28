import { Router } from 'express';
import { userRoutes } from '../modules/user/user.route';
import { ProductRoute } from '../modules/product/product.route';
import { OrderRoute } from '../modules/order/order.route';
import { authRoutes } from '../modules/auth/auth.route';
import { messageRoute } from '../modules/message/message.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/products',
    route: ProductRoute,
  },
  {
    path: '/orders',
    route: OrderRoute,
  },
  {
    path: '/user',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/message',
    route: messageRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;