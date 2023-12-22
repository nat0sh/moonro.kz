import React, { useEffect } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Link } from 'react-router-dom';

const Checkout = () => {

  return (
    <div className="checkout-page">
      <Header />
      <nav className='my-breadcrumb' style={{ "--bs-breadcrumb-divider": "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\"%3E%3Cpath d=\"M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\" fill=\"%236c757d\"/%3E%3C/svg%3E')" }} aria-label="breadcrumb">
          <ol className="breadcrumb">
              <li className="breadcrumb-item br-home"><Link to='/'>Главная</Link></li>
              <li className="breadcrumb-item active"><Link to='/cart'>Корзина</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Оформление заказа</li>
          </ol>
      </nav>

      <div class="container">
            <form action="" class="needs-validation" novalidate>
                <div class="row">
                    <div class="col-lg-8 mt-3">
                        <div class="checkout p-3 h-100 bg-white">
                            <h2><span>Оформить заказ</span></h2>

                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="name" class="form-label">Ваше имя</label>
                                    <input type="text" id="name" name="name" class="form-control"
                                    aria-label="Name" required />
                                </div>

                                <div class="col-md-6">
                                    <label for="email" class="form-label">Email</label>
                                    <input type="email" name="email" id="email" class="form-control"
                                        placeholder="example@mail.com" aria-label="Email" required />
                                </div>

                                <div class="col-md-6">
                                    <label for="phone" class="form-label">Телефон</label>
                                    <input type="tel" name="phone" id="phone" class="form-control"
                                        placeholder="+7 (777) 777 77 77" aria-label="Phone" required />
                                </div>

                                <div class="col-md-6">
                                    <label for="delivery" class="form-label">Доставка</label>
                                    <select id="delivery" name="delivery" class="form-select" aria-label="Delivery"
                                        required>
                                        <option value="option1">Самовывоз</option>
                                        <option value="option2">Яндекс курьер</option>
                                        <option value="option3">Казпочта</option>        
                                    </select>
                                </div>

                                <div class="col-md-6">
                                    <label for="city" class="form-label">Город</label>
                                    <input type="text" name="city" id="city" class="form-control"
                                     aria-label="City" required />
                                </div>

                                <div class="col-md-6">
                                    <label for="address" class="form-label">Адрес</label>
                                    <input type="text" name="address" id="address" class="form-control"
                                        placeholder="Улица, дом, квартира" aria-label="Address" required />
                                </div>

                                <div class="col">
                                    <label for="comment" class="form-label">Комментарий</label>
                                    <textarea class="form-control" name="comment" id="comment" rows="3"
                                    ></textarea>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="col-lg-4 mb-3">
                        <div class="cart-summary p-3 sidebar h-100">
                            <h5 class="h2"><span>Стоимость заказа</span></h5>

                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Товар</th>
                                            <th class="text-end">Итого</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Силиконовый розовый чехол на Iphone 11
                                                <small>(1790₸) x 1</small>
                                            </td>
                                            <td class="text-end">1790₸</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Полупрозрачный чехол на Iphone SE
                                                 <small>(1690₸) x 2</small>
                                            </td>
                                            <td class="text-end">3180₸</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Силиконовый чехол на Iphone XS <small>(1690₸) x 1</small>
                                            </td>
                                            <td class="text-end">1690₸</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="2" class="text-end">6660₸</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <div class="form-check">
                                <input name="payment-method" class="form-check-input" type="radio"
                                    id="payment-method1" value="payment-method1" checked required />
                                <label class="form-check-label" for="payment-method1">
                                    Оплата Kaspi.kz
                                </label>
                            </div>

                            <div class="form-check">
                                <input name="payment-method" class="form-check-input" type="radio"
                                    id="payment-method2" value="payment-method2" required />
                                <label class="form-check-label" for="payment-method2">
                                    Оплата картой
                                </label>
                            </div>

                            <div class="form-check">
                                <input name="payment-method" class="form-check-input" type="radio"
                                    id="payment-method3" value="payment-method3" required />
                                <label class="form-check-label" for="payment-method3">
                                    Оплата при получении
                                </label>
                            </div>

                            <div class="d-grid mt-3">
                                <button type="submit" class="btn btn-danger">Оформить</button>
                            </div>

                        </div>

                    </div>

                </div>

            </form>

        </div>

      <Footer />
    </div>
  );
};

export default Checkout;
