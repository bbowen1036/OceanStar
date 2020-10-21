json.extract! product, :id, :name, :description, :price
if product.photo.attached?
    json.photoUrl url_for(product.photo)
end