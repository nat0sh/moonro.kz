import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
        <div className="container-fluid">
            <div className="row ms-3">
                <div className="col-md-3 col-6">
                    <h4>Информация</h4>
                    <ul className="list-unstyled">
                        <li><Link to='/'>Главная</Link></li>
                        <li><Link to='/#about'>О магазине</Link></li>
                        <li><Link to='/delivery'>Доставка</Link></li>
                    </ul>
                </div>

                <div className="col-md-3 col-6">
                    <h4>Каталог</h4>
                    <ul className="list-unstyled">
                        <li><Link to='/Apple'>Apple</Link></li>
                        <li><Link to='/Samsung'>Samsung</Link></li>
                        <li><Link to='/Xiaomi'>Xiaomi</Link></li>
                    </ul>
                </div>

                <div className="col-md-3 col-6">
                    <h4>Контакты</h4>
                    <ul className="list-unstyled">
                        <li><a href="tel:+77787012704">+7-778-701-27-04</a></li>
                        <li><a href="https://go.2gis.com/uvcj1">г.Алматы, Манаса 34/1</a></li>
                    </ul>
                </div>

                <div className="col-md-3 col-6">
                    <h4>Follow us</h4>
                    <ul className="footer-icons">
                        <li>
                            <a className="insta" href="https://instagram.com/moonro.kz?igshid=MzRlODBiNWFlZA==" target="_blank">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a className="facebook" href="#" target="_blank">
                                <i className="bi bi-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a className="tiktok" href="#" target="_blank">
                                <i className="bi bi-tiktok"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}
