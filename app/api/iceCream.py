from flask import Blueprint, jsonify, session, request
from app.models import User, db, IceCream


iceCream_routes = Blueprint('iceCreams', __name__)


@iceCream_routes.route('/all', methods=["GET"])
def getIceCreams():
    iceCreams = IceCream.query.all()
    return iceCreams
