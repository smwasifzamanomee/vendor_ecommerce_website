from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.vendor)
admin.site.register(models.productCategory)
admin.site.register(models.product)
