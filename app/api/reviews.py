from flask import Blueprint, jsonify, session, request, redirect
from app.models import User, db, IceCream, Review


review_routes = Blueprint('reviews', __name__)

@review_routes.route('/<int:iceCreamId>', methods=["GET"])
def getIceCreams(iceCreamId):
    print("hit backend routes &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
    reviews = Review.query.filter(Review.ice_cream_id == iceCreamId).all()
    print(reviews, "*************************************")
    return {'reviews': [review.to_dict() for review in reviews]}
