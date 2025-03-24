import React, { useContext } from 'react';
import { TbTrash } from 'react-icons/tb';
import { Link } from 'react-router-dom';


const CartItem = (props) => {

    const { id, images, title, info, finalPrice, originalPrice, quantity, path } = props;

    const { removeItem } = useContext(cartContext);

    const newPrice = displayMoney(finalPrice);
    const oldPrice = displayMoney(originalPrice);


    return (
        <>
            <div className="cart_item">
                <figure className="cart_item_img">
                    <Link to={`${path}${id}`}>
                        <img src={images[0]} alt="product-img" />
                    </Link>
                </figure>
                <div className="cart_item_info">
                    <div className="cart_item_head">
                        <h4 className="cart_item_title">
                            <Link to={`/product-details/${id}`}>{title} {info}</Link>
                        </h4>
                        <div className="cart_item_del">
                            <span onClick={() => removeItem(id)}>
                            </span>
                            <div className="tooltip">Remove Item</div>
                        </div>
                    </div>

                    <h2 className="cart_item_price">
                        {newPrice} &nbsp;
                        <small><del>{oldPrice}</del></small>
                    </h2>

                     itemId={id} itemQuantity={quantity}
                </div>
            </div>
        </>
    );
};

export default CartItem;