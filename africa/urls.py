"""africa URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from africaonline import views as av

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", av.afriq, name='afriq'),
    path("about/", av.afriq1, name='afriq1'),
    path("gallery/", av.afriq2, name='afriq2'),
    path("faq/", av.afriq3, name='afriq3'),
    path("contact/", av.afriq4, name='afriq4'),
    path("profile/", av.afriq5, name='afriq5'),
]
