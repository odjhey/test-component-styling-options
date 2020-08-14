import { IProductFormik } from 'types';

export function roundOffTwoDecimals(num: number): number {
  return parseFloat((Math.round(num * 100) / 100).toFixed(2));
}
// GET CHECKED === true items
export function getItemTotalPrice(item: {
  originalPrice: number;
  discount: number;
  quantity: number;
  discounted: boolean;
}): number {
  const {
    discount: discountPercent,
    originalPrice,
    quantity,
    discounted,
  } = item;
  const discount = (discountPercent / 100) * originalPrice;

  const discountedPrice = originalPrice - discount;
  const totalPrice = originalPrice * quantity;
  const discountedTotalPrice = discountedPrice * quantity;

  return discounted
    ? roundOffTwoDecimals(discountedTotalPrice)
    : roundOffTwoDecimals(totalPrice);
}

export function getTotalOrderPrice(order: {
  items: Array<IProductFormik>;
}): number {
  const { items } = order;
  const totalPrice = items.reduce(
    (totalPrice: number, item: IProductFormik) =>
      totalPrice + item.totalItemPrice,
    0
  );
  return roundOffTwoDecimals(totalPrice);
}

export function getTotalSaved(order: { items: Array<IProductFormik> }): number {
  const { items } = order;
  const itemsWithoutDiscount = items.map((item: IProductFormik) => {
    return {
      ...item,
      totalItemPrice: item.quantity * item.price,
    };
  });
  const totalOrigPrice = itemsWithoutDiscount.reduce(
    (totalSaved: number, item: IProductFormik) =>
      totalSaved + item.totalItemPrice,
    0
  );
  const totalSaved =
    roundOffTwoDecimals(totalOrigPrice) - getTotalOrderPrice({ items });

  return roundOffTwoDecimals(totalSaved);
}
