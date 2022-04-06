from .db import db
from .review_like import review_like


class Review(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(500), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    ice_cream_id = db.Column(db.Integer, db.ForeignKey("icecreams.id"), nullable=False)

    # many(reviews) to one(user)
    user = db.relationship("User", back_populates="reviews")
    # many(reviews) to one(icecream)
    icecream = db.relationship("IceCream", back_populates="reviews")
    # many(reviews) to many(users), refer to review_like
    user_likes = db.relationship("User", secondary=review_like, back_populates="review_likes")

    def to_dict(self):
        return {
            "id": self.id,
            "content": self.content,
            "user_id": self.user_id,
            "ice_cream_id": self.ice_cream_id,
            "rating": self.rating
        }
