// import reaact from 'react'
import { useDispatch, useSelector } from "react-redux";
import { get_products } from "../../features/productSlice";
import { useEffect, useState } from "react";
import ProductItems from "./ProductItems";



const Product = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.product);
    console.log(products);

    useEffect(() => {
        dispatch(get_products())
    }, [dispatch])



    return (
        <div className="w-8/12">
            <>
                {products?.length > 0 ? (
                    <>
                        {products.map((product) =>
                            <ProductItems
                                key={product.id}
                                product={product}
                            ></ProductItems>)}
                    </>
                ) : (<p>No Product fount</p>)}
            </>
        </div>
    );
};

export default Product;