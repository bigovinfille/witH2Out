
from flask import Flask

from temp import temp
from timed import timed
from sedi import sedi
from sali import sali
from fchl import fchl
from dops import dops
from doml import doml
from spcd import spcd

def create_app():
    app = Flask(__name__)

    app.register_blueprint(temp)
    app.register_blueprint(timed)
    app.register_blueprint(sedi)
    app.register_blueprint(sali)
    app.register_blueprint(fchl)
    app.register_blueprint(dops)
    app.register_blueprint(doml)
    app.register_blueprint(spcd)

    return app
