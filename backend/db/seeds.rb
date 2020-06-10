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


item1 = Item.create({
    name: "Soothing Summer",
    sku_number: "FADEDK2004",
    color: "Peach",
    size_s_quantity: 0,
    size_m_quantity:1,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Peach casmilan kurti with lace and thread embroidery.",
    image: "https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/96714899_1036975636699771_5743926276251451392_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=dd_UqDnLHqIAX8P4EQI&_nc_ht=scontent.fhou1-2.fna&oh=eb85a7d180b7e1930d237d291047d1e9&oe=5EFE1A0A",
    price: 20,
    category:"Kurtis"
})
item2 = Item.create({
    name: "Minty Affair",
    sku_number: "FADPBK2003",
    color: "Mint",
    size_s_quantity: 0,
    size_m_quantity: 0,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Double georgette kurti with pipe and thread embroidery.",
    image: "https://scontent.fhou1-1.fna.fbcdn.net/v/t1.0-9/96535169_1035605730170095_600926135856922624_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_ohc=poLT-l-vFqkAX_Ap8fU&_nc_ht=scontent.fhou1-1.fna&oh=99ac50a9e194081246e3d91b813e7356&oe=5EFD11A4",
    price: 35,
    category: "Kurtis"
})
item3 = Item.create({
    name: "Watercolor",
    sku_number: "FADKDEC1902",
    color: "White",
    size_s_quantity: 0,
    size_m_quantity:1,
    size_l_quantity: 0,
    size_xl_quantity: 1,
    description: "White printed kurti with embroidery on the bottom panel.",
    image: "https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/97430318_1039838816413453_2638824908775227392_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=ejchalWFHf0AX8LOj_O&_nc_ht=scontent.fhou1-2.fna&oh=420e509b1f0e10e0dda2a41d8bfea949&oe=5EFD7E3A",
    price: 45,
    category:"Kurtis"
})
item4 = Item.create({
    name: "It's Spring time",
    sku_number: "FADJFK2002",
    color: "Yellow",
    size_s_quantity: 0,
    size_m_quantity:1,
    size_l_quantity: 0,
    size_xl_quantity: 1,
    description: "Yellow double georgette kurti with muslin sleeves with thread embroidery.",
    image: "https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/97416436_1039838776413457_7091883942281740288_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_ohc=tU5oYz99P-8AX-tdfMQ&_nc_ht=scontent.fhou1-2.fna&oh=f50e444f531d4f7ad10aa87c443a542b&oe=5EFD89C4",
    price: 45,
    category:"Kurtis"
})
item5 = Item.create({
    name: "Blush in pink",
    sku_number: "FADJFK2003",
    color: "Pink",
    size_s_quantity: 0,
    size_m_quantity:1,
    size_l_quantity: 0,
    size_xl_quantity: 1,
    description: "Powder pink musling kurti with beaded motif",
    image: "https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/97134957_1039838759746792_3079994255679160320_n.jpg?_nc_cat=108&_nc_sid=110474&_nc_ohc=zuJhm3XbPxUAX8LeYWZ&_nc_ht=scontent.fhou1-2.fna&oh=ae43e4a4832628060104b12a3e8a8c3b&oe=5EFFE3A3",
    price: 45,
    category:"Kurtis"
})
item6 = Item.create({
    name: "Parrot",
    sku_number: "CAJUL1903",
    color: "Green",
    size_s_quantity: 0,
    size_m_quantity:0,
    size_l_quantity: 0,
    size_xl_quantity: 1,
    description: "Parrot green cashmilan kurta embellished with hand embroideryed floral motifs & delicate laces. Paired with a pure chiffon dupatta and trouser",
    image: "https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/97510759_1039838589746809_5663560493181173760_n.jpg?_nc_cat=109&_nc_sid=110474&_nc_ohc=Un-3EXyiYCAAX_TSx75&_nc_ht=scontent.fhou1-2.fna&oh=c7ed20a7fb887d3b501e337de3797e90&oe=5EFCB92A",
    price: 70,
    category:"Casual-Wear"
})
item7 = Item.create({
    name: "Zoya",
    sku_number: "FAPW1805",
    color: "Orange",
    size_s_quantity: 0,
    size_m_quantity:0,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Burnt orange gown embrllished with inticate bead work and hand embroidery. Paired with dupatta and trousers.",
    image: "https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-0/p206x206/97820923_1039838696413465_4486204271087321088_n.jpg?_nc_cat=103&_nc_sid=110474&_nc_ohc=3qAa5wPwFqQAX9dxlsP&_nc_ht=scontent.fhou1-2.fna&_nc_tp=6&oh=aa2689fdec56a7bc4e72af89ab6e5274&oe=5EFF79F2",
    price: 100,
    category:"Evening-Wear"
})
item8 = Item.create({
    name: "Lemon Yellow Shirt with Trouser",
    sku_number: "FAPW1805",
    color: "Yellow",
    size_s_quantity: 0,
    size_m_quantity:0,
    size_l_quantity: 1,
    size_xl_quantity: 0,
    description: "Lemon yellow overlapping muslin shirt with allover hand embrodery, paired with a flayered trouser ",
    image: "https://scontent.fhou1-2.fna.fbcdn.net/v/t1.0-9/97537671_1039838483080153_5732473947820130304_n.jpg?_nc_cat=109&_nc_sid=110474&_nc_ohc=_RDiVBPatLIAX9GOkV2&_nc_ht=scontent.fhou1-2.fna&oh=556a98cd9f35ac7dd78ddea3b8abed9d&oe=5EFD2DCF",
    price: 80,
    category:"Luxe-Pret"
})




order1 = Order.create({user_id: faizah.id, total: 35})
order2 = Order.create({user_id: tahsin.id, total: 20})

orderitem1 = OrderItem.create({order_id: order1.id, item_id: item2.id, quantity: 2, size: "L"})
orderitem2 = OrderItem.create({order_id: order2.id, item_id: item1.id, quantity: 1, size: "L"})

review = Review.create({item: item2, user: tahsin, comment: "Great design", rating:8})
