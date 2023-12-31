from django.db import models
from django.contrib.auth.models import User

# vendor list Model
class vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)

    def __str__(self):
        return self.user.username

# product category list Model
class productCategory(models.Model):
    title = models.CharField(max_length=100)
    details = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title

# product list Model

class product(models.Model):
    vendor = models.ForeignKey(vendor, on_delete=models.SET_NULL, null=True, blank=True, related_name='category_product') # condition for delete vendor
    category = models.ForeignKey(productCategory, on_delete=models.SET_NULL, null=True, blank=True) # condition for delete category
    title = models.CharField(max_length=100)
    details = models.TextField(null=True, blank=True)
    price = models.FloatField(null=True, default=0.00)

    def __str__(self):
        return self.title

# Customer Model 

class customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# order Model

class order(models.Model):
    customer = models.ForeignKey(customer, on_delete=models.CASCADE) # condition for delete customer
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.customer.name
    
# order items Model

class orderItem(models.Model):
    product = models.ForeignKey(product, on_delete=models.CASCADE, related_name='order_items') # condition for delete product
    order = models.ForeignKey(order, on_delete=models.CASCADE) # condition for delete order
    
    def __str__(self):
        return self.product.title

# customer address Model

class customerAddress(models.Model):
    customer = models.ForeignKey(customer, on_delete=models.CASCADE, related_name='customer_address') # condition for delete customer
    address = models.CharField(max_length=100)
    default_address = models.BooleanField(default=False)

    def __str__(self):
        return self.address

# products rating and reviews

class productRating(models.Model):
    product = models.ForeignKey(product, on_delete=models.CASCADE, related_name='product_rating') # condition for delete product
    customer = models.ForeignKey(customer, on_delete=models.CASCADE, related_name='customer_rating') # condition for delete customer
    rating = models.IntegerField(default=0)
    review = models.TextField(null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.rating} - {self.review}'

class productImage(models.Model):
    product = models.ForeignKey(product, on_delete=models.CASCADE, related_name='product_image') # condition for delete product
    image = models.ImageField(upload_to='product_image', null=True, blank=True)

    def __str__(self):
        return self.product.title
    


