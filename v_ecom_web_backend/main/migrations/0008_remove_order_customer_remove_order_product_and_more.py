# Generated by Django 4.1.7 on 2023-06-16 07:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0007_customer_order_alter_vendor_name_alter_vendor_phone_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='customer',
        ),
        migrations.RemoveField(
            model_name='order',
            name='product',
        ),
        migrations.RemoveField(
            model_name='orderlist',
            name='order',
        ),
        migrations.DeleteModel(
            name='customer',
        ),
        migrations.DeleteModel(
            name='order',
        ),
        migrations.DeleteModel(
            name='orderList',
        ),
    ]
