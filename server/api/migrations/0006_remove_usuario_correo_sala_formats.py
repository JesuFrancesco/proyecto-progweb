# Generated by Django 4.2.10 on 2024-02-19 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_rename_time_window_hour_usuario_codigo'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usuario',
            name='correo',
        ),
        migrations.AddField(
            model_name='sala',
            name='formats',
            field=models.ManyToManyField(through='api.Sala_Format', to='api.format'),
        ),
    ]
