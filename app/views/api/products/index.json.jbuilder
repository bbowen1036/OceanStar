@products.each do |product|
  json.set! product.id do
    json.extract! product, :name, :price, :category_id, :description
  end
end