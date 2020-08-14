export interface IProduct {
  id: string;
  name: string;
  availableQuantity: number;
  price: number;
  discount: number;
  imgSrc: string;
  rating?: string;
}

export interface IProductFormik extends IProduct {
  checked: boolean;
  totalItemPrice: number;
  quantity: number;
}
export interface IOrders {
  items: Array<IProduct>;
  total: number;
  totalSaved: number;
}

export interface IOrdersFormik extends IOrders {
  items: Array<IProductFormik>;
}
