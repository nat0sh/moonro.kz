import React from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { Link } from 'react-router-dom';

const Delivery = () => {
  return (
    <div>
        <Header />
            <nav className='my-breadcrumb' style={{ "--bs-breadcrumb-divider": "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\"%3E%3Cpath d=\"M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\" fill=\"%236c757d\"/%3E%3C/svg%3E')" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item br-home"><Link to='/'>Главная</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Доставка</li>
                </ol>
            </nav>

            <section className="delivery-info">
            <div className="container bg-white p-4 pt-3">
                <h4>Доставка по Казахстану</h4>
                <p>Наш магазин предоставляет услугу доставки по городам Казахстана с использованием "Казпочты". Этот способ доставки обеспечивает удобство и надежность получения вашего заказа в различных регионах Казахстана.</p>
                <h5>Условия доставки:</h5>
                <ul>
                <li>Сроки доставки могут варьироваться в зависимости от места назначения, но обычно составляют от нескольких дней до недели.</li>
                <li>Стоимость доставки рассчитывается в зависимости от веса и размера отправления, а также удаленности места доставки. Точные расценки можно уточнить при оформлении заказа.</li>
                <li>При оформлении заказа, вы должны указать адрес доставки в город Казахстана, включая почтовый индекс и подробное описание местоположения.</li>
                <li>Средние сроки доставки указаны для различных городов Казахстана. Пожалуйста, учтите, что сроки могут изменяться в зависимости от обстоятельств.</li>
                <li>Стоимость доставки оплачивается получателем, в зависимости от региона доставки.</li>
                </ul>

                <hr />

                <h4>Доставка в Алматы</h4>
                <p>Наш магазин предоставляет услугу доставки в городе Алматы с использованием "Яндекс.Курьера". Этот способ доставки обеспечивает быстрое и удобное получение вашего заказа в столице Казахстана.</p>
                <h5>Условия доставки:</h5>
                <ul>
                <li>Сроки доставки в Алматы обычно составляют от 30 минут до 1-2 часов, в зависимости от местоположения и времени заказа.</li>
                <li>Стоимость доставки рассчитывается в зависимости от расстояния и веса заказа. Точные расценки можно уточнить при оформлении заказа.</li>
                <li>При оформлении заказа, укажите адрес доставки в Алматы и дополнительные инструкции, если необходимо.</li>
                <li>Сроки доставки могут изменяться в зависимости от времени суток и текущей загрузки курьеров.</li>
                <li>Стоимость доставки оплачивается получателем при получении заказа.</li>
                </ul>

                <hr />

                <h4>Самовывоз</h4>
                <p>Если вы предпочитаете забрать ваш заказ лично, мы предоставляем удобную услугу самовывоза из нашей точки в городе Алматы. Самовывоз — это отличный способ получить ваш заказ в удобное для вас время и без дополнительных затрат на доставку.</p>
                <h5>Условия самовывоза:</h5>
                <ul>
                <li>Адрес нашей точки самовывоза: [Адрес точки]. Вы можете приехать по этому адресу в рабочее время [Указать рабочее время точки].</li>
                <li>Для самовывоза необходимо предварительно оформить заказ на нашем сайте или связаться с нами по телефону [Номер телефона] для уточнения наличия товара.</li>
                <li>Пожалуйста, имейте при себе удостоверение личности для подтверждения личности при получении заказа.</li>
                <li>Оплата заказа может быть произведена на месте при самовывозе наличными или через электронные платежи, в зависимости от ваших предпочтений.</li>
                </ul>
                <p>Самовывоз из точки в Алматы позволяет вам получить ваш заказ без лишних ожиданий и дополнительных расходов на доставку. Просто приходите по указанному адресу, и мы будем рады предоставить вам ваш заказ.</p>
            </div>
            </section>
        <Footer />
    </div>
  );
};

export default Delivery;
