from flask import Blueprint, jsonify, session, request
from app.models import User, db, IceCream


iceCream_routes = Blueprint('iceCreams', __name__)


@iceCream_routes.route('/all', methods=["GET"])
def getIceCreams():
    iceCreams = IceCream.query.all()
    print ({'users': [ice_cream.to_dict() for ice_cream in iceCreams]})
    return {'iceCreams': [ice_cream.to_dict() for ice_cream in iceCreams]}

## working on this
@iceCream_routes.route('/add', methods=['POST'])
def add_ice_cream():
    form = NewCommentForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        comment = Comment(
            user_name=form.data['user_name'],
            body=form.data['body'],
        )
        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()
    else:

        return form.errors
