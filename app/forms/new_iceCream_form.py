from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, TextAreaField, IntegerField
from wtforms.validators import DataRequired

class NewIceCreamForm(FlaskForm):
    id = IntegerField('id')
    flavor_name = StringField('flavor_name', validators=[DataRequired()])
    category = SelectField('category', choices=['Dairy', 'Gelato', 'Vegan', 'SuperMarket'])
    icecream_pic_url = TextAreaField('icecream_pic_url', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
