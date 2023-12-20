import React from 'react';
import Layout from '../component/layout/layout';
import {Link} from 'react-router-dom';
import ProductCard from './productCard';
import style from '../pages/styles/category.module.css';
// import ProductList from '../elements/productList';
import {useState, useEffect} from 'react';

function Category() {
    
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedAvailability, setSelectedAvailability] = useState(null);
    const [countrySelection, setCountrySelection] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/categories')
        .then(res => res.json())
        .then(json => setCategories(json))
        .catch(error => console.error('Error fetching categories:', error));

        fetch('http://127.0.0.1:8000/api/products')
        .then(res => res.json())
        .then(json => setProducts(json))
        .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory((prevCategory) => (prevCategory === category ? null : category));
    }

    const handleAvailabilityChange = (availability) => {
        setSelectedAvailability((prevAvailability) => (prevAvailability === availability ? null : availability));
    };

    const handleCountryChange = (country) => {
        setCountrySelection((prevCountry) => (prevCountry === country ? null : country));
    }
    
    const availabilitiesList = ['In Stock', 'Out of Stock'];
    
    const availabilityCheckboxes = availabilitiesList.map((availability) => (
        <li key={availability}>
            <label>
                <input
                    type="checkbox"
                    name="availability"
                    value={availability}
                    checked={selectedAvailability === availability}
                    onChange={() => handleAvailabilityChange(availability)}
                />
                {' '}
                {availability}
            </label>
        </li>
    ));

    const categoriesList = categories.map((category) => {
        return (
            <li key={category.id}>
                <label>
                    <input 
                        type="checkbox" 
                        name="category" 
                        value={category.id} 
                        checked={selectedCategory === category.id} 
                        onChange={() => handleCategoryChange(category.id)}
                        />
                        {' '}
                        {category.name}
                </label>
            </li>
        );
    });

    const countriesSet = new Set(products.map((product) => product.country));
    const countriesList = Array.from(countriesSet);

    const countriesFilter = countriesList.map((country) => {
        return (
            <li key={country}>
                <label>
                    <input
                        type="checkbox"
                        name="country"
                        value={country}
                        checked={countrySelection === country}
                        onChange={() => handleCountryChange(country)}
                    />
                    {' '}
                    {country}
                </label>
            </li>
        )
    });

    const filteredProducts = products.filter((product) => {
        const categoryFilter = selectedCategory ? products.filter((product) => product.category_id === selectedCategory) : products;
        const availabilityFilter = selectedAvailability ? products.filter((product) => product.availability === selectedAvailability) : products;
        const countryFilter = countrySelection ? products.filter((product) => product.country === countrySelection) : products;

        return categoryFilter.includes(product) && availabilityFilter.includes(product) && countryFilter.includes(product);
    })

    const productList = filteredProducts.map((product) => {
        const textColor = product.availability === 'In Stock' ? '#27ae60' : 'red';
        return (
            <Link to={`/products/${product.id}/${product.category_id}`} key={product.id}>
            <ProductCard
                description={product.description}
                price={product.price}
                availability={product.availability}
                image={product.img_url}
                textColor={textColor}
            />
            </Link>
        );
    });

    return (
        <>
            <Layout>
                <div className={style.shop_page}>
                    <div className={style.sidebar}>
                        <div className={style.brand_filter}>
                            <h3>Categories</h3>
                            <ul>{categoriesList}</ul>
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
                            {countriesFilter}
                        </div>
                        <div className={style.availability_filter}>
                            <h3>Availability</h3>
                            {availabilityCheckboxes}
                        </div>
                        {/* <div className={style.condition_filter}>
                            <h3>Condition</h3>
                            <label><input type="checkbox" name="condition" value="New"/> New</label>
                            <label><input type="checkbox" name="condition" value="Used"/> Used</label>
                        </div> */}
                    </div>
                    <div className={style.product_section}>
                        <h1>Products</h1>
                        <div className={style.product_card_container}>{productList}</div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Category;