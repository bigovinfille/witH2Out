
import requests
import json
from flask import Blueprint

doml = Blueprint('doml',__name__)

@doml.route('/api/doml')
def getDoml():
    api_url = "https://waterservices.usgs.gov/nwis/iv/?format=json&sites=374938122251801&parameterCd=00300&siteType=ES&siteStatus=all"

    response = requests.get(api_url)

    if response.status_code == 200:
        data = json.loads(response.text)
  
        value = data['value']['timeSeries'][0]['values'][0]['value'][0]['value']
    

        return{'doml' : value}

    else:
        return(f"Error: {response.status_code}")