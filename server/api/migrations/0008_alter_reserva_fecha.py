# Generated by Django 4.2.10 on 2024-02-21 19:07

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_remove_reserva_time_alter_reserva_fecha'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reserva',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 21, 14, 7, 1, 392314)),
        ),
    ]
