from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.api.auth_routes import validation_errors_to_error_messages
from app.models import User, db, Review
from app.forms import EditProfileForm

user_routes = Blueprint("users", __name__)


@user_routes.route("/")
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route("/all")
def all_users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route("/<int:id>")
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route("/<int:id>", methods=["PUT"])
@login_required
def profile_edit(id):
    form = EditProfileForm()
    user = User.query.get(id)
    # form["csrf_token"].data = request.cookies["csrf_token"]
    # if form.validate_on_submit():
    user.username = form.data["username"]
    user.email = form.data["email"]
    db.session.add(user)
    db.session.commit()
    return user.to_dict()

    # return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# review feed for profile page
@user_routes.route("/<int:id>/reviews")
@login_required
def review_feed(id):
    review_list = Review.query.filter(Review.user_id == id).all()
    return {"reviews": [review.to_dict() for review in review_list]}
