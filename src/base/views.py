from django.conf import settings
from django.http import HttpResponse, Http404
from django.views.generic import View

from rest_framework import status, viewsets
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from base.models import Resource
from base.serializers import ResourceSerializer, ResourceCheckSerializer

import os
import requests


class IndexView(View):
    """
    Render main page.
    """

    def get(self, request):
        """
        Return html for main application page.
        """

        abspath = open(os.path.join(settings.BASE_DIR, 'static_dist/index.html'), 'r')
        return HttpResponse(content=abspath.read())


class ResourceViewSet(viewsets.ModelViewSet):
    """
    ViewSet class of Resource model.
    """

    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    permission_classes = [IsAuthenticated]


class ResourceCheckView(APIView):
    """
    Return protected data main page.
    """

    def get_object(self, pk):
        try:
            return Resource.objects.get(pk=pk)
        except Resource.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        resource = self.get_object(pk)

        try:
            status_code = requests.get(resource.url).status_code
        except:
            status_code = 404

        context = {
            'status_code': status_code
        }
        serializer = ResourceCheckSerializer(resource, context=context)
        return Response(serializer.data)
