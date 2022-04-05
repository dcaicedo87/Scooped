from flask import Blueprint, jsonify, session, request, redirect
from app.models import User, db, IceCream
from app.forms.new_iceCream_form import NewIceCreamForm


iceCream_routes = Blueprint('iceCreams', __name__)


@iceCream_routes.route('/all', methods=["GET"])
def getIceCreams():
    iceCreams = IceCream.query.all()
    print ({'users': [ice_cream.to_dict() for ice_cream in iceCreams]})
    return {'iceCreams': [ice_cream.to_dict() for ice_cream in iceCreams]}

## working on this
@iceCream_routes.route('/add', methods=['POST'])
def add_ice_cream():
    form = NewIceCreamForm()
    print('AAAAAAAAAAAAAAAAAAA')
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

# comment = Comment(
#             user_name=form.data['user_name'],
#             body=form.data['body'],
#         )
