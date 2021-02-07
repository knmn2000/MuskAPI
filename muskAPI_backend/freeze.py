from flask_frozen import Freezer
from app import MuskAPI

freezer = freezer(MuskAPI)

if __name__ == '__main__':
    freezer.freeze()
