# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"
User.destroy_all
Item.destroy_all
Review.destroy_all
Order.destroy_all
OrderItem.destroy_all




10.times do
    User.create({first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: "testpassword", phone_number: Faker::PhoneNumber.cell_phone,address: Faker::Address.full_address })
end
faizah = User.create({first_name: "Faizah", last_name: "Ahsan", email: "faizah@gmail.com", password: "faizah", phone_number: 1234567890, address:"123 main street, houston, texas 77004"})
tahsin = User.create({first_name: "Ahmed", last_name: "Tahsin", email: "tahsin@yahoo.com", password: "tahsin", phone_number: 1234567890, address:"123 apple street, houston, texas 77003"})

# Kurtis
item1 = Item.create({
    name: "Maroon High Low Tunic",
    sku_number: "FAFK1802",
    color: "Maroon",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 1,
    description: "Maroon high low tunic with peard and stone work on the sleeveline",
    image: "http://tiny.cc/w49rqz",
    price: 45,
    category:"Kurtis"
})
item2 = Item.create({
    name: "Navy kurta with bell sleeves",
    sku_number: "KMAY1901",
    color: "Navy",
    size_s_quantity: 1,
    size_m_quantity: 1,
    size_l_quantity: 1,
    size_xl_quantity: 1,
    description: "Double georgette kurti with pipe and thread embroidery.",
    image: "http://tiny.cc/k59rqz",
    price: 40,
    category: "Kurtis"
})
item3 = Item.create({
    name: "Peachy dream",
    sku_number: "KMAR1904",
    color: "Peach",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 0,
    size_xl_quantity: 1,
    description: "Peach kurti with striped back and small embroidery on the pocket",
    image: "http://tiny.cc/6nbsqz",
    price: 35,
    category:"Kurtis"
})
item4 = Item.create({
    name: "Pastel Love",
    sku_number: "KMAY1907",
    color: "Powder blue",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 0,
    size_xl_quantity: 1,
    description: "Powder blue kurti with pipe work & printed muslin back a.",
    image: "http://tiny.cc/i79rqz",
    price: 55,
    category:"Kurtis"
})
item5 = Item.create({
    name: "Blush in pink",
    sku_number: "KMAR1905",
    color: "Pink",
    size_s_quantity: 0,
    size_m_quantity:1,
    size_l_quantity: 0,
    size_xl_quantity: 1,
    description: "Powder pink musling kurti with beaded motif",
    image: "http://tiny.cc/999rqz",
    price: 45,
    category:"Kurtis"
})
item6 = Item.create({
    name: "Magenta Kurta ",
    sku_number: "FADJFK2001",
    color: "Pink",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 1,
    description: "Magenta double georgette kurta with embroidery and bead work",
    image: "http://tiny.cc/v8pnqz",
    price: 60,
    category:"Kurtis"
})
item7 = Item.create({
    name: "Powder pink Kurti",
    sku_number: "KMAY1909",
    color: "Pink",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 1,
    description: "Powder pink kurti with muslin panel and beaded motif on the sleeves",
    image: "http://tiny.cc/6basqz",
    price: 50,
    category:"Kurtis"
})
item8 = Item.create({
    name: "Black & white love",
    sku_number: "KMAY1908",
    color: "Black",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 1,
    description: "Black & white double georgette kurti with embroidery borders",
    image: "http://tiny.cc/5easqz",
    price: 45,
    category:"Kurtis"
})
item9 = Item.create({
    name: "Spring Time",
    sku_number: "FADJFK2004",
    color: "Yellow",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 1,
    description: "Ywlloe kurti with musline panel and sequin work",
    image: "http://tiny.cc/jhasqz",
    price: 55,
    category:"Kurtis"
})
item10 = Item.create({
    name: "Gray Lace Kurti",
    sku_number: "FADJFK2005",
    color: "Gray",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 1,
    description: "Gray double gerogette kurti with lace panel and cute muslin tie neckline",
    image: "http://tiny.cc/oiasqz",
    price: 40,
    category:"Kurtis"
})
item11 = Item.create({
    name: "Watercolor",
    sku_number: "FADKDEC1902",
    color: "White",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 1,
    description: "Printed cotton kurti with muslin pleats and thread emrbroidered panel.",
    image: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/87043219_977234406007228_3616191587958128640_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=NYc2JoKlJdYAX_o3vut&_nc_ht=scontent-dfw5-2.xx&oh=7de487c2633eea4802f02cddd7fede66&oe=5F0B2709",
    price: 40,
    category:"Kurtis"
})
item12 = Item.create({
    name: "Knotted kurti",
    sku_number: "FADNDK1909",
    color: "Brown",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 1,
    description: "Double gerogette knotted kurti with emroidered sleeves",
    image: "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/82757368_951347701929232_2369625335143596032_n.jpg?_nc_cat=110&_nc_sid=110474&_nc_ohc=anFYmjIOtaYAX-8I4qF&_nc_ht=scontent-dfw5-1.xx&oh=173e76b7fd6e74c4f480f411ec477080&oe=5F09E235",
    price: 40,
    category:"Kurtis"
})

