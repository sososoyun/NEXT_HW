# Generated by Django 5.0.3 on 2024-04-03 14:58

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_article_category'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='created_at',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
