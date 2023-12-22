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

// import products from '../elements/productList';
import { useEffect, useState } from 'react';
import style from './styles/product.module.css';

function Product() {
    // var {id} = useParams();
    // var {category} = useParams();
    // var product = products.find((p) => p.id === parseInt(id, 10));
    
    // var recommended = [];
    // if(category) {
    //     recommended = products.filter((p) => p.category === category).slice(0, 5);
    // }
    const { id, category } = useParams();
    const [currentProduct, setCurrentProduct] = useState({});
    const [recommendedProducts, setRecommendedProducts] = useState([]);
    const [reviews, setReviews] = useState([]);
    const ref = useRef(null);

    const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    };
    
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => setCurrentProduct(data))
        .catch(error => console.error('Error fetching product:', error));

        fetch(`http://127.0.0.1:8000/api/products?category_id=${category}`)
        .then((res) => res.json())
        .then((data) => setRecommendedProducts(data))
        .catch(error => console.error('Error fetching recommended:', error));

        fetch(`http://127.0.0.1:8000/api/reviews?product_id=${id}`)
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, [id, category]);

    const reviewsList = reviews.filter((review) => review.product_id === currentProduct.id).map(review => {
        const formatedDate = new Date(review.created_at);
        const reviewDate = formatedDate.toLocaleDateString();
        
        return (
            <div className={style.reviews_block}>
                <div className={style.review_header}>
                    <div className={style.review_nickname}>{review.name}</div>
                    <div classname={style.review_time}>{reviewDate}</div>
                </div>
                <div className={style.review_text}>
                    {review.message}
                </div>
                <div className={style.review_rating}>
                    <span className={style.rating}>{review.score}</span> out of 5
                </div>
            </div>
        );
    });

    const productSection = (
            <section className={style.upper_section}>
                <div className={style.inline_image}>
                    <img src={"/img/" + currentProduct.img_url}/>
                    <Swiper
                        className={style.swiper}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={5}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide><img src={"/img/" + currentProduct.img_url}/></SwiperSlide>
                        <SwiperSlide><img src={"/img/" + currentProduct.img_url1}/></SwiperSlide>
                        <SwiperSlide><img src={"/img/" + currentProduct.img_url2}/></SwiperSlide>
                        <SwiperSlide><img src={"/img/" + currentProduct.img_url}/></SwiperSlide>
                        <SwiperSlide><img src={"/img/" + currentProduct.img_url1}/></SwiperSlide>
                        <SwiperSlide><img src={"/img/" + currentProduct.img_url2}/></SwiperSlide>
                    </Swiper>
                </div>
                <div className={style.inline_descript}>
                    <h5>{currentProduct.description}</h5>
                    <p>${currentProduct.price}</p>
                    <p>{currentProduct.availability}</p>
                    <h5>Brand: <span>{currentProduct.name && currentProduct.name.split(' ')[0]}</span></h5>
                    <h5>Model: <span>{currentProduct.name && currentProduct.name.split(' ')[1]}</span></h5>
                    <h5>Description:</h5>
                    <p>{currentProduct.description}</p>
                    <h5>Specificatons:</h5>
                    <ul>
                        <li>Type: {currentProduct.type}</li>
                        <li>Color: {currentProduct.characteristics && currentProduct.characteristics.split(',')[1]}</li>
                        <li>Year Manufactured: {currentProduct.year}</li>
                        <li>Manufacturer: {currentProduct.country}</li>
                    </ul>
                    <div className={style.btn}>
                        <button>Buy</button>
                        <button>Add To Cart</button>
                    </div>
                </div>
            </section>
    );

    const recommendedSection = recommendedProducts
        .filter((product) => product.category_id === currentProduct.category_id)
        .slice(0, 5)
        .map((product) =>{
            return (
                <Link to={`/products/${product.id}/${product.category}`} onClick={scrollToTop}>
                    <ProductCard
                        description={product.name}
                        price={product.price}
                        availability={product.availability}
                        image={product.img_url}
                    />
                </Link>
            );
    });

    console.log(recommendedProducts);

    return (
        <>
            <Layout>
                {productSection}
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
                        {reviewsList}
                    </div>
                </section>
                <section className={style.recommended}>
                    <div className={style.swiper_wrapper}>
                        <div className={style.product_card}>
                            {recommendedSection}
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