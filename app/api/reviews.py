from flask import Blueprint, jsonify, session, request, redirect
from app.models import User, db, IceCream, Review
from app.forms import NewReviewForm


review_routes = Blueprint("reviews", __name__)


@review_routes.route("/<int:iceCreamId>", methods=["GET"])
def getIceCreams(iceCreamId):
    reviews = Review.query.filter(Review.ice_cream_id == iceCreamId).all()
    return {"reviews": [review.to_dict() for review in reviews]}


@review_routes.route("/<int:iceCreamId>", methods=["POST"])
def postReview(iceCreamId):
    form = NewReviewForm()
    new_review = Review(
        content=form.data["content"],
        rating=form.data["rating"],
        user_id=form.data["user_id"],
        ice_cream_id=form.data["ice_cream_id"],
    )

    db.session.add(new_review)
    db.session.commit()
    return new_review.to_dict()
