from flask_frozen import Freezer
from musk import MuskAPI
freezer = Freezer(MuskAPI)

if __name__ == '__main__':
    freezer.freeze()
