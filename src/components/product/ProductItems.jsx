

const ProductItems = ({ product }) => {
    const { quantity, price, color, varient, product_name } = product;
    // console.log("product'll come as props :> ", product);

    // handleProductOnClick
    const handleProductClickButton = (product) => {
        const line = {
            productId: product.id,
            productName: product.product_name,
            productPrice: product.price,
            productVariant: product.varient,
            quantity: product.quantity,
            color: product.color
        };
        // console.log("product ", product);
        console.log("Line: ", line);

    }


    return (
        <div className="p-2 border-2 bg-slate-200 border-gray-300 rounded-lg m-2">
            {/* quantity  */}
            <p className="p-2 ">
                {product?.product_name + " ( " + (product?.quantity === 0 ? "Out of Stock " : product?.quantity + " ) ")}
            </p>
            {/* price */}
            <p className="text-left text-gray-400">
                {product?.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "BDT"
                })}
            </p>
            {/* button */}
            <div className="text-semibold ">
                <button
                    onClick={() => handleProductClickButton(product)}
                    disabled={product?.quantity === 0 ? ture : false}
                    className={`px-3 focus:outline-none bg-yellow-600 text-white py-1 rounded-md ${product?.quantity === 0 ? "disabled:opacity-25 cursor-not-allowed" : "hover:bg-yellow-900"} `}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductItems;