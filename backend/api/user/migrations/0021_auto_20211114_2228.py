# Generated by Django 3.2.8 on 2021-11-14 22:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0020_auto_20211114_2209'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='exercise_group',
        ),
        migrations.AddField(
            model_name='exercise',
            name='exercise_weight',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=6),
        ),
        migrations.AlterField(
            model_name='exercisegroup',
            name='exercise_group',
            field=models.CharField(blank=True, default='exercise_group', max_length=50, null=True),
        ),
    ]
