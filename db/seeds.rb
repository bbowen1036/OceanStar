# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Product.delete_all

u1 = User.create!(
  username: 'Brian',
  password: 'password',
  email: 'user1@aa.io'
)

u2 = User.create!(
  username: 'John',
  password: 'password',
  email: 'user2@aa.io'
)

u3 = User.create!(
  username: 'Jill',
  password: 'password',
  email: 'user3@aa.io'
)

u4 = User.create!(
  username: 'Jenn',
  password: 'password',
  email: 'user4@aa.io'
)

# Products
product1 = Product.create!( name: "Salmon", price: "21.99", description: "Help us support our local fishermen and eat the very best salmon around! Sushi-Grade", category_id: "1")
product2 = Product.create!( name: "Tuna", price: "12.12", description: "Sashimi Tuna", category_id: "2")
product3 = Product.create!( name: "Sardines", price: "10.99", description: "Local Sardines", category_id: "1")
product4 = Product.create!( name: "Halibut", price: "14.50", description: "Line caught Halibut", category_id: "1")
product5 = Product.create!( name: "Black Cod", price: "21.00", description: "Fresh Pacific Black Cod", category_id: "2")