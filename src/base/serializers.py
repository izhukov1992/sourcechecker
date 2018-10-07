from rest_framework import serializers

from base.models import Resource


class ResourceSerializer(serializers.ModelSerializer):
    """
    Serializer of Reource model
    """

    class Meta:
        model = Resource
        fields = '__all__'


class ResourceCheckSerializer(ResourceSerializer):
    """
    Serializer of Reource object checking result
    """

    status = serializers.SerializerMethodField('status_code')

    def status_code(self, obj):
        return self.context.get('status_code')
