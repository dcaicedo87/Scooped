"""added ondelete on reviews model ice_cream_id fkey

Revision ID: 7c2da3a35f34
Revises: 034128eb9289
Create Date: 2022-04-07 16:59:07.991486

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7c2da3a35f34'
down_revision = '034128eb9289'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('reviews_ice_cream_id_fkey', 'reviews', type_='foreignkey')
    op.create_foreign_key(None, 'reviews', 'icecreams', ['ice_cream_id'], ['id'], ondelete='CASCADE')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'reviews', type_='foreignkey')
    op.create_foreign_key('reviews_ice_cream_id_fkey', 'reviews', 'icecreams', ['ice_cream_id'], ['id'])
    # ### end Alembic commands ###