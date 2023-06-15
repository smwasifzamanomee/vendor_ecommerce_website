from rest_framework import serializers
from . import models 

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.vendor
        fields = ('user', 'address')
        depth = 1
        
        
        
class VendorDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.vendorDetail
        fields = ('user', 'address', 'name', 'phone')
        depth = 1
        