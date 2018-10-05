from django.contrib import admin
from base.models import Resource


class ResourceAdmin(admin.ModelAdmin):
    """
    Resource admin class.
    """

    model = Resource


admin.site.register(Resource, ResourceAdmin)
