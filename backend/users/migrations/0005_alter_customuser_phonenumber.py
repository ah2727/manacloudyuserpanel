# Generated by Django 5.1.3 on 2024-11-17 21:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_alter_customuser_phonenumber'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='phonenumber',
            field=models.BooleanField(default=False, null=True, unique=True),
        ),
    ]
