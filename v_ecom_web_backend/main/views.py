from rest_framework import generics, permissions
from . import serializers
from . import models

# VendorList view 

class VendorList(generics.ListCreateAPIView):
    queryset = models.vendor.objects.all()
    serializer_class = serializers.VendorSerializer
    # permission_classes = [permissions.IsAuthenticated,]

# VendorDetailsList view
class VendorDetailsList(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.vendor.objects.all()
    serializer_class = serializers.VendorDetailsSerializer
    # permission_classes = [permissions.IsAuthenticated,]

# ProductCategoryList view

class ProductCategoryList(generics.ListCreateAPIView):
    queryset = models.productCategory.objects.all()
    serializer_class = serializers.ProductCategorySerializer
    
# Product List view

class ProductList(generics.ListCreateAPIView):
    queryset = models.product.objects.all()
    serializer_class = serializers.ProductSerializer
    
# ProductDetailsList view

class ProductDetailsList(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.product.objects.all()
    serializer_class = serializers.ProductDetailsSerializer

    