# Casuals
item11 = Item.create({
    name: "Black & Mint Kameez with Dupatta",
    sku_number: "CAMAR1906",
    color: "Black",
    size_s_quantity: 1,
    size_m_quantity:2,
    size_l_quantity: 0,
    size_xl_quantity: 1,
    description: "Double georgette kameez with embroidered border & tiedyed dupatta",
    image: "http://tiny.cc/obbsqz",
    price: 70,
    category:"Casual-Wear"
})
item12 = Item.create({
    name: "Beige kameez with dupatta",
    sku_number: "CAMAR1908",
    color: "Beige",
    size_s_quantity: 1,
    size_m_quantity:2,
    size_l_quantity: 0,
    size_xl_quantity: 1,
    description: "Double georgette kameez with intricate embroidery",
    image: "http://tiny.cc/1bbsqz",
    price: 70,
    category:"Casual-Wear"
})
item13 = Item.create({
    name: "Peach Kameez with Dupatta",
    sku_number: "CAMAR1906",
    color: "Peach",
    size_s_quantity: 1,
    size_m_quantity:2,
    size_l_quantity: 0,
    size_xl_quantity: 1,
    description: "Linen kameez with all over embroidery",
    image: "http://tiny.cc/3dbsqz",
    price: 65,
    category:"Casual-Wear"
})
item14 = Item.create({
    name: "Cream kameez with dupatta",
    sku_number: "FAFCA1805",
    color: "Cream",
    size_s_quantity: 1,
    size_m_quantity:2,
    size_l_quantity: 0,
    size_xl_quantity: 1,
    description: "Cashmilan kameez with embroidered motif",
    image: "http://tiny.cc/cebsqz",
    price: 75,
    category:"Casual-Wear"
})
item15 = Item.create({
    name: "Parrot green Kameez with Dupatta",
    sku_number: "CAJUL1903",
    color: "Green",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 0,
    size_xl_quantity: 1,
    description: "Cashmilan kameez with floral motif thread embroidery",
    image: "http://tiny.cc/cgbsqz",
    price: 70,
    category:"Casual-Wear"
})
item16 = Item.create({
    name: "Off white Kameez with dupatta",
    sku_number: "CAJUL1901",
    color: "Off white",
    size_s_quantity: 1,
    size_m_quantity:0,
    size_l_quantity: 0,
    size_xl_quantity: 1,
    description: "double georgette kameez with thread embroidery",
    image: "http://tiny.cc/mhbsqz",
    price: 70,
    category:"Casual-Wear"
})
item17 = Item.create({
    name: "Mint Kameez with Dupatta",
    sku_number: "CAFEB1901",
    color: "Mint",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 1,
    description: "Double georgette kameez with thread embroidered",
    image: "http://tiny.cc/bjbsqz",
    price: 75,
    category:"Casual-Wear"
})
item18 = Item.create({
    name: "Onion Pink Kameez with Dupatta",
    sku_number: "CAFEB1902",
    color: "Pink",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 0,
    size_xl_quantity: 1,
    description: "Double georgette kameez with ethread embroidery & printed chiffon dupatta",
    image: "http://tiny.cc/plbsqz",
    price: 68,
    category:"Casual-Wear"
})

