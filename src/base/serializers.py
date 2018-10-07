from rest_framework import serializers

from base.models import Resource


class ResourceSerializer(serializers.ModelSerializer):
    """
    Serializer of Reource model
    """

    class Meta:
        model = Resource
        fields = '__all__'
