# Generated by Django 4.1.7 on 2023-06-17 00:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0012_productrating'),
    ]

    operations = [
        migrations.AddField(
            model_name='productrating',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
