# Generated by Django 4.2.10 on 2024-02-17 18:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='extract',
            field=models.CharField(max_length=500),
        ),
    ]