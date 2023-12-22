import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/data';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const Case = () => {
    const { brand, modelName, caseId } = useParams();

    const selectedCase = products
        .find((brandItem) => brandItem.brandName === brand)
        ?.models.find((modelItem) => modelItem.modelName === modelName)
        ?.cases.find((caseItem) => caseItem.id.toString() === caseId);


    if (!selectedCase) {
        console.error(`Чехол не найден для brand: ${brand}, modelName: ${modelName}, caseId: ${caseId}`);
        return <div>Чехол не найден</div>;
    }

    const { title, img, price, material, color } = selectedCase;

    return (
        <div className=''>
            <Header />
            <nav className='my-breadcrumb' style={{ "--bs-breadcrumb-divider": "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"8\"%3E%3Cpath d=\"M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\" fill=\"%236c757d\"/%3E%3C/svg%3E')" }} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item br-home"><Link to='/'>Главная</Link></li>
                    <li className="breadcrumb-item active" aria-current="page"><Link to={`/${brand}`}>{brand}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page"><Link to={`/${brand}/${modelName}`}>{modelName}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{caseId}</li>
                </ol>
            </nav>
            <section className="product-page">
                <div className="container">
                    <div class="row">
                        <div class="col-md-5 col-lg-4 mb-3">
                            <div class="bg-white h-100 me-2">
                                <div id="carouselExampleFade" class="carousel carousel-dark slide carousel-fade">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={`/case_img/${img}`} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={`/case_img/${img}`} class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-7 col-lg-8 mb-3">
                            <div class="bg-white product-content p-3 h-100">
                                <h2><span>{title}</span></h2>

                                <div class="product-price">
                                    {price}
                                </div>

                                <p>Это стильный и практичный аксессуар, который обеспечит надежную защиту вашего устройства. Изготовленный из высококачествного силикона, этот чехол обеспечивает отличное сцепление с устройством, предотвращая скольжение и падения. Его матовая поверхность приятна на ощупь и придаст вашему iPhone 11 изысканный внешний вид.</p>

                                <div class="product-add2cart">
                                    <button class="btn btn-danger m-1 w-100">
                                        Добавить в корзину
                                    </button>
                                </div>

                                <div class="row mt-4">
                                    <div class="col-lg-4 mb-2">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    <i class="bi bi-shield-shaded" width='24px' height='24px'></i> Гарантия
                                                </h5>
                                                <ul class="list-unstyled">
                                                    <li>Возвращение товара в течение 14 дней</li>
                                                    <li>Гарантия качества</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 mb-2">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    <i class="bi bi-box-seam-fill" width="24" height="24"></i> Доставка
                                                </h5>
                                                <ul class="list-unstyled">
                                                    <li>Казпочтой по стране</li>
                                                    <li>Яндекс курьером по Алматы</li>
                                                    <li>Самовывоз из Алматы</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 mb-2">
                                        <div class="card h-100">
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    <i class="bi bi-credit-card-fill" width="24" height="24"></i>  Оплата
                                                </h5>
                                                <ul class="list-unstyled">
                                                    <li>Kaspi Gold / Red</li>
                                                    <li>Visa / Mastercard</li>
                                                    <li>Наличный расчет</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-12">
                            <div class="product-content-details bg-white p-4">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="tabpanel">
                                        <button class="nav-link active" id="features-tab" data-bs-toggle="tab"
                                            data-bs-target="#features-tab-pane" type="button" role="tab"
                                            aria-controls="features-tab-pane" aria-selected="false">Особенности</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="video-tab" data-bs-toggle="tab"
                                            data-bs-target="#video-tab-pane" type="button" role="tab"
                                            aria-controls="video-tab-pane" aria-selected="false">Обзор</button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="features-tab-pane" role="tabpanel"
                                        aria-labelledby="features-tab" tabindex="0">
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Тип товара:</th>
                                                    <td>Чехлы для {modelName}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Материал:</th>
                                                    <td>{material}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Цвет:</th>
                                                    <td>{color}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="tab-pane fade" id="video-tab-pane" role="tabpanel"
                                        aria-labelledby="video-tab" tabindex="0">
                                        <div class="ratio ratio-16x9">
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/rFPwl9KRnbY?si=WNuMvdM7O1BxcWca" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                                            </iframe>
                                        </div>
                                    </div>
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

export default Case;

