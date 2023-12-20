import Layout from '../component/layout/layout';
import { Link } from 'react-router-dom';
import styles from '../pages/styles/home.module.css';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import prdct from '../images/vinyls/rs2.jpg';
import prdct1 from '../images/vinyls/rhcp3.png';
import prdct2 from '../images/vinyls/lp01.jpg';
import prdct3 from '../images/record_players/garrard2.jpg';
import prdct4 from '../images/record_players/panasonic1.jpg';
import prdct5 from '../images/record_players/pioneer.jpg';

import prdct6 from '../images/consoles/saturn1.jpg';
import prdct7 from '../images/consoles/nintendo64_1.jpg';
import prdct8 from '../images/consoles/dreamcast1.jpg';

function Home() {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/api/product')
    //     .then(res => res.json())
    //     .then(json => setProducts(json))
    // }, []);



    return (
        <>
            <Layout>
                <div className={styles.container}>
                    <div className={styles.head_section}>
                        <div className={styles.wrapper}>
                            <div className={styles.info_tab}>
                                <p>
                                    Explore our one-stop store, a treasure trove for vinyl enthusiasts,
                                    retro gamers, and audiophiles alike. With a wide range of vinyl records,
                                    classic gaming consoles, and audio equipment, we cater to the passions of
                                    collectors, nostalgia seekers, and music lovers.
                                    Find everything you need to enhance your analog and gaming experiences
                                    under one roof.
                                </p>
                            </div>
                            <Link to='/categories'><button className={styles.link_btn}>Learn more..</button></Link>
                        </div>
                    </div>
                    <div className={styles.head_section1}>
                        <div className={styles.category_wrapper}>
                            <div className={styles.product_info_tab}>
                                <h2 className={styles.h2_h}>Vinyl records</h2>
                                <p>Our store offers a diverse selection of vinyl records,
                                    ranging from classic rock and jazz to contemporary indie and electronic music.
                                    Whether you're a seasoned collector or a new enthusiast,
                                    you'll find a wide array of vintage and newly released vinyls to suit your musical preferences
                                    and enhance your listening experience.
                                </p>
                            </div>
                            <div className={styles.product_panel_tab}>
                                <div className={styles.product_card}>
                                    <img src={prdct} alt="Product 1" />
                                    <p> $10.00</p>
                                </div>
                                <div className={styles.product_card}>
                                    <img src={prdct1} alt="Product 2" />
                                    <p> $15.00</p>
                                </div>
                                <div className={styles.product_card}>
                                    <img src={prdct2} alt="Product 3" />
                                    <p> $20.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.head_section2}>
                        <div className={styles.category_wrapper}>
                            <div className={styles.product_panel_tab}>
                                <div className={styles.product_card}>
                                    <img src={prdct3} alt="Product 1" />
                                    <p> $10.00</p>
                                </div>
                                <div className={styles.product_card}>
                                    <img src={prdct4} alt="Product 2" />
                                    <p> $15.00</p>
                                </div>
                                <div className={styles.product_card}>
                                    <img src={prdct5} alt="Product 3" />
                                    <p> $20.00</p>
                                </div>
                            </div>
                            <div className={styles.product_info_tab1}>
                                <h2 className={styles.h2_h}>Record players</h2>
                                <p>Discover the perfect record player at our store,
                                    where we feature a curated collection of high-quality turntables,
                                    offering exceptional sound quality and a touch of vintage charm.
                                    Whether you're a vinyl connoisseur or just starting your analog music journey,
                                    our selection includes a range of models to cater to every audiophile's needs,
                                    from sleek modern designs to classic, belt-driven turntables.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.head_section3}>
                        <div className={styles.category_wrapper}>
                            <div className={styles.product_info_tab}>
                                <h2 className={styles.h2_h}>Gaming consoles</h2>
                                <p>Step into a world of nostalgia with our classic gaming consoles,
                                    featuring retro legends like the Dreamcast and Nintendo 64.
                                    Revisit the golden era of gaming with these vintage systems and
                                    relish timeless titles that have left a lasting mark on gaming history.
                                    Whether you're reminiscing or introducing a new generation to the joys of
                                    retro gaming, our selection offers an authentic vintage gaming experience.
                                </p>
                            </div>
                            <div className={styles.product_panel_tab}>
                                <div className={styles.product_card}>
                                    <img src={prdct6} alt="Product 1" />
                                    <p>$10.00</p>
                                </div>
                                <div className={styles.product_card}>
                                    <img src={prdct7} alt="Product 2" />
                                    <p> $15.00</p>
                                </div>
                                <div className={styles.product_card}>
                                    <img src={prdct8} alt="Product 3" />
                                    <p> $20.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Home;