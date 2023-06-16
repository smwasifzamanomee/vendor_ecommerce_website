from rest_framework import serializers
from . import models 

# vendor serializer

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.vendor
        fields = ('id', 'user', 'address')
        # depth = 1
        
# vendor details serializer               
class VendorDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.vendor
        fields = ('id', 'user', 'address', 'name', 'phone')
        # depth = 1
        
# product category serializer

class ProductCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.productCategory
        fields = ('id', 'title', 'details')
        # depth = 1
        
# product serializer

class ProductSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.product
        fields = ('id', 'vendor', 'category', 'title', 'details', 'price')
        # depth = 1

# product details serializer

class ProductDetailsSerializer(serializers.ModelSerializer):
        
    class Meta:
        model = models.product
        fields = ('id', 'vendor', 'category', 'title', 'details', 'price')
        # depth = 1

# customer serializer

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.customer
        fields = ('id', 'user', 'name', 'phone')
        # depth = 1

# customer details serializer

class CustomerDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.customer
        fields = ('id', 'user', 'address', 'name', 'phone')
        # depth = 1
        
# order serializer

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.order
        fields = ('id', 'customer', 'date_created')
        depth = 1

# order details serializer

class OrderDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.orderItem
        fields = ('id', 'product', 'order')
        depth = 1

# customer address serializer

class CustomerAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.customerAddress
        fields = ('id', 'customer', 'address')
        depth = 1

