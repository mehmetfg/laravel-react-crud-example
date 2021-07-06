import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {initTokens} from "../redux/actions/productAction";
import {useDispatch, useSelector} from "react-redux";
const Product = () => {
    const products =useSelector((state) => state.productReducer.products)
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(initTokens())
    }, []);
    return(
        <div>
            <h1>Product Server c fasf  faase fadsf adfasf adfasf</h1>
            <h1>Product Server c fasf  faase fadsf adfasf adfasf</h1>
            <Link to={'/'}>DashBoard</Link>
            {products.length==0 && <p>Loading</p>}
            {
            products.map((item, index) => (
                <h1>{item.name}</h1>
            ))}
        </div>
    )
}
export  default Product
