import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <div>
        <Header />
            <nav className='my-breadcrumb' style={{ "--bs-breadcrumb-divider": "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\"%3E%3Cpath d=\"M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\" fill=\"%236c757d\"/%3E%3C/svg%3E')" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item br-home"><Link to='/'>Глваная</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Контакты</li>
                </ol>
            </nav>

            <section className="contact-us bg-white mt-2">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-lg-6 col-md-8 col-sm-12">
                            <h2>Форма обратной связи</h2>
                            <form action="обработчик.php" method="post">
                                <div className="mb-3">
                                    <label for="name" className="form-label">Имя</label>
                                    <input type="text" className="form-control" id="name" name="name" required />
                                </div>
                                <div class="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" required />
                                </div>
                                <div className="mb-3">
                                    <label for="message" className="form-label">Сообщение</label>
                                    <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-danger">Отправить</button>
                            </form>
                    </div>
                    <div className="col-lg-6 col-md-4 col-sm-12">
                        <div className="info p-4 d-block">
                            <h2>Наш адрес</h2>
                            <p>050000, Казахстан, Алматы, Манаса 34/1</p>
                            <h2>Контактная информация</h2>
                            <div>
                                <p>Телефон: +7 (778) 701-27-04</p>
                                <p>Email: moonro@gmail.com</p>
                            </div>
                            <div className="m-2 mt-0">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d942.5325881445256!2d76.85067909531784!3d43.226936336872754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369b6749ffb13%3A0x5cf2148003286b!2z0YPQu9C40YbQsCDQo9C70YPQs9Cx0LXQutCwIDQ2LzQ3LCDQkNC70LzQsNGC0YsgMDUwMDAw!5e0!3m2!1sru!2skz!4v1697379030865!5m2!1sru!2skz"
                                    width="100%" height="100%" frameBorder="0" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  );
};

export default Contacts;
