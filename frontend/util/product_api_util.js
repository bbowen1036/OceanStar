export const getAllProducts = () => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/products'
    })
  )
};

export const getSingleProduct = (productId) => {
  return (
    $.ajax({
      url: `/api/products/${productId}`,
      method: 'GET'
    })
  )
};

export const removeProduct = (productId) => {
  return (
    $.ajax({
      url: "DELETE",
      method: `/api/products/${productId}`
    })
  )
}