import React from 'react';
import Layout from '../component/layout/layout';
import { useParams } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import ProductCard from './productCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import products from '../elements/productList';
import style from './styles/product.module.css';

function Product() {
    var {id} = useParams();
    var {category} = useParams();
    var product = products.find((p) => p.id === parseInt(id, 10));
    var recommended = [];

    if(category) {
        recommended = products.filter((p) => p.category === category).slice(0, 5);
    }

    const ref = useRef(null);
    const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };
    
    console.log(product)
    return (
        <>
            <Layout>
                <section className={style.upper_section}>
                    <div className={style.inline_image}>
                        <img src={product.image[0]}/>
                        <Swiper
                            className={style.swiper}
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={5}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            <SwiperSlide><img src={product.image[1]}/></SwiperSlide>
                            <SwiperSlide><img src={product.image[0]}/></SwiperSlide>
                            <SwiperSlide><img src={product.image[2]}/></SwiperSlide>
                            <SwiperSlide><img src={product.image[1]}/></SwiperSlide>
                            <SwiperSlide><img src={product.image[0]}/></SwiperSlide>
                            <SwiperSlide><img src={product.image[2]}/></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={style.inline_descript}>
                        <h5>{product.description}</h5>
                        <p>${product.price}</p>
                        <p>{product.availability}</p>
                        <h5>Brand: <span>SEGA</span></h5>
                        <h5>Model: <span>Dreamcast</span></h5>
                        <h5>Description:</h5>
                        <p>Sega Dreamcast DC HKT-3000 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt
                            ut labore et dolore magna aliqua. Quis ipsum suspendisse.
                            Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum
                            quis nulla.</p>
                        <h5>Specificatons:</h5>
                        <ul>
                            <li>Type: Home Console</li>
                            <li>Color: White</li>
                            <li>Year Manufactured: 1998</li>
                            <li>Manufacturer: Japan</li>
                        </ul>
                        <div className={style.btn}>
                            <button>Buy</button>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                </section>
                <section className={style.lower_section}>
                    <div className={style.product_rating}>
                        <h4>Product ratings</h4>
                        <div className={style.score_container}>
                            <div className={style.score_title}>Accurate description</div>
                            <div className={style.bar}></div>
                            <div className={style.score_number}>4.5</div>
                        </div>
                        <div className={style.score_container}>
                            <div className={style.score_title}>Reasonable price</div>
                            <div className={style.bar1}></div>
                            <div className={style.score_number}>4.8</div>
                        </div>
                        <div className={style.score_container}>
                            <div className={style.score_title}>Delivery time</div>
                            <div className={style.bar2}></div>
                            <div className={style.score_number}>4.5</div>
                        </div>
                        <div className={style.score_container}>
                            <div className={style.score_title}>Customer service</div>
                            <div className={style.bar3}></div>
                            <div className={style.score_number}>4.5</div>
                        </div>
                    </div>
                    <div className={style.reviews}>
                        <h4>Seller feedback</h4>
                        <div className={style.review_header}>
                            <div className={style.review_nickname}>John Doe</div>
                            <div classname={style.review_time}>2 hours ago</div>
                        </div>
                        <div className={style.review_text}>
                            This product is amazing! I'm very satisfied with my purchase.
                        </div>
                        <div className={style.review_rating}>
                            <span className={style.rating}>4.5</span> out of 5
                        </div>
                    </div>
                </section>
                <section className={style.recommended}>
                    <div className={style.swiper_wrapper}>
                        <div className={style.product_card}>
                            {recommended.map((product) => (
                                <Link onClick={scrollToTop} to={`/product/${product.id}/${product.category}`}>
                                        <ProductCard
                                            description={product.description}
                                            price={product.price}
                                            availability={product.availability}
                                            image={product.image[0]}
                                        />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default Product;

{/* <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
    <SwiperSlide>
         <div className={style.product_card}>
                            {recommended.map((product) => (
                                <Link onClick={scrollToTop} to={`/product/${product.id}/${product.category}`}>
                                        <ProductCard
                                            description={product.description}
                                            price={product.price}
                                            availability={product.availability}
                                            image={product.image[0]}
                                        />
                                </Link>
                            ))}
                        </div>
    </SwiperSlide>
</Swiper> */}