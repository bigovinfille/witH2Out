from flask import Blueprint
from datetime import datetime

timed = Blueprint('timed',__name__)

@timed.route('/api/timed')
def getTimed():
    now = datetime.now()
    return {'timed': now.strftime("%m/%d/%Y %H:%M:%S")} 