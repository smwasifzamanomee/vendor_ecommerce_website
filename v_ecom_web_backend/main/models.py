from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=100)

    # def __str__(self):
    #     return self.address

class product(models.Model):
    title = models.CharField(max_length=100)
    details = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title

class category(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    details = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.title
