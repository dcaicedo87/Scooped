from .db import db

# joint table for icecream <=> shop
icecream_join_shop = db.Table(
    "icecream_join_shop",
    db.Model.metadata,
    db.Column("ice_cream_id", db.Integer, db.ForeignKey("icecreams.id", ondelete="CASCADE"), primary_key=True),
    db.Column("shop_id", db.Integer, db.ForeignKey("shops.id", ondelete="CASCADE"), primary_key=True),
)
