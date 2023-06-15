from django.urls import path
from . import views

urlpatterns = [
    path('vendors/', views.VendorList.as_view(), name='vendors-list'),
    path('vendors/<int:pk>/', views.VendorDetailsList.as_view(), name='vendors-details-list'),
]