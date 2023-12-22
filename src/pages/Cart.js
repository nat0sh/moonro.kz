import React, { useEffect } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart-wrapper">
      <Header orders={cart.orders} onDelete={removeFromCart} />
      <nav className='my-breadcrumb' style={{ "--bs-breadcrumb-divider": "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\"%3E%3Cpath d=\"M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\" fill=\"%236c757d\"/%3E%3C/svg%3E')" }} aria-label="breadcrumb">
          <ol className="breadcrumb">
              <li className="breadcrumb-item br-home"><Link to='/'>Главная</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Корзина</li>
          </ol>
      </nav>

      <div class="container-fluid">
        <div class="row">

            <div class="col-lg-8 mb-3 mt-3">
                <div class="cart-content p-3 h-100 bg-white">

                    <div class="table-responsive">
                        <table class="table align-middle table-hover">
                            <thead class="table-dark">
                                <tr>
                                    <th>Фото</th>
                                    <th>Товар</th>
                                    <th>Цена</th>
                                    <th>Кол.</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="product-img-td">
                                        <Link to='/Apple/Iphone%2011/2'>
                                            <img src="/case_img/iphone_11_2.jpg" alt="" />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to='/Apple/Iphone%2011/2' className="cart-content-title">
                                            Розовый чехол на Iphone 11
                                        </Link>
                                    </td>
                                    <td>1790₸</td>
                                    <td>
                                        <input type="number" value="1" class="form-control cart-qty" />
                                    </td>
                                    <td>
                                        <button class="btn btn-danger rounded-4 p-2 d-flex align-items-center">
                                          <i class="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="product-img-td">
                                        <Link to='/Apple/Iphone%2011/5'>
                                            <img src="/case_img/iphone_11_5.jpg" alt="" />
                                        </Link>
                                    </td>
                                    <td><Link to='/Apple/Iphone%2011/5' class="cart-content-title">
                                        Прозрачный чехол на Iphone SE</Link></td>
                                    <td>3180₸</td>
                                    <td>
                                        <input type="number" value="2" class="form-control cart-qty" />
                                    </td>
                                    <td>
                                        <button class="btn btn-danger rounded-4 p-2 d-flex align-items-center">
                                          <i class="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="product-img-td">
                                        <Link to='/Apple/Iphone%2011/6'>
                                            <img src="/case_img/iphone_11_6.jpg" alt="" />
                                        </Link>
                                    </td>
                                    <td><Link to='/Apple/Iphone%2011/6' class="cart-content-title">Чехол с принтом на Iphone XS</Link></td>
                                    <td>1690₸</td>
                                    <td>
                                        <input type="number" value="1" class="form-control cart-qty"/>
                                    </td>
                                    <td>
                                        <button class="btn btn-danger rounded-4 p-2 d-flex align-items-center">
                                          <i class="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="5" class="text-end">
                                        <a href="cart.html" class="btn btn-outline-secondary text-decoration-none">Очистить корзину</a>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                </div>
            </div>

            <div class="col-lg-4 mb-3">

                <div class="cart-summary p-3 sidebar">
                    <h5 class="mb-2"><span>Стоимость заказа</span></h5>

                    <div class="d-flex justify-content-between my-3">
                        <h6>Без скидки</h6>
                        <h6>7000₸</h6>
                    </div>

                    <div class="d-flex justify-content-between my-3">
                        <h6>Скидка</h6>
                        <h6>-340₸</h6>
                    </div>

                    <div class="d-flex justify-content-between my-3 border-bottom">
                        <h6>С учетом скидки</h6>
                        <h6>6660₸</h6>
                    </div>

                    <div class="d-flex justify-content-between my-3">
                        <h3>Итого</h3>
                        <h3>6660₸</h3>
                    </div>

                    <div class="d-grid">
                        <Link to='/checkout' class="btn btn-danger">Оформить заказ</Link>
                    </div>

                </div>

            </div>

        </div>
    </div>

      <Footer />
    </div>
  );
};

export default Cart;
