from app.models import db, Shop

# from app.models.icecream import IceCream


def seed_shops():
    shop_1 = Shop(
        shop_name="Graff Dairy",
        shop_pic_url="https://media-cdn.tripadvisor.com/media/photo-s/10/77/4b/27/photo0jpg.jpg",
        state="Colorado",
        city="Grand Junction",
        street_name="29 Rd",
        street_number=581,
        postal_code=81504,
        description="Satisfy your sweet tooth with a visit to Graff Dairy in Grand Junction, CO. Browse our online menu of homemade ice cream, milk shakes, food and drinks!",
    )

    shop_2 = Shop(
        shop_name="Jaxson's Ice Cream Parlor & Restaurant",
        shop_pic_url="https://img1.10bestmedia.com/Images/Photos/233141/p-Jaxson-s_55_660x440_201404241457.jpg",
        state="Florida",
        city="Dania Beach",
        street_name="S Federal Hwy",
        street_number=128,
        postal_code=33004,
        description="Huge ice cream scoops & American fare are served at this old-fashioned parlor with memorabilia.",
    )

    shop_3 = Shop(
        shop_name="Fentons Creamery",
        shop_pic_url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Fentons_Creamery_in_Oakland.jpg/1280px-Fentons_Creamery_in_Oakland.jpg",
        state="California",
        city="Oakland",
        street_name="Piedmont Ave",
        street_number=4226,
        postal_code=94611,
        description="Funky dessert cafe with creative shaved ice concoctions & waffles, plus craft coffee drinks & tea.",
    )

    shop_4 = Shop(
        shop_name="Pop's Old Fashion Ice Cream Co",
        shop_pic_url="https://portsoyicecream.co.uk/site/wp-content/uploads/ice-cream-collection-1600x1067.jpg",
        state="Virginia",
        city="Alexandria",
        street_name="King St",
        street_number=109,
        postal_code=22314,
        description="Long-running parlor with a vintage atmosphere doling out housemade ice cream in lots of flavors.",
    )

    db.session.add(shop_1)
    db.session.add(shop_2)
    db.session.add(shop_3)
    db.session.add(shop_4)

    # icecream_1 = IceCream.query.filter_by(flavor_name="Funky Monkey").first()
    # shop_1.icecreams.append(icecream_1)

    # icecream_2 = IceCream.query.filter_by(flavor_name="Passion Fruit").first()
    # shop_2.icecreams.append(icecream_2)

    # icecream_3 = IceCream.query.filter_by(flavor_name="Fragola").first()
    # shop_3.icecreams.append(icecream_3)

    # icecream_4 = IceCream.query.filter_by(flavor_name="Banana Dream").first()
    # shop_4.icecreams.append(icecream_4)

    # icecream_5 = IceCream.query.filter_by(flavor_name="Brown Sugar Blondie Ice Cream").first()
    # shop_1.icecreams.append(icecream_5)

    # icecream_6 = IceCream.query.filter_by(flavor_name="Crema").first()
    # shop_2.icecreams.append(icecream_6)

    # icecream_7 = IceCream.query.filter_by(flavor_name="Milk & Cookies").first()
    # shop_3.icecreams.append(icecream_7)

    # icecream_8 = IceCream.query.filter_by(flavor_name="Noce Di Cocco").first()
    # shop_4.icecreams.append(icecream_8)

    # icecream_9 = IceCream.query.filter_by(flavor_name="Bananas Foster").first()
    # shop_1.icecreams.append(icecream_9)

    # icecream_10 = IceCream.query.filter_by(flavor_name="Non-Dairy Mint Chocochunk").first()
    # shop_2.icecreams.append(icecream_10)

    # icecream_11 = IceCream.query.filter_by(flavor_name="P.B. & Cookies").first()
    # shop_3.icecreams.append(icecream_11)

    # icecream_12 = IceCream.query.filter_by(flavor_name="Gelato Alla Nocciola").first()
    # shop_4.icecreams.append(icecream_12)

    # icecream_13 = IceCream.query.filter_by(flavor_name="Birthday Batter").first()
    # shop_1.icecreams.append(icecream_13)

    # icecream_14 = IceCream.query.filter_by(flavor_name="The Akutaq").first()
    # shop_2.icecreams.append(icecream_14)

    # icecream_15 = IceCream.query.filter_by(flavor_name="Kinda Baked").first()
    # shop_3.icecreams.append(icecream_15)

    # icecream_16 = IceCream.query.filter_by(flavor_name="Lychee Raspberry Daiquiri").first()
    # shop_4.icecreams.append(icecream_16)

    # icecream_17 = IceCream.query.filter_by(flavor_name="Rare Cheese Cake Ice Cream").first()
    # shop_1.icecreams.append(icecream_17)

    # icecream_18 = IceCream.query.filter_by(flavor_name="Black Sesame").first()
    # shop_2.icecreams.append(icecream_18)

    # icecream_19 = IceCream.query.filter_by(flavor_name="Peppermint Bark Gelato").first()
    # shop_3.icecreams.append(icecream_19)

    # icecream_20 = IceCream.query.filter_by(flavor_name="Metcha Matcha").first()
    # shop_4.icecreams.append(icecream_20)

    db.session.commit()


def undo_shops():
    db.session.execute("TRUNCATE shops RESTART IDENTITY CASCADE;")
    db.session.commit()
