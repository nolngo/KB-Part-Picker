import React from 'react'
import {Grid} from '@material-ui/core';

const BuildList = () => {
  return (
    <div>
      
      <Grid container justify = "center" spacing = {4}>
        {filteredProducts.map((product) => (
          <Grid item key = {product.id} xs = {12} sm = {6} med = {4} lg = {3}>
            <Product product={product} />
          </Grid> 
        ))}
      </Grid>
    </div>
  )
}

export default BuildList
