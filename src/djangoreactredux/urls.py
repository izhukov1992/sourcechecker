from django.conf import settings
from django.conf.urls import include, url
from django.views.decorators.cache import cache_page
from django.contrib import admin
from django.contrib.auth.decorators import login_required

from rest_framework import routers

from base import views as base_views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/v1/resources/', login_required(base_views.ResourcesView.as_view())),
    # catch all others because of how history is handled by react router - cache this page because it will never change
    url(r'', cache_page(settings.PAGE_CACHE_SECONDS)(login_required(base_views.IndexView.as_view())), name='index'),
]
