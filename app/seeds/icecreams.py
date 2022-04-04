from app.models import db, IceCream


def seed_icecreams():
    funky_monkey = IceCream(
        flavor_name="Funky Monkey",
        category="Dairy",
        icecream_pic_url="https://images.heb.com/is/image/HEBGrocery/000403001",
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, voluptatum. Rem modi quo quidem fuga illum earum vitae, dolorum adipisci inventore, vel laborum mollitia eaque cupiditate numquam explicabo atque molestias eveniet placeat magni quisquam error quaerat quis incidunt beatae? Vero possimus corporis iste, dolores, aut quaerat sapiente praesentium molestiae tempora earum sed optio dicta harum tenetur. Vero asperiores tenetur eum error suscipit architecto vitae enim amet placeat, pariatur consectetur dolorem quam cupiditate hic debitis aspernatur corrupti ullam similique perspiciatis. Tempore amet repudiandae et quaerat accusantium repellat, laboriosam illo commodi doloribus error inventore soluta obcaecati impedit, dolores quas, adipisci nisi blanditiis.",
        user_id=1,
    )

    passion_fruit = IceCream(
        flavor_name="Passion Fruit",
        category="Vegan",
        icecream_pic_url="https://www.onegreenplanet.org/ezoimgfmt/149366112.v2.pressablecdn.com/wp-content/uploads/2018/02/screen-shot-2018-02-22-at-10-14-34-am.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1",
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero modi fuga beatae culpa similique magni distinctio, accusamus natus quos esse unde reprehenderit obcaecati cupiditate molestias autem ex dolor impedit veritatis? Ipsam magni autem quasi ducimus consequuntur saepe vitae eveniet, ratione modi corrupti numquam quod quae, beatae iusto labore molestiae officia? Quas eligendi optio itaque, eveniet ducimus laudantium ratione sapiente laborum nesciunt accusamus exercitationem nulla obcaecati hic magnam, corporis voluptatibus quae dolores perferendis blanditiis eos at.",
        user_id=2,
    )

    fragola = IceCream(
        flavor_name="Fragola",
        category="Gelato",
        icecream_pic_url="https://images.heb.com/is/image/HEBGrocery/000403001",
        description="Vero modi fuga beatae culpa similique magni distinctio, accusamus natus quos esse unde reprehenderit obcaecati cupiditate molestias autem ex dolor impedit veritatis? Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Ipsam magni autem quasi ducimus consequuntur saepe vitae eveniet, ratione modi corrupti numquam quod quae, beatae iusto labore molestiae officia? Quas eligendi optio itaque, eveniet ducimus laudantium ratione sapiente laborum nesciunt accusamus exercitationem nulla obcaecati hic magnam, corporis voluptatibus quae dolores perferendis blanditiis eos at.",
        user_id=3,
    )

    banana_dream = IceCream(
        flavor_name="Banana Dream",
        category="Dairy",
        icecream_pic_url="https://simpleveganblog.com/wp-content/uploads/2021/07/banana-ice-cream-2.jpg",
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi accusamus rerum molestias aliquid, laboriosam, explicabo magni repellat facere sequi blanditiis unde similique tenetur ab esse minus quam ratione veritatis quas earum nisi excepturi? Dolorem sapiente similique aliquid nisi voluptatibus, quas recusandae tenetur obcaecati, veritatis quo doloribus, blanditiis debitis natus! Ut?",
        user_id=1,
    )

    db.session.add(funky_monkey)
    db.session.add(passion_fruit)
    db.session.add(fragola)
    db.session.add(banana_dream)

    db.session.commit()


def undo_icecreams():
    db.session.execute("TRUNCATE icecreams RESTART IDENTITY CASCADE;")
    db.session.commit()
