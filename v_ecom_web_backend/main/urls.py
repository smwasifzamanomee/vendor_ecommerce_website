from django.urls import path
from . import views

urlpatterns = [
    path('vendors/', views.VendorList.as_view(), name='vendors-list'),
    path('vendors/<int:pk>/', views.VendorDetailsList.as_view(), name='vendors-details-list'),
    path('product-category/', views.ProductCategoryList.as_view(), name='product-category-list'),
    path('product/', views.ProductList.as_view(), name='product-list'),
    path('product/<int:pk>/', views.ProductDetailsList.as_view(), name='product-details-list'),
]