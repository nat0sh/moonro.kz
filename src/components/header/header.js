import React, { Component } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Order from '../order/order';
import { Link } from 'react-router-dom';
import Search from '../search/Search';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartOpen: false,
      searchResults: [],
    };
  }

  handleSearchResults = (results) => {
    this.setState({ searchResults: results });
  };

  toggleCart = () => {
    this.setState((prevState) => ({ cartOpen: !prevState.cartOpen }));
  };

  showNothing = () => {
    return (
      <div className='cart-empty'>
        <h6>Ваша корзина пуста...</h6>
        <Link className='btn btn-secondary' to='/cart'>Перейти в корзину</Link>
      </div>
    );
  };

  showOrders = () => {
    let summa = 0;
    this.props.orders.forEach(el => summa += Number.parseInt(el.price));

    return (
      <div>
        <div className='orders'>
          {this.props.orders.map((el) => (
            <Order key={el.id} item={el} onDelete={this.props.onDelete} />
          ))}
        </div>
        <div className='summa'>
          <p className='mb-4'>Итого: <b>{summa}₸</b><Link to="/cart"><button type='button' className="btn btn-danger float-end position-absolute bottom-0 end-0 mb-3 me-3">Перейти в корзину</button></Link></p>
        </div>
      </div>
    );
  };

  render() {
    const { cartOpen, searchResults } = this.state;
    const { orders, onDelete } = this.props;

    return (
      <header>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark border-bottom-1 border-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand mx-2">Moonro</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-1">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Каталог
                  </a>
                  <ul className="dropdown-menu bg-dark badge-light" aria-labelledby="navbarDropdown">
                    <li>
                      <Link to="/Apple" className="dropdown-item">
                        Apple
                      </Link>
                    </li>
                    <li>
                      <Link to="/Samsung" className="dropdown-item">
                        Samsung
                      </Link>
                    </li>
                    <li>
                      <Link to="/Xiaomi" className="dropdown-item">
                        Xiaomi
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link">О магазине</a>
                </li>
                <li className="nav-item">
                  <Link to="/delivery" className="nav-link">Доставка</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contacts" className="nav-link">Контакты</Link>
                </li>
              </ul>
              <Search onSearch={this.handleSearchResults} />

              <div className="d-flex ms-1 mt-1">
                <i onClick={this.toggleCart} className={`bi bi-cart4 me-3 position-relative cart-button ${cartOpen && 'active'}`}>
                  <span bg="danger" className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger custom-badge">
                    {orders ? orders.length : 0}
                  </span>
                </i>
                {cartOpen && (
                  <div className='cart-window'>
                    {orders && orders.length > 0 ?
                      this.showOrders() : this.showNothing()}
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