# Luxe-pret
item19 = Item.create({
    name: "Mint Shirt with Trouser",
    sku_number: "PWJUL1904",
    color: "Mint",
    size_s_quantity: 1,
    size_m_quantity:0,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Mint overlapping muslin shirt with allover hand embrodery, paired with a flayered trouser ",
    image: "https://cutt.ly/kusfrQs",
    price: 80,
    category:"Luxe-Pret"
})
item20 = Item.create({
    name: "Off white embroidered kameez with dupatta",
    sku_number: "PWMAY1903",
    color: "Off white",
    size_s_quantity: 0,
    size_m_quantity:2,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Off white gerogette kameez with all over thread embroidery and pipe work.",
    image: "https://cutt.ly/eusfp8J",
    price: 100,
    category:"Luxe-Pret"
})
item21 = Item.create({
    name: "Off white kameez with muslin dupatta",
    sku_number: "FAPW1805",
    color: "Off white",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Off white double groegette kameez with all over worked muslin dupatta",
    image: "https://cutt.ly/Iusf3oR",
    price: 120,
    category:"Luxe-Pret"
})
item22 = Item.create({
    name: "Lemon Yellow kameez with dupatta",
    sku_number: "PWMAY1906",
    color: "Yellow",
    size_s_quantity: 1,
    size_m_quantity:0,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Lemon yellow embroidered kameez with muslin dupatta.",
    image: "https://cutt.ly/rusgfZq",
    price: 120,
    category:"Luxe-Pret"
})
item23 = Item.create({
    name: "Pastel queen",
    sku_number: "PWJUL1906",
    color: "Powder Pink",
    size_s_quantity: 1,
    size_m_quantity:0,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Powder pink muslin kameez with thread embroidery.",
    image: "https://cutt.ly/iusgSFi",
    price: 140,
    category:"Luxe-Pret"
})
item24 = Item.create({
    name: "Gray kameez with muslin dupatta",
    sku_number: "PWJUL1904",
    color: "Gray",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 1,
    description: "Lemon yellow overlapping muslin shirt with allover hand embrodery, paired with a flayered trouser ",
    image: "https://cutt.ly/Ousg4f4",
    price: 100,
    category:"Luxe-Pret"
})
item25 = Item.create({
    name: "Black kameez with dupatta",
    sku_number: "PWJUL1902",
    color: "Black",
    size_s_quantity: 1,
    size_m_quantity:0,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Black kameez with intricate sequin work & chiffon dupatta",
    image: "https://cutt.ly/bushxSj",
    price: 100,
    category:"Luxe-Pret"
})
item26 = Item.create({
    name: "Powder pink kameexx with dupatta",
    sku_number: "PWMAY1911",
    color: "Powder Pink",
    size_s_quantity: 0,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Powder pink kameez with pipe work thread embroidery & comes with a dupatta.",
    image: "https://cutt.ly/hushSqr",
    price: 80,
    category:"Luxe-Pret"
})
item27 = Item.create({
    name: "Peach musline kameez",
    sku_number: "PWMAY1905",
    color: "Peach",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 1,
    description: "Peach musline kameez with embroidery & dupatta",
    image: "https://cutt.ly/Iush6VP",
    price: 100,
    category:"Luxe-Pret"
})
item28 = Item.create({
    name: "Brown kameez with dupatta",
    sku_number: "FAPW1805",
    color: "Brown",
    size_s_quantity: 1,
    size_m_quantity:0,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Brown grorgette kameez & thread embroidered bordered dupatta",
    image: "https://cutt.ly/Yusjhy7",
    price: 80,
    category:"Luxe-Pret"
})
item29 = Item.create({
    name: "Off white jacket",
    sku_number: "FADPWDEC1901",
    color: "Off white",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Off white mirror worked jacket with silk inner and pants.",
    image: "https://cutt.ly/SusjYJA",
    price: 110,
    category:"Luxe-Pret"
})
item30 = Item.create({
    name: "Powder pink cape",
    sku_number: "PWMAY1906",
    color: "Pink",
    size_s_quantity: 0,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Powder pink thread embroidered cape with inner & pant.",
    image: "https://cutt.ly/HuskriP",
    price: 80,
    category:"Luxe-Pret"
})

