
import requests
import json
from flask import Blueprint

spcd = Blueprint('spcd',__name__)

@spcd.route('/api/spcd')
def getSpcd():
    api_url = "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=374938122251801&parameterCd=00095&siteType=ES&siteStatus=all"

    response = requests.get(api_url)

    if response.status_code == 200:
        data = json.loads(response.text)
  
        value = data['value']['timeSeries'][0]['values'][0]['value'][0]['value']
    

        return{'spcd' : value}

    else:
        return(f"Error: {response.status_code}")