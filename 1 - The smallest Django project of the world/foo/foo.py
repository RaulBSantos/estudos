import os
import sys
from django.conf import settings


DEBUG = os.environ.get('DEBUG', 'on') == 'on'
# Secret key aleatória apenas para fins didáticos
# Em situação de produção, isso causaria invalidações indesejadas de cookies
SECRET_KEY = os.environ.get('SECRET_KEY', '5c)t10fu-wgx6m!l7#h413h=2kq_c(gi=zratwc+r6r)&)vfv6')

ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', 'localhost').split(',')

settings.configure(
    DEBUG=DEBUG,
    SECRET_KEY=SECRET_KEY,
    ALLOWED_HOSTS=ALLOWED_HOSTS,
    ROOT_URLCONF=__name__,
    MIDDLEWRE_CLASSES=(
        'django.middleware.commom.CommomMiddleWare',
        'django.middleware.csrf.CsrfViewMiddleware',
        'django.middleware.clickjacking.XFrameOptionsMiddleware',
    )
)


from django.conf.urls import url
from django.core.wsgi import get_wsgi_application
from django.http import HttpResponse

def index(request):
    return HttpResponse('Hello World')


urlpatterns = (
    url(r'^$', index),
)

application = get_wsgi_application()

if __name__ == "__main__":
    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)
