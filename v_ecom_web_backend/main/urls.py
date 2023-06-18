from django.urls import path
from . import views
from rest_framework import routers

# product rating and review serializer admin
# router = routers.DefaultRouter()
# router.register('product-rating', views.ProductRatingViewSet)

# customer address serializer admin
# router.register('customer-address', views.CustomerAddressViewSet)


urlpatterns = [
    path('vendors/', views.VendorList.as_view(), name='vendors-list'),
    path('vendors/<int:pk>/', views.VendorDetailsList.as_view(), name='vendors-details-list'),
    path('product-category/', views.ProductCategoryList.as_view(), name='product-category-list'),
    path('product-category/<int:pk>/', views.ProductCategoryDetailsList.as_view(), name='product-category-details-list'),
    path('product/', views.ProductList.as_view(), name='product-list'),
    path('product/<int:pk>/', views.ProductDetailsList.as_view(), name='product-details-list'),
    path('customer/', views.CustomerList.as_view(), name='customer-list'),
    path('customer/<int:pk>/', views.CustomerDetailsList.as_view(), name='customer-details-list'),
    path('orders/', views.OrderList.as_view(), name='order-list'),
    path('order/<int:pk>/', views.OrderDetails.as_view(), name='order-details-list'),
    path('customer-address/', views.CustomerAddressList.as_view(), name='customer-address-list'),
    path('product-rating/', views.ProductRatingList.as_view(), name='product-rating-list'),
]

# urlpatterns += router.urls