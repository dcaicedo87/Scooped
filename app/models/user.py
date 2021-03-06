from .db import db
from .review_like import review_like
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    is_active = db.Column(
        db.Boolean, default=True, server_default="true", nullable=False
    )  # potential bug with server_default??

    # one(user) to many(icecreams)
    icecreams = db.relationship("IceCream", back_populates="user")
    # one(user) to many(reviews)
    reviews = db.relationship("Review", back_populates="user")
    # many(reviews) to many(users), refer to review_like
    review_likes = db.relationship("Review", secondary=review_like, back_populates="user_likes")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {"id": self.id, "username": self.username, "email": self.email}
