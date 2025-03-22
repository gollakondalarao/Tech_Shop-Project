import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdStar, IoMdCheckmark } from 'react-icons/io';
import productsData from '../data/productsData';


const ProductDetails = () => {

   
    const { addItem } = useContext();

    const { productId } = useParams();

    const prodId = parseInt(productId);

    const product = productsData.find(item => item.id === prodId);

    const { images, title, info, category, finalPrice, originalPrice, ratings, rateCount } = product;

    const [previewImg, setPreviewImg] = useState(images[0]);


    // handling Add-to-cart
    const handleAddItem = () => {
        addItem(product);
    };


    useEffect(() => {
        setPreviewImg(images[0]);
        handleActive(0);
    }, [images]);


    const handlePreviewImg = (i) => {
        setPreviewImg(images[i]);
        handleActive(i);
    };


    const discountedPrice = originalPrice - finalPrice;
    const newPrice = displayMoney(finalPrice);
    const oldPrice = displayMoney(originalPrice);
    const savedPrice = displayMoney(discountedPrice);
    const savedDiscount = calculateDiscount(discountedPrice, originalPrice);


    return (
        <>
            <section id="product_details" className="section">
                <div className="container">
                    <div className="wrapper prod_details_wrapper">

                        <div className="prod_details_left_col">
                            <div className="prod_details_tabs">
                                {
                                    images.map((img, i) => (
                                        <div
                                            key={i}
                                            className={`tabs_item ${activeClass(i)}`}
                                            onClick={() => handlePreviewImg(i)}
                                        >
                                            <img src={img} alt="product-img" />
                                        </div>
                                    ))
                                }
                            </div>
                            <figure className="prod_details_img">
                                <img src={previewImg} alt="product-img" />
                            </figure>
                        </div>

                        <div className="prod_details_right_col">
                            <h1 className="prod_details_title">{title}</h1>
                            <h4 className="prod_details_info">{info}</h4>

                            <div className="prod_details_ratings">
                                <span className="rating_star">
                                    {
                                        [...Array(rateCount)].map((_, i) => <IoMdStar key={i} />)
                                    }
                                </span>
                                <span>|</span>
                                <Link to="*">{ratings} Ratings</Link>
                            </div>

                            <div className="separator"></div>

                            <div className="prod_details_price">
                                <div className="price_box">
                                    <h2 className="price">
                                        {newPrice} &nbsp;
                                        <small className="del_price"><del>{oldPrice}</del></small>
                                    </h2>
                                    <p className="saved_price">You save: {savedPrice} ({savedDiscount}%)</p>
                                    <span className="tax_txt">(Inclusive of all taxes)</span>
                                </div>

                                <div className="badge">
                                    <span><IoMdCheckmark /> In Stock</span>
                                </div>
                            </div>

                            <div className="separator"></div>

                            <div className="prod_details_offers">
                                <h4>Offers and Discounts</h4>
                                <ul>
                                    <li>No Cost EMI on Credit Card</li>
                                    <li>Pay Later & Avail Cashback</li>
                                </ul>
                            </div>

                            <div className="separator"></div>

                            <div className="prod_details_buy_btn">
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={handleAddItem}
                                >
                                    Add to cart
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* <ProductSummary {...product} /> */}

            <section id="related_products" className="section">
                <div className="container">
                    {/* <SectionsHead heading="Related Products" /> */}
                    {/* <RelatedSlider category={category} /> */}
                </div>
            </section>

            {/* <Services /> */}
        </>
    );
};

export default ProductDetails;