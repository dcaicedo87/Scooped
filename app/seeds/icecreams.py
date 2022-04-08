from app.models import db, IceCream


def seed_icecreams():
    icecream1 = IceCream(
        flavor_name="Funky Monkey",
        category="Dairy",
        icecream_pic_url="https://images.heb.com/is/image/HEBGrocery/000403001",
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, voluptatum. Rem modi quo quidem fuga illum earum vitae, dolorum adipisci inventore, vel laborum mollitia eaque.",
        user_id=1,
    )

    icecream2 = IceCream(
        flavor_name="Passion Fruit",
        category="Vegan",
        icecream_pic_url="https://www.onegreenplanet.org/ezoimgfmt/149366112.v2.pressablecdn.com/wp-content/uploads/2018/02/screen-shot-2018-02-22-at-10-14-34-am.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1",
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero modi fuga beatae culpa similique magni distinctio, accusamus natus quos esse unde reprehenderit obcaecati cupiditate.",
        user_id=2,
    )

    icecream3 = IceCream(
        flavor_name="Fragola",
        category="Gelato",
        icecream_pic_url="https://images.heb.com/is/image/HEBGrocery/000403001",
        description="Vero modi fuga beatae culpa similique magni distinctio, accusamus natus quos esse unde reprehenderit obcaecati cupiditate molestias autem ex dolor impedit veritatis? Lorem ipsum dolor.",
        user_id=3,
    )

    icecream4 = IceCream(
        flavor_name="Banana Dream",
        category="Dairy",
        icecream_pic_url="https://simpleveganblog.com/wp-content/uploads/2021/07/banana-ice-cream-2.jpg",
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi accusamus rerum molestias aliquid, laboriosam, explicabo magni repellat facere sequi blanditiis unde similique tenetur.",
        user_id=1,
    )

    icecream5 = IceCream(
        flavor_name="Brown Sugar Blondie Ice Cream",
        category="Dairy",
        icecream_pic_url="https://www.benandjerry.com.au/files/live/sites/systemsite/files/flavors/products/aa/mini-cups/open-closed-minis/brown-sugar-blondie-landing-open.png",
        description="Buttery Brown Sugar Ice Cream with Blonde Brownies and Butterscotch Toffee Flakes",
        user_id=5,
    )

    icecream6 = IceCream(
        flavor_name="Crema",
        category="Gelato",
        icecream_pic_url="https://assets.wsimgs.com/wsimgs/rk/images/dp/recipe/202210/0037/img18l.jpg",
        description="Crema, also known as Custard, is the most popular flavors in Italian gelateries.",
        user_id=6,
    )

    icecream7 = IceCream(
        flavor_name="Milk & Cookies",
        category="Dairy",
        icecream_pic_url="https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/milk-cookies-non-dairy-landing.png",
        description="Vanilla Non-Dairy Frozen Dessert with Chocolate Chip Cookies, Chocolate Sandwich Cookies & Chocolate Cookie Swirls",
        user_id=7,
    )

    icecream8 = IceCream(
        flavor_name="Noce Di Cocco",
        category="Gelato",
        icecream_pic_url="https://lacuocaignorante.altervista.org/wp-content/uploads/2018/08/gelato-al-cocco-320x180.jpg",
        description="Made with fresh cream, milk, sugar and vanilla, and of course, coconuts. It's the perfect frozen treat.",
        user_id=8,
    )

    icecream9 = IceCream(
        flavor_name="Bananas Foster",
        category="Vegan",
        icecream_pic_url="https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Bananas-Foster-Sundaes_EXPS_CIMZ17_42034_B07_13_4b.jpg",
        description="Banana & Cinnamon Non-Dairy Frozen Dessert with Almond Toffee Pieces & a Salted Caramel Core",
        user_id=9,
    )

    icecream10 = IceCream(
        flavor_name="Non-Dairy Mint Chocochunk",
        category="Vegan",
        icecream_pic_url="https://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/bananas-foster-core-sunflower-detail.png",
        description="Sweet & smooth Mint flavored Frozen Dessert with Chocolate Chunks & gooey Swirls of Fudge.",
        user_id=10,
    )

    icecream11 = IceCream(
        flavor_name="P.B. & Cookies",
        category="Vegan",
        icecream_pic_url="https://www.hersheyicecream.com/products/images/premium-gold/peanut-butter-cookies-and-cream-scoop.gif",
        description="Vanilla Non-Dairy Frozen Dessert with Chocolate Sandwich Cookies & Crunchy Peanut Butter Swirls",
        user_id=1,
    )

    icecream12 = IceCream(
        flavor_name="Gelato Alla Nocciola",
        category="Gelato",
        icecream_pic_url="https://assets.tmecosys.cn/image/upload/t_web600x528/img/recipe/vimdb/123799_978-0-5404-5404.jpg",
        description="A staple at every Italian gelateria, nocciola is a classic hazelnut gelato.",
        user_id=2,
    )

    icecream13 = IceCream(
        flavor_name="Birthday Batter",
        category="Dairy",
        icecream_pic_url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4RUde2U6RQ3f7496EnO5kCXnf7-nxsIfOQ&usqp=CAU",
        description="The ultimate cake batter ice cream that’s exploding with sprinkles!",
        user_id=3,
    )

    icecream14 = IceCream(
        flavor_name="The Akutaq",
        category="Dairy",
        icecream_pic_url="https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Bowl-Of-Strawberry-Ice-Cream.webp",
        description="The Akutaq (a-goo-duk) or Eskimo ice cream is an Alaskan flavor that’s made of whipped fat and berries, such as blueberries, cloudberries, and cranberries. ",
        user_id=4,
    )

    icecream15 = IceCream(
        flavor_name="Kinda Baked",
        category="Dairy",
        icecream_pic_url="https://images.squarespace-cdn.com/content/v1/60874d1bdb18651f658460e2/1624988026674-8NK7A60I7VPUE1QA6LYZ/CC_0421_TONED_HR_053.jpg?format=750w",
        description="We start with half vanilla and half chocolate oat milk ice creams, then add generous heaps of house made chocolate chip cookie dough and chunks of fudge brownies.",
        user_id=5,
    )

    icecream16 = IceCream(
        flavor_name="Lychee Raspberry Daiquiri",
        category="Dairy",
        icecream_pic_url="https://images.squarespace-cdn.com/content/v1/60874d1bdb18651f658460e2/1624988810968-M45TBXUPSC5XLKHW21IB/CC_0421_TONED_HR_026.jpg?format=750w",
        description="We blend juicy lychees with coconut milk to make a sherbet that is both refreshing and creamy.",
        user_id=6,
    )

    icecream17 = IceCream(
        flavor_name="Rare Cheese Cake Ice Cream",
        category="Dairy",
        icecream_pic_url="https://image.entabe.jp/upload/images/sasa%281%29.jpg",
        description="It tastes exactly what the name says - each mouthful tastes like a little piece a cheesecake in your mouth, with a slight hint of lemon and sweet honey.",
        user_id=7,
    )

    icecream18 = IceCream(
        flavor_name="Black Sesame",
        category="Vegan",
        icecream_pic_url="https://www.tablefortwoblog.com/wp-content/uploads/2021/06/black-sesame-ice-cream-recipe-photo-tablefortwoblog-5-scaled.jpg",
        description="Black Sesame Ice cream is a deep, nutty and delicious good time! ",
        user_id=8,
    )

    icecream19 = IceCream(
        flavor_name="Peppermint Bark Gelato",
        category="Gelato",
        icecream_pic_url="https://food.fnr.sndimg.com/content/dam/images/food/plus/fullset/2020/07/27/0/FNP_Vallery_No-Churn-Peppermint-Bark-Ice-Cream-6_s4x3.jpg.rend.hgtvcom.616.462.suffix/1595882478738.jpeg",
        description="We took white chocolate peppermint gelato and mixed in semi-sweet chocolatey flakes to create our Peppermint Bark Gelato, the perfect treat that tastes like winter in a pint.",
        user_id=9,
    )

    icecream20 = IceCream(
        flavor_name="Metcha Matcha",
        category="Vegan",
        icecream_pic_url="https://static.toiimg.com/thumb/57810182.cms?imgsize=1796105&width=800&height=800",
        description="The slight bitterness and strong flavors of Matcha balanced with the sweetness of cream is truly a heavenly combination that you will instantly fall in love with. ",
        user_id=10,
    )


    db.session.add_all(
        [
            icecream1,
            icecream2,
            icecream3,
            icecream4,
            icecream5,
            icecream6,
            icecream7,
            icecream8,
            icecream9,
            icecream10,
            icecream11,
            icecream12,
            icecream13,
            icecream14,
            icecream15,
            icecream16,
            icecream17,
            icecream18,
            icecream19,
            icecream20,
        ]
    )

    db.session.commit()


def undo_icecreams():
    db.session.execute("TRUNCATE icecreams RESTART IDENTITY CASCADE;")
    db.session.commit()
