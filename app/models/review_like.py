from .db import db

review_like = db.Table(
    "review_like",
    db.Model.metadata,
    db.Column("review_id", db.Integer, db.ForeignKey("reviews.id"), primary_key=True),
    db.Column("user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
)
