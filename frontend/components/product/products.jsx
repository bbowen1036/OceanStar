import React from 'react';
import Route from 'react-router-dom';

import ProductIndexItem from './product_index_item'

class ProductsIndex extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchAllProducts();   
  }


  render(){ 
    const { products } = this.props;

    const product = products.map(product => <ProductIndexItem key={product.id} product={product} />)
    return(
      <div >
        <div className="content-header"><h1>NEW ARRIVALS</h1></div>

        <div className="product-list">
          <ul>
            {product}
          </ul>
        </div>

      </div>
    )
  }
};

export default ProductsIndex;