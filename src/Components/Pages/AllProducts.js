import React, { useContext } from 'react';
import useDocTitle from '../hooks/useDocTitle';
import ProductCard from '../components/product/ProductCard';


const AllProducts = () => {

    useDocTitle('All Products');

    const { allProducts } = useContext(filtersContext);


    return (
        <>
            <section id="all_products" className="section">


                <div className="container">
                    {
                        allProducts.length ? (
                            <div className="wrapper products_wrapper">
                                {
                                    allProducts.map(item => (
                                        <ProductCard
                                            key={item.id}
                                            {...item}
                                        />
                                    ))
                                }
                            </div>
                        ) :
                    }
                </div>
            </section>

        </>
    );
};

export default AllProducts;