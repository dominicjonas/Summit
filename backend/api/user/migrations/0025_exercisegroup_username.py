# Generated by Django 3.2.8 on 2021-11-14 22:45

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0024_exercise_exercise_group'),
    ]

    operations = [
        migrations.AddField(
            model_name='exercisegroup',
            name='username',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
