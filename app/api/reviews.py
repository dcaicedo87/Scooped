from flask import Blueprint, jsonify, session, request, redirect
from app.models import User, db, IceCream, Review


review_routes = Blueprint('reviews', __name__)

@review_routes.route('/<int:iceCreamId>', methods=["GET"])
def getIceCreams(iceCreamId):
    reviews = Review.query.all()
    return {'reviews': [review.to_dict() for review in reviews]}
