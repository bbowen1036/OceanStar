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
require 'test_helper'

class CartItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
