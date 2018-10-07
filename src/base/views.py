from django.conf import settings
from django.http import HttpResponse, Http404
from django.views.generic import View

from rest_framework import status, viewsets
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from base.models import Resource
from base.serializers import ResourceSerializer

import os


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


class ResourcesView(APIView):
    """
    Return protected data main page.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        resources = Resource.objects.all()
        serializer = ResourceSerializer(resources, many=True)
        return Response(serializer.data)
