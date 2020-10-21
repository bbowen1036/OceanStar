# == Schema Information
#
# Table name: cart_items
#
#  id          :bigint           not null, primary key
#  quantity    :integer          default(1)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  cart_id     :integer
#  customer_id :integer
#  product_id  :integer
#
# Indexes
#
#  index_cart_items_on_cart_id     (cart_id)
#  index_cart_items_on_product_id  (product_id)
#
class CartItem < ApplicationRecord
  belongs_to :product
  belongs_to :cart
  
  belongs_to :customer,
    foreign_key: :customer_id,
    class_name: :User

  
  has_many :cart_tokens,
    foreign_key: :cart_token,
    class_name: :User


  
end
