# Generated by Django 4.2.10 on 2024-02-17 18:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_movie_extract'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='extract',
            field=models.CharField(max_length=1400),
        ),
        migrations.AlterField(
            model_name='movie',
            name='href',
            field=models.CharField(max_length=60),
        ),
        migrations.AlterField(
            model_name='movie',
            name='thumbnail',
            field=models.CharField(max_length=200),
        ),
    ]