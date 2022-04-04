from .db import db

icecream_join_shop = db.Table(
    "icecream_join_shop",
    db.Model.metadata,
    db.Column("ice_cream_id", db.Integer, db.ForeignKey("icecreams.id"), primary_key=True),
    db.Column("shop_id", db.Integer, db.ForeignKey("shops.id"), primary_key=True),
)
