
import requests
import json
from flask import Blueprint

sali = Blueprint('sali',__name__)

@sali.route('/api/sali')
def getSali():
    api_url = "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=374938122251801&parameterCd=90860&siteType=ES&siteStatus=all"

    response = requests.get(api_url)

    if response.status_code == 200:
        data = json.loads(response.text)
  
        value = data['value']['timeSeries'][0]['values'][0]['value'][0]['value']
    

        return{'sali' : value}

    else:
        return(f"Error: {response.status_code}")