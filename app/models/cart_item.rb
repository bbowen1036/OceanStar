# == Schema Information
#
# Table name: cart_items
#
#  id          :bigint           not null, primary key
#  cart_key    :float
#  quantity    :integer          default(1)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  customer_id :integer
#  product_id  :integer
#
# Indexes
#
#  index_cart_items_on_product_id  (product_id)
#
class CartItem < ApplicationRecord

  validates :product_id, :quantity, presence: true
  
  belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product

  
  belongs_to :customer,
    foreign_key: :customer_id,
    class_name: :User

end
