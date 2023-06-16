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
    
    

    
# OrderItem view

# class OrderList(generics.ListCreateAPIView):
#     queryset = models.orderList.objects.all()
#     serializer_class = serializers.OrderListSerializer

# OrderDetailsList view

# class OrderDetailsList(generics.RetrieveUpdateDestroyAPIView):
#     queryset = models.orderList.objects.all()
#     serializer_class = serializers.OrderDetailsListSerializer
    



    