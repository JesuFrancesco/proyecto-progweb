# Generated by Django 4.2.10 on 2024-02-22 01:14

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_alter_reserva_fecha'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reserva',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 21, 20, 14, 21, 8159)),
        ),
    ]
