from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField
from wtforms.validators import DataRequired


class NewReviewForm(FlaskForm):
    id = IntegerField("id")
    content = StringField("content", validators=[DataRequired()])
    rating = SelectField("rating", choices=[0, 1, 2, 3, 4, 5])
    user_id = IntegerField("user_id", validators=[DataRequired()])
    ice_cream_id = IntegerField("ice_cream_id", validators=[DataRequired()])
