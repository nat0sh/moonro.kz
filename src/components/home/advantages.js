import React from 'react'
import './home.css'

export default function Advantages() {
  return (
    <section className="advantages">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section-title mt-3">
                            <span>Наши преимущества</span>
                        </h2>
                    </div>
                </div>

                <div className="items">
                    <div className="row gy-3"> 
                        <div className="col-lg-3 col-sm-6">
                            <div className="item">
                                <span className="my-2">
                                    <i className="bi bi-truck"></i>
                                </span>
                                <p>Быстрая доставка в любую точку Казахстана</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="item">
                                <span className="my-2">
                                    <i className="bi bi-boxes"></i>
                                </span>
                                <p>Широкий ассортимент чехлов и аксессуаров</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="item">
                                <span className="my-2">
                                    <i className="bi bi-cash-coin"></i>
                                </span>
                                <p>Приятные и конкурентные цены</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="item">
                                <span className="my-2">
                                    <i className="bi bi-shield-check"></i>
                                </span>
                                <p>Качество, которому можно доверять.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}
