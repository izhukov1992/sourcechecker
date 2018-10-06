from django.conf import settings
from django.conf.urls import include, url
from django.views.decorators.cache import cache_page
from django.contrib import admin
from django.contrib.auth.decorators import login_required

from base import views as base_views

urlpatterns = [
    url('admin/', admin.site.urls),
    url(r'^api/v1/getdata/', include('base.urls', namespace='base')),
    # catch all others because of how history is handled by react router - cache this page because it will never change
    url(r'', cache_page(settings.PAGE_CACHE_SECONDS)(login_required(base_views.IndexView.as_view())), name='index'),
]
