from flask import Blueprint, jsonify, session, request, redirect
from app.models import User, db, IceCream
from app.forms.new_iceCream_form import NewIceCreamForm


iceCream_routes = Blueprint('iceCreams', __name__)


@iceCream_routes.route('/all', methods=["GET"])
def getIceCreams():
    iceCreams = IceCream.query.all()
    return {'iceCreams': [ice_cream.to_dict() for ice_cream in iceCreams]}


@iceCream_routes.route('/add', methods=['POST'])
def add_ice_cream():
    form = NewIceCreamForm()
    new_ice = IceCream(
        flavor_name=form.data['flavor_name'],
        category=form.data['category'],
        icecream_pic_url=form.data['icecream_pic_url'],
        description=form.data['description'],
        user_id=form.data['user_id']
    )
    db.session.add(new_ice)
    db.session.commit()
    return new_ice.to_dict()


##need to make put route with url /edit.
##everything else is all set with the update for iceCreams
@iceCream_routes.route('/edit', methods=['PUT'])
def edit_ice_cream():
    form = NewIceCreamForm()
    iceCream = IceCream.query.get(form.data['id'])
    iceCream.flavor_name = form.data['flavor_name']
    iceCream.category = form.data['category']
    iceCream.icecream_pic_url = form.data['icecream_pic_url']
    iceCream.description = form.data['description']

    db.session.add(iceCream)
    db.session.commit()
    return iceCream.to_dict()
