from flask import Blueprint, jsonify, session, request, redirect
from app.models import db, Shop

shop_routes = Blueprint('shops', __name__)

@shop_routes.route('/all', methods=["GET"])
def getShops():
    shops = Shop.query.all()
    return {'shops': [shop.to_dict() for shop in shops]}
