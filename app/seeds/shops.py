from app.models import db, Shop
from app.models.icecream import IceCream


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

    icecream_1 = IceCream.query.filter_by(flavor_name="Funky Monkey").first()
    shop_1.icecreams.append(icecream_1)

    icecream_2 = IceCream.query.filter_by(flavor_name="Passion Fruit").first()
    shop_2.icecreams.append(icecream_2)

    icecream_3 = IceCream.query.filter_by(flavor_name="Fragola").first()
    shop_3.icecreams.append(icecream_3)

    icecream_4 = IceCream.query.filter_by(flavor_name="Banana Dream").first()
    shop_4.icecreams.append(icecream_4)

    db.session.commit()


def undo_shops():
    db.session.execute("TRUNCATE shops RESTART IDENTITY CASCADE;")
    db.session.commit()
