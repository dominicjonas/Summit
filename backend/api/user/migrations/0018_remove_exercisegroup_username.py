# Generated by Django 3.2.8 on 2021-11-14 22:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0017_auto_20211114_1857'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='exercisegroup',
            name='username',
        ),
    ]
