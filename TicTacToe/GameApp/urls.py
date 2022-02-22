from django.conf.urls import url
from GameApp import views


urlpatterns = [
    url(r'^$', views.form_view, name='login'),
]
