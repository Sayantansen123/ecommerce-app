import React from 'react'
import {motion} from "framer-motion"
import { useProductStore } from '../stores/useProductStore';

const ProductList = () => {
  const { deleteProduct, toggleFeaturedProduct, products } = useProductStore();
  console.log("products",products)
  return (
    <div>
      product list
    </div>
  )
}

export default ProductList
