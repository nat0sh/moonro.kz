import React from 'react'
import about from './img/about.jpg'
import './home.css'

export default function AboutUs() {
  return (
    <section className="about-us" id="about">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h2 className="section-title">
                                <span>О магазине</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <img src={about} alt='about' />
                        </div>
                        <div className="col-lg-8 col-sm-6 align-items-center pt-1">
                            <p>Наши чехлы – это не просто аксессуары, они отражают ваш стиль и защищают ваши ценные устройства. Наш магазин специализируется на продаже качественных чехлов для смартфонов, планшетов и ноутбуков. Мы предлагаем широкий ассортимент моделей, от стильных и элегантных до практичных и надежных.
                                <br /><br />Наша команда состоит из профессионалов, которые следят за последними тенденциями в мире гаджетов и моды. Мы гордимся качеством наших продуктов и предоставляем удовлетворение гарантию. Если вы ищете идеальный чехол для вашего устройства, вы пришли по адресу. Воплотите свой стиль с нашими чехлами, и пусть ваши гаджеты остаются в безопасности и выглядят отлично.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
  )
}
