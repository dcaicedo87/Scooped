from .db import db
from .icecream_join_shop import icecream_join_shop


class Shop(db.Model):
    __tablename__ = "shops"

    id = db.Column(db.Integer, primary_key=True)
    shop_name = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    city = db.Column(db.String(100), nullable=False)
    street_name = db.Column(db.String(150), nullable=False)
    street_number = db.Column(db.Integer, nullable=False)
    postal_code = db.Column(db.Integer, nullable=False)
    description = db.Column(db.Text, nullable=False)

    icecreams = db.relationship("IceCream", secondary=icecream_join_shop, back_populates="shops")

    def to_dict(self):
        return {
            "id": self.id,
            "shop_name": self.shop_name,
            "state": self.state,
            "city": self.city,
            "street_name": self.street_name,
            "street_number": self.street_number,
            "postal_code": self.postal_code,
            "description": self.description,
        }
