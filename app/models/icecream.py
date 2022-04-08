from .db import db

# from .icecream_join_shop import icecream_join_shop


class IceCream(db.Model):
    __tablename__ = "icecreams"

    id = db.Column(db.Integer, primary_key=True)
    flavor_name = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    icecream_pic_url = db.Column(db.Text, nullable=False)
    description = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    shop_id = db.Column(db.Integer, db.ForeignKey("shops.id", ondelete="CASCADE"), nullable=False)

    # many(icecreams) to one(user)
    user = db.relationship("User", back_populates="icecreams")
    # one(icecream) to many(reviews)
    reviews = db.relationship("Review", back_populates="icecream")
    # many(icecreams) to many(shops), refer to icecream_join_shop
    # shops = db.relationship("Shop", secondary=icecream_join_shop, back_populates="icecreams")
    shop = db.relationship("Shop", back_populates="icecreams")


    @property
    def avg_rating(self):
        if len(self.reviews) > 0:
            return sum([review.rating for review in self.reviews])/len(self.reviews)
        return "No reviews yet"

    def to_dict(self):
        return {
            "id": self.id,
            "flavor_name": self.flavor_name,
            "category": self.category,
            "icecream_pic_url": self.icecream_pic_url,
            "description": self.description,
            "user_id": self.user_id,
            "shop_id": self.shop_id,
            "avg_rating": self.avg_rating
        }
