# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  description :text             not null
#  name        :string           not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  category_id :integer          not null
#
# Indexes
#
#  index_products_on_category_id  (category_id)
#  index_products_on_name         (name) UNIQUE
#
class Product < ApplicationRecord
  validates :description, :price, :name, :category_id, presence: true
  validates :name, uniqueness: true

  has_one_attached :photo

  has_many :cart_items,
    foreign_key: :product_id,
    class_name: :CartItem

  has_one :customer,
    through: :cart_items,
    source: :customer
    
end
