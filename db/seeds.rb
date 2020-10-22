# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# CATEGORIES






User.delete_all
Product.delete_all
CartItem.delete_all
Cart.delete_all
# ShoppingCart.delete_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end

u1 = User.create!( username: 'Brian', password: 'password', email: 'user1@aa.io')
u2 = User.create!( username: 'John', password: 'password', email: 'user2@aa.io')
u3 = User.create!( username: 'Jill', password: 'password', email: 'user3@aa.io')
u4 = User.create!( username: 'Jenn', password: 'password', email: 'user4@aa.io')

# Products
product1 = Product.create!( name: "Local Wild King Salmon 2PC 6OZ Portions", price: "23.95", description: "Help us support our local fishermen and eat the very best salmon around! Sushi-Grade", category_id: "1")
product2 = Product.create!( name: "Tuna Steaks, Yellowfin 1 LB - Skinless", price: "22.95", description: "High-grade Yellowfin Tuna Steaks: skin off & bloodline out.", category_id: "1")
product3 = Product.create!( name: "Sardines (MONTEREY, CA) - 2LB", price: "9.95", description: "Fresh sardines form Monterey!", category_id: "1")
product4 = Product.create!( name: "Halibut Cheeks (AK) - LB", price: "19.95", description: "Line caught Halibut", category_id: "1")
product5 = Product.create!( name: "Local Wild Black Cod (SABLEFISH) - 6OZ Portions (PACK OF 2)", price: "18.25", description: "Local Trap Caught Black Cod Fillet - Landed from the F/V Kvins.  Rich white meat that's nearly impossible to overcook.", category_id: "2")
product6 = Product.create!( name: "Yellowtail Amberjack Fillet (NZ Ike Jime) - 8oz", price: "10.95", description: "Ike Jime New Zealand Kingfish (Yellowtail Amberjack).  This fish is bled with the Japanese method of Ike Jime making it absolutely perfect for raw preparations including sushi.  This is supremely high quality Yellowtail!", category_id: "1")
product7 = Product.create!( name: "Whole Striped Bass 1-1.5lb", price: "11.95", description: "Whole true striped bass farmed in Baja California.  These will be scaled and gutted and ready for your grill, steamer or pan.", category_id: "1")
product8 = Product.create!( name: "Grand Sushi/Sashimi Kit", price: "150", description: "A kit complete with everything needed to take your sushi game to the next level.", category_id: "3")
product9 = Product.create!( name: "Branzino Whole - ~1 lb", price: "9.50", description: "Whole Farmed Branzino from Turkey.", category_id: "1")
product10 = Product.create!( name: "Petrale Sole Fillet - per lb", price: "14.50", description: "Hand cut fillets.  Clean, simple and easy to cook.", category_id: "1")
product11 = Product.create!( name: "Classic White Sturgeon Caviar - 1oz", price: "68", description: "This medium black pearl is slightly smaller than the royal grade, and is craved for its creamy “sea butter” characteristics, as described by caviar-lover Drew Barrymore. Acipenser Transmontanous inhabits the Eastern Pacific Ocean from Alaska to the Baja peninsula. Matures 7-9 years, 5-6 feet in length and 80-100 lbs", category_id: "3")
product12 = Product.create!( name: "Spanish Octopus 6-8 lbs - ea", price: "72", description: "Frozen Spanish trap/pot caught octopus.  Will be between 6-8 lbs each.", category_id: "4")
product13 = Product.create!( name: "Gulf Shrimp U10 - Head On - 4 lb box", price: "44.95", description: "Individually frozen whole U10 white shrimp from Galveston, TX.  Comes in a 4 lb box.", category_id: "2")
product14 = Product.create!( name: "Uni Tray (A Grade)- 200g", price: "80", description: "Pacific West Coast A grade Uni - Sourced from various locations between Alaska, Ft. Bragg, Santa Barbara, Baja California", category_id: "4")
product15 = Product.create!( name: "Shigoku Oysters by the dozen", price: "27", description: "Beautiful medium Brine Oysters from the Pacific Northwest", category_id: "3")
product16 = Product.create!( name: "Abalone 3-4oz", price: "8.50", description: "California farmed red abalone. Sushi-Grade.", category_id: "2")
product17 = Product.create!( name: "Wasabi Root (Half Moon Bay) - each", price: "40.50", description: "2-3oz each piece", category_id: "4")
product18 = Product.create!( name: "Monkfish Fillets - 1lb", price: "11.95", description: "Just flown in from Boston - Monkfish is also known as the poor man's lobster.", category_id: "2")
product19 = Product.create!( name: "Kampachi Fillet - 1lb", price: "9.95", description: "Sushi-Grade", category_id: "1")
product20 = Product.create!( name: "Crab, Cocktail Claws (Jonah) - 2 lb bag", price: "39.95", description: "Frozen Jonah Crab Cocktail claws.  Base shell removed and ready to eat.  2 lb bags", category_id: "3")



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
file6 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/yellowtail_amberjack.jpg")
  product6.photo.attach(io: file6, filename: 'img-amberkack')
file7 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/whole_striped_bass.jpg")
  product7.photo.attach(io: file7, filename: 'img-wholebass')
file8 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/SushiKitStuff_600x.jpg")
  product8.photo.attach(io: file8, filename: 'img-sushikit')
file9 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/branzino.jpg")
  product9.photo.attach(io: file9, filename: 'img-branzino')
file10 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/petrale_sole_filet.jpg")
  product10.photo.attach(io: file10, filename: 'img-petrale')
file11 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/caviar.jpg")
  product11.photo.attach(io: file11, filename: 'img-caviar')
file12 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/octopus.jpg")
  product12.photo.attach(io: file12, filename: 'img-octopus')
file13 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/shrimp.jpg")
  product13.photo.attach(io: file13, filename: 'img-shrimp')
file14 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/uni.jpg")
  product14.photo.attach(io: file14, filename: 'img-uni')
file15 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/shigoku.jpg")
  product15.photo.attach(io: file15, filename: 'img-shigoku')
file16 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/abalone.jpg")
  product16.photo.attach(io: file16, filename: 'img-abalone')
file17 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/wasabi.jpg")
  product17.photo.attach(io: file17, filename: 'img-wasabi')
file18 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/monkfish.jpg")
  product18.photo.attach(io: file18, filename: 'img-monfish')
file19 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/kampachi.jpg")
  product19.photo.attach(io: file19, filename: 'img-kampachi')
file20 = open("https://oceanstar-seed.s3-us-west-1.amazonaws.com/jonahcrab.jpg")
  product20.photo.attach(io: file20, filename: 'img-jonahcrab')




# Carts
# cart1 = Cart.create!
# cart2 = Cart.create!
# cart3 = Cart.create!

# # CartItems

# c1 = CartItem.create!( product_id: 3, quantity: 2, customer_id: 3, cart_id: 2)
# c2 = CartItem.create!( product_id: 4, quantity: 2, customer_id: 3, cart_id: 2)
# c3 = CartItem.create!( product_id: 8, quantity: 4, customer_id: 1, cart_id: 2)
# # c4
# # c5
# # c6
# c7
# c8
# c9
# c10
# c11
# c12