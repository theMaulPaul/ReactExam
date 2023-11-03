import React from 'react';
import Layout from '../component/layout/layout';
import {Link} from 'react-router-dom';
import ProductCard from './productCard';
import style from '../pages/styles/category.module.css';
import ProductList from '../elements/productList';

function Category() {
    const categories = [
        'record_players',
        'vinyls',
        'gaming_consoles'
    ];

    const brands = [

    ];

    return (
        <>
            <Layout>
                <div className={style.shop_page}>
                    <div className={style.sidebar}>
                        <div className={style.brand_filter}>
                            <h3>Brands</h3>
                            <ul>
                                <li><label><input type="checkbox" name="brand"/>SEGA</label></li>
                                <li><label><input type="checkbox" name="brand"/>Nintendo</label></li>
                            </ul>
                        </div>
                        <div className={style.price_filter}>
                            <h3>Price Range</h3>
                            <div className={style.price_inputs}>
                                {/* <input type="number" id="minPrice" name="minPrice"/> */}
                                <input type="number" id="maxPrice" name="maxPrice"/>
                            </div>
                            <div className={style.price_slider}>
                                <input type="range" id="priceRange" name="priceRange"/>
                            </div>
                        </div>
                        <div className={style.country_filter}>
                            <h3>Country Manufacturer</h3>
                            <select name="country">
                            <option value="USA">USA</option>
                            <option value="Japan">Japan</option>
                            </select>
                        </div>
                        <div className={style.availability_filter}>
                            <h3>Availability</h3>
                            <label><input type="checkbox" name="availability" value="In Stock"/> In Stock</label>
                            <label><input type="checkbox" name="availability" value="Out of Stock"/> Out of Stock</label>
                        </div>
                        <div className={style.condition_filter}>
                            <h3>Condition</h3>
                            <label><input type="checkbox" name="condition" value="New"/> New</label>
                            <label><input type="checkbox" name="condition" value="Used"/> Used</label>
                        </div>
                        <button id="applyFilters">Apply Filters</button>
                    </div>
                    <div className={style.product_section}>
                        <h1>Products</h1>
                        <div className={style.product_card_container}>
                            {ProductList.map((product) => (
                               <Link to={`/product/${product.id}/${product.category}`}>
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
                </div>
            </Layout>
        </>
    );
}

export default Category;