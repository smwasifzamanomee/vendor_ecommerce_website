from django.contrib import admin
from . import models

# Register your models here.

# vendor admin
admin.site.register(models.vendor)

# product category admin
admin.site.register(models.productCategory)

# product admin
admin.site.register(models.product)

# customer admin
admin.site.register(models.customer)

# order admin
admin.site.register(models.order)

# order item admin
admin.site.register(models.orderItem)
