"""empty message

Revision ID: 02b87161a64d
Revises: dd26e31293c9
Create Date: 2022-04-04 10:55:49.324864

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '02b87161a64d'
down_revision = 'dd26e31293c9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('icecreams',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('flavor_name', sa.String(length=100), nullable=False),
    sa.Column('category', sa.String(length=100), nullable=False),
    sa.Column('icecream_pic_url', sa.Text(), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('icecreams')
    # ### end Alembic commands ###
