from rest_framework import serializers
from . import models 

# vendor serializer

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.vendor
        fields = ('user', 'address')
        depth = 1
        
# vendor details serializer               
class VendorDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.vendor
        fields = ('user', 'address', 'name', 'phone')
        depth = 1
        
# product category serializer

class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.productCategory
        fields = ('title', 'details')
        depth = 1
        
# product serializer

class ProductSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.product
        fields = ('vendor', 'category', 'title', 'details', 'price')
        depth = 1

# product details serializer

class ProductDetailsSerializer(serializers.ModelSerializer):
        
    class Meta:
        model = models.product
        fields = ('vendor', 'category', 'title', 'details', 'price')
        depth = 1