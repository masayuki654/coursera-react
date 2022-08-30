// Uncomment the import statemnets while running the test code and while submitting the solution
// Comment this code while running the solution in the browser
import React from 'react';


//Write the code for creating Product function component that returns a React element
function Product(props) {
    if (props.outOfStock) {
        return null;
    }
    return React.createElement("div", null,
           React.createElement("img", {src: props.imageSrc, width: "150px", height: "150px"}, null),
           React.createElement("div", {style: {"fontFamily": "serif"}}, props.productName), !props.discountPrice ?
           React.createElement("div", {style: {"fontFamily": "serif"}}, props.price) :
           React.createElement("div", {style: {"display": "flex"}},
           React.createElement("div", {style: {"fontFamily": "serif"}}, React.createElement("s", null, props.price)),
           React.createElement("div", {style: {"fontFamily": "serif"}}, props.discountPrice)) 
           );
}

//Write the code for creating ProductList function component that returns a React element
function ProductList(props) {
    const productList = props.products;
    return productList.map(product => {
        return React.createElement(Product, {
            key: product.productName,
            productName: product.productName,
            outOfStock: product.outOfStock,
            discountPrice: product.discountPrice,
            price: product.price,
            imageSrc: product.imageSrc
        });
    });
}

// uncomment the export statement while testing the code and submitting the solution
// comment this code while running the solution in the browser
module.exports={Product,ProductList};


