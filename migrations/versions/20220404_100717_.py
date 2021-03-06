"""empty message

Revision ID: dd26e31293c9
Revises: ffdc0a98111c
Create Date: 2022-04-04 10:07:17.451535

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = "dd26e31293c9"
down_revision = "ffdc0a98111c"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column("users", sa.Column("is_active", sa.Boolean(), server_default="true", nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("users", "is_active")
    # ### end Alembic commands ###
