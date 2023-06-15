from rest_framework import generics, permissions
from . import serializers
from . import models

# Create your views here.

class VendorList(generics.ListCreateAPIView):
    queryset = models.vendor.objects.all()
    serializer_class = serializers.VendorSerializer
    # permission_classes = [permissions.IsAuthenticated,]

class VendorDetailsList(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.vendorDetail.objects.all()
    serializer_class = serializers.VendorDetailsSerializer
    # permission_classes = [permissions.IsAuthenticated,]

    