json.user do
  json.partial! "api/users/user", user: @user
end

json.cartItems do
  @user.cart_items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :quantity, :product_id
    end
  end
end

json.products do
  @user.products.each do |product|
    json.set! product.id do
      json.extract! product, :id, :name, :description, :price
    end
  end
end