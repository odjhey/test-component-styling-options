import { IOrdersFormik, IProductFormik } from '../../types';

// GET CHECKED === true items
export function getCheckOutItems(orders: IOrdersFormik): Array<IProductFormik> {
  const finalOrders = orders.items
    .filter((item: IProductFormik) => item.checked === true)
    .map((item: IProductFormik) => {
      return {
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        availableQuantity: item.availableQuantity,
        price: item.price,
        totalItemPrice: item.totalItemPrice,
        imgSrc: item.imgSrc,
        checked: item.checked,
        discount: item.discount,
      };
    });

  return finalOrders;
}
