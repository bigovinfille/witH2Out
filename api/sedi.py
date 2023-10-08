
import requests
import json
from flask import Blueprint

sedi = Blueprint('sedi',__name__)

@sedi.route('/api/sedi')
def getSedi():
    api_url = "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=374938122251801&parameterCd=99409&siteType=ES&siteStatus=all"

    response = requests.get(api_url)

    if response.status_code == 200:
        data = json.loads(response.text)
  
        value = data['value']['timeSeries'][0]['values'][0]['value'][0]['value']
    

        return{'sedi' : value}

    else:
        return(f"Error: {response.status_code}")