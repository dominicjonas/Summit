# Generated by Django 3.2.8 on 2021-11-14 22:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0018_remove_exercisegroup_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='exercise',
            name='exercise_name',
        ),
        migrations.RemoveField(
            model_name='exercise',
            name='exercise_weight',
        ),
    ]
