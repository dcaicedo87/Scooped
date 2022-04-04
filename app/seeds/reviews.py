from app.models import db, Review


def seed_reviews():
    review_1 = Review(
        content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, quibusdam repellendus, esse cum aperiam tempore tempora praesentium a recusandae perspiciatis possimus corrupti nulla enim consectetur laboriosam, natus voluptas hic nisi.',
        rating=4,
        user_id=1,
        ice_cream_id=1,
    )

    review_2 = Review(
        content='sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero justo laoreet sit amet cursus sit amet dictum sit amet',
        rating=3,
        user_id=2,
        ice_cream_id=2,
    )

    review_3 = Review(
        content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, quibusdam repellendus, esse cum aperiam tempore tempora praesentium a recusandae perspiciatis possimus corrupti nulla enim consectetur laboriosam.',
        rating=4,
        user_id=3,
        ice_cream_id=3,
    )
    review_4 = Review(
        content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, quibusdam repellendus, esse cum aperiam tempore tempora praesentium a recusandae perspiciatis possimus corrupti nulla enim consectetur laboriosam, natus voluptas hic nisi.',
        rating=5,
        user_id=4,
        ice_cream_id=4,
    )

    db.session.add(review_1)
    db.session.add(review_2)
    db.session.add(review_3)
    db.session.add(review_4)

    db.session.commit()


def undo_reviews():
    db.session.execute("TRUNCATE reviews RESTART IDENTITY CASCADE;")
    db.session.commit()
