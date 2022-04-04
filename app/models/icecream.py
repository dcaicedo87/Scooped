from .db import db
from .icecream_join_shop import icecream_join_shop


class IceCream(db.Model):
    __tablename__ = "icecreams"

    id = db.Column(db.Integer, primary_key=True)
    flavor_name = db.Column(db.String(100), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    icecream_pic_url = db.Column(db.Text, nullable=False)
    description = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates="icecreams")
    reviews = db.relationship("Review", back_populates="icecream")
    shops = db.relationship("Shop", secondary=icecream_join_shop, back_populates="icecreams")

    def to_dict(self):
        return {
            "id": self.id,
            "flavor_name": self.flavor_name,
            "category": self.category,
            "icecream_pic_url": self.icecream_pic_url,
            "description": self.description,
        }
