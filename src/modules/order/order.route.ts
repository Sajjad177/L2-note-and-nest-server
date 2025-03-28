import { Application, Router } from 'express';
import { OrderController } from './order.controller';
import auth from '../../middleware/auth';
import { USER_ROLES } from '../user/user.constant';
import validateRequest from '../../middleware/validateRequest';
import { OrderValidation } from './order.validation';

const router = Router();

router.post(
  '/create-order',
  auth(USER_ROLES.user, USER_ROLES.admin),
  OrderController.createOrder as Application,
);

router.get(
  '/verify',
  auth(USER_ROLES.admin, USER_ROLES.user),
  OrderController.verifyPayment as Application,
);

router.get(
  '/revenue',
  auth(USER_ROLES.admin, USER_ROLES.user),
  OrderController.getRevinue as Application,
);

router.get(
  '/',
  auth(USER_ROLES.admin, USER_ROLES.user),
  OrderController.getAllOrders as Application,
);

router.get(
  '/:orderId',
  auth(USER_ROLES.admin, USER_ROLES.user),
  OrderController.getSingleOrder as Application,
);

router.put(
  '/:orderId',
  auth(USER_ROLES.admin),
  validateRequest(OrderValidation.updateOrderValidation),
  OrderController.updateOrder as Application,
);

router.delete(
  '/:orderId',
  auth(USER_ROLES.admin),
  OrderController.deletedOrder as Application,
);


router.get(
  '/my-orders/:id',
  auth(USER_ROLES.user),
  OrderController.getMyOrders as Application
)


export const OrderRoute = router;
