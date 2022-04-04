from flask.cli import AppGroup
from .users import seed_users, undo_users
from .icecreams import seed_icecreams, undo_icecreams
from .reviews import seed_reviews, undo_reviews
from .shops import seed_shops, undo_shops

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup("seed")


# Creates the `flask seed all` command
@seed_commands.command("all")
def seed():
    seed_users()
    seed_icecreams()
    seed_reviews()
    seed_shops()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command("undo")
def undo():
    undo_users()
    undo_icecreams()
    undo_reviews()
    undo_shops()
    # Add other undo functions here
