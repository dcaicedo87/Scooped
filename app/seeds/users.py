from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(username="Demo", email="demo@aa.io", password="password")
    marnie = User(username="Marnie", email="marnie@aa.io", password="password")
    bobbie = User(username="Bobbie", email="bobbie@aa.io", password="password")
    daniel = User(username="Daniel", email="daniel@aa.io", password="password")
    leo = User(username="Leo", email="leo@aa.io", password="password")
    shams = User(username="Shams", email="shams@aa.io", password="password")
    junki = User(username="Junki", email="junki@aa.io", password="password")
    fred = User(username="Fred", email="Fred@aa.io", password="password")
    robert = User(username="Robert", email="robert@aa.io", password="password")
    larry = User(username="Larry", email="larry@aa.io", password="password")

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(daniel)
    db.session.add(leo)
    db.session.add(shams)
    db.session.add(junki)
    db.session.add(fred)
    db.session.add(robert)
    db.session.add(larry)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute("TRUNCATE users RESTART IDENTITY CASCADE;")
    db.session.commit()
