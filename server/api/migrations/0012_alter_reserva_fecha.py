# Generated by Django 4.2.10 on 2024-02-23 22:42

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_reserva_fecha'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reserva',
            name='fecha',
            field=models.DateTimeField(default=datetime.datetime(2024, 2, 23, 17, 42, 9, 820010)),
        ),
    ]