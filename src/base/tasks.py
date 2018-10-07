import requests

from base.models import Resource
from djangoreactredux.celery import app


@app.task
def checkResources():
    resources = Resource.objects.all()

    for resource in resources:
        try:
            status_code = requests.get(resource.url).status_code
        except:
            status_code = 404

        resource.status = (status_code > 199 and status_code < 300)
        resource.save()
