import React, { ReactNode, Fragment } from 'react';
import {
  Formik,
  Field,
  Form,
  FormikProps,
  FormikHelpers,
  FieldArray,
  getIn,
  FormikErrors,
  //   ErrorMessage,
} from 'formik';
import ShoppingCartItem from './ShoppingCartItem';
import * as Yup from 'yup';

//types
import { IProduct, IOrders, IOrdersFormik, IProductFormik } from '../../types';
import { getCheckOutItems } from './shopping-cart';
import { styles } from './styles';
import { getTotalOrderPrice, getTotalSaved } from '../../commons/discount';
import FeaturedItemList from './FeaturedItemList';

const ShoppingCart = (props: {
  items: Array<IProduct>;
  featuredItems: Array<IProduct>;
  total: number;
  onSubmit(orders: IOrders): void;
  addToWishList(item: IProduct): void;
  addToCart(item: IProduct): void;
  addToFavorites(item: IProduct): void;
}) => {
  const { items, total, featuredItems } = props;
  //controls
  const { onSubmit, addToWishList, addToCart, addToFavorites } = props;

  const initialValues: IOrdersFormik = {
    items: items.map((item: IProduct) => {
      const { price } = item;
      return { ...item, checked: true, totalItemPrice: price, quantity: 1 };
    }),
    total: total,
    totalSaved: 100,
  };

  //error for array items
  const ErrorMessage = ({
    name,
    children,
  }: {
    name: string;
    children: (errorMessage: string) => ReactNode;
  }) => (
    <Field
      name={name}
      render={({ form }: { form: FormikProps<IOrdersFormik> }) => {
        const error = getIn(form.errors, name);
        const touch = getIn(form.touched, name);
        return touch && error ? children(error as string) : null;
      }}
    />
  );

  //error for field array: items
  const ItemArrayError = (errors: FormikErrors<IOrdersFormik>) =>
    typeof errors.items === 'string' ? (
      <div style={styles.error}>{errors.items}</div>
    ) : null;

  //schema for orders
  const OrderSchema = Yup.object().shape({
    items: Yup.array()
      .of(
        Yup.object().shape({
          id: Yup.string().required('Required'),
          name: Yup.string().required('Required'),
          checked: Yup.boolean(),
          availableQuantity: Yup.number().required('Required'),
          quantity: Yup.number().when('checked', {
            is: true, // alternatively: (val) => val == true
            then: Yup.number()
              .min(1, 'Add Product Quantity')
              .max(Yup.ref('availableQuantity'), `Exceeds quantity limit`),
          }),
          price: Yup.number().required('Required'),
          imgSrc: Yup.string().required('Required'),
        })
      )
      .required('No Items In Cart')
      .min(1, 'No Items In Cart'),
  });

  return (
    <div style={styles.cart}>
      <Formik
        initialValues={initialValues}
        validationSchema={OrderSchema}
        onSubmit={(
          values: IOrdersFormik,
          { setSubmitting }: FormikHelpers<IOrdersFormik>
        ) => {
          //get items with checked === true
          setTimeout(() => {
            onSubmit({
              ...values,
              items: getCheckOutItems(values),
              total: getTotalOrderPrice({ items: values.items }),
              totalSaved: getTotalSaved({ items: values.items }),
            });
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ values, errors }) => (
          <Form>
            <h1>My Cart</h1>
            <FieldArray name="items">
              {({ remove, replace }) => (
                <div style={styles.main}>
                  {values.items.length > 0 &&
                    values.items.map((item: IProductFormik, index) => (
                      <div style={styles.card} key={index}>
                        <input
                          type="checkbox"
                          name={`${item.name + item.id}`}
                          checked={item.checked}
                          onChange={(event) =>
                            replace(index, {
                              ...item,
                              checked: event.target.checked,
                            })
                          }
                        />
                        <ShoppingCartItem
                          item={item}
                          error={
                            <ErrorMessage name={`items[${index}].quantity`}>
                              {(msg) => <div style={styles.error}>{msg}</div>}
                            </ErrorMessage>
                          }
                          onChange={(item: IProductFormik) =>
                            replace(index, item)
                          }
                          deleteItem={() => remove(index)}
                          addToWishList={() => addToWishList(item)}
                        ></ShoppingCartItem>
                      </div>
                    ))}
                </div>
              )}
            </FieldArray>
            <footer style={styles.summary}>
              <FeaturedItemList
                items={featuredItems}
                addToCart={(item) => addToCart(item)}
                addToFavorites={(item) => addToFavorites(item)}
              ></FeaturedItemList>
              <Footer
                saved={getTotalSaved({ items: values.items })}
                total={getTotalOrderPrice({ items: values.items })}
                error={ItemArrayError(errors)}
                controls={<button type="submit">Proceed Checkout</button>}
              ></Footer>
            </footer>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export interface IFooter {
  saved: number;
  total: number;
  error: ReactNode;
  controls: ReactNode;
}

const Footer = (footerProps: IFooter) => {
  const { saved, total, error } = footerProps;
  //controls
  const { controls } = footerProps;

  return (
    <Fragment>
      {error}
      <span>Total Saved: ₱{saved}</span>
      <span>Total: ₱{total}</span>
      {controls}
    </Fragment>
  );
};

export default ShoppingCart;
