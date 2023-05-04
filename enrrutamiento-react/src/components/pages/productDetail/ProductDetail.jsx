import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../../productsMock'
const ProductDetail = () => {

    let {productId} =useParams()

    let productoSelected = products.find( product => product.id === productId)

    return (
        <div>
            <h2>{productoSelected.name} {productoSelected.price} {productoSelected.description}</h2>
        </div>
    )
}

export default ProductDetail