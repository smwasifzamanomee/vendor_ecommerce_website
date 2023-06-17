from rest_framework import generics, permissions, viewsets
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
    
# Customer view

class CustomerList(generics.ListCreateAPIView):
    queryset = models.customer.objects.all()
    serializer_class = serializers.CustomerSerializer

# CustomerDetailsList view

class CustomerDetailsList(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.customer.objects.all()
    serializer_class = serializers.CustomerDetailsSerializer

# Order view

class OrderList(generics.ListCreateAPIView):
    queryset = models.order.objects.all()
    serializer_class = serializers.OrderSerializer
    
# OrderDetails view

class OrderDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.orderItem.objects.all()
    serializer_class = serializers.OrderDetailsSerializer
    
# customer address view

class CustomerAddressList(generics.ListCreateAPIView):
    queryset = models.customerAddress.objects.all()
    serializer_class = serializers.CustomerAddressSerializer

# customer address viewset

# class CustomerAddressViewSet(viewsets.ModelViewSet):
#     queryset = models.customerAddress.objects.all()
#     serializer_class = serializers.CustomerAddressSerializer
    
# customer product rating and review 

class ProductRatingList(generics.ListCreateAPIView):
    queryset = models.productRating.objects.all()
    serializer_class = serializers.ProductRatingSerializer

# customer product rating and review viewset

# class ProductRatingViewSet(viewsets.ModelViewSet):
#     queryset = models.productRating.objects.all()
#     serializer_class = serializers.ProductRatingSerializer
    



    