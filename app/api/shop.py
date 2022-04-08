from flask import Blueprint, jsonify, session, request, redirect
from app.models import db, Shop, IceCream  # icecream_join_shop

shop_routes = Blueprint("shops", __name__)


@shop_routes.route("/all", methods=["GET"])
def getShops():
    shops = Shop.query.all()
    return {"shops": [shop.to_dict() for shop in shops]}


# @shop_routes.route('/join/<int:id>', methods=["GET"])
# def getJoints(id):
#     joins = IceCream.query.join(icecream_join_shop).join(Shop).filter(icecream_join_shop.c.shop_id == id).all()
#     return {'iceCreams': [join.to_dict() for join in joins]}