# Evening-wear
item31 = Item.create({
    name: "Black gown",
    sku_number: "FAFWW1806",
    color: "Black",
    size_s_quantity: 1,
    size_m_quantity:0,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Black grown with zardozi work. Comes with a dupatta & pants.",
    image: "https://cutt.ly/Ausl5Ee",
    price: 120,
    category:"Evening-Wear"
})
item32 = Item.create({
    name: "Green Kameez with Dupatta",
    sku_number: "FAFPR1809",
    color: "Green",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Bottle green kameez with net dupatta with zardozi work.",
    image: "https://cutt.ly/UuszAHD",
    price: 140,
    category:"Evening-Wear"
})
item33 = Item.create({
    name: "Burnt orange gown",
    sku_number: "FAPW1805",
    color: "Orange",
    size_s_quantity: 1,
    size_m_quantity:0,
    size_l_quantity: 1,
    size_xl_quantity: 1,
    description: "Burnt orange gown with pipe & thread work",
    image: "https://cutt.ly/Yusz3zy",
    price: 150,
    category:"Evening-Wear"
})
item34 = Item.create({
    name: "Maroon gown with jacket",
    sku_number: "FADPWDEC1902",
    color: "Maroon",
    size_s_quantity: 1,
    size_m_quantity:0,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Maroon gown with muslin jacket with zardozi work",
    image: "https://cutt.ly/XusxaYv",
    price: 120,
    category:"Evening-Wear"
})
item35 = Item.create({
    name: "Powder pink kameez with dupatta",
    sku_number: "FADEDPW2006",
    color: "Pink",
    size_s_quantity: 1,
    size_m_quantity:0,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Powder pink kameex with all over zardozi & pipe work",
    image: "https://cutt.ly/Busxn27",
    price: 200,
    category:"Evening-Wear"
})
item36 = Item.create({
    name: "Magenta jacket",
    sku_number: "FADEDPW2004",
    color: "Pink",
    size_s_quantity: 1,
    size_m_quantity:0,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Magenta jacket with all over zardozi work",
    image: "https://cutt.ly/kusxKkz",
    price: 250,
    category:"Evening-Wear"
})
item37 = Item.create({
    name: "Lavender Sharara",
    sku_number: "FADEDCA2005",
    color: "Purple",
    size_s_quantity: 1,
    size_m_quantity:0,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Lavender muslin sharara with zardozi work.",
    image: "https://cutt.ly/tusx6yg",
    price: 200,
    category:"Evening-Wear"
})
item38 = Item.create({
    name: "Brown kameez with dupatta",
    sku_number: "FADEDPW2002",
    color: "Brown",
    size_s_quantity: 1,
    size_m_quantity:0,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Brown organza kameez with zardozi work.",
    image: "https://cutt.ly/IuscjeC",
    price: 180,
    category:"Evening-Wear"
})
item39 = Item.create({
    name: "Gold cape",
    sku_number: "FADEDPW2001",
    color: "Gold",
    size_s_quantity: 1,
    size_m_quantity:0,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Gold inticate pipe worked cape with silk pant and dupatta",
    image: "https://cutt.ly/muscEmo",
    price: 130,
    category:"Evening-Wear"
})
item40 = Item.create({
    name: "Gray kaftan",
    sku_number: "FADEDPW2007",
    color: "Gray",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Gray all over thread & pipe embroidered kaftan, comes with a katan pant piece.",
    image: "https://cutt.ly/6uscKd4",
    price: 150,
    category:"Evening-Wear"
})
item41 = Item.create({
    name: "Purple Sharara",
    sku_number: "FADNDPW1901",
    color: "Purple",
    size_s_quantity: 1,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Purple kameez with intricate zardozi work, comes with a chiffron skirt and dupatta",
    image: "https://cutt.ly/YusvqV2",
    price: 300,
    category:"Evening-Wear"
})





order1 = Order.create({user_id: faizah.id, total: 35})
order2 = Order.create({user_id: tahsin.id, total: 20})

orderitem1 = OrderItem.create({order_id: order1.id, item_id: item2.id, quantity: 2, size: "L"})
orderitem2 = OrderItem.create({order_id: order2.id, item_id: item1.id, quantity: 1, size: "L"})

review = Review.create({item: item2, user: tahsin, comment: "Great design", rating:8})
