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
product1 = Product.create!( name: "LOCAL WILD KING SALMON 2PC 6OZ PORTIONS", price: "23.95", description: "Help us support our local fishermen and eat the very best salmon around! Sushi-Grade", category_id: "1")
product2 = Product.create!( name: "TUNA STEAKS, YELLOWFIN 1 LB - SKINLESS", price: "22.95", description: "High-grade Yellowfin Tuna Steaks: skin off & bloodline out.", category_id: "1")
product3 = Product.create!( name: "SARDINES (MONTEREY, CA) - 2LB", price: "9.95", description: "Fresh sardines form Monterey!", category_id: "1")
product4 = Product.create!( name: "HALIBUT CHEEKS (AK) - LB", price: "19.95", description: "Line caught Halibut", category_id: "1")
product5 = Product.create!( name: "LOCAL WILD BLACK COD (SABLEFISH) - 6OZ PORTIONS (PACK OF 2)", price: "18.25", description: "Local Trap Caught Black Cod Fillet - Landed from the F/V Kvins.  Rich white meat that's nearly impossible to overcook.", category_id: "2")

file1 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/LocalKingSalmon_600x.jpg")
  product1.photo.attach(io: file1, filename: "img_salmon.jpg")
file2 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/yellowfin_tuna_steak.jpg")
  product2.photo.attach(io: file2, filename: 'img-tuna.jpg')
file3 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/sardines.jpg")
  product3.photo.attach(io: file3, filename: 'img-sardines.jpg')
file4 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/halibut_cheeks.jpg")
  product4.photo.attach(io: file4, filename: 'img-haliCheek.jpg')
file5 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/black_cod.jpg")
  product5.photo.attach(io: file5, filename: 'img-blackCod.jpg')