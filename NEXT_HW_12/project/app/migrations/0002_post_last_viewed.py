# Generated by Django 5.0.4 on 2024-04-25 13:36

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='last_viewed',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2024, 4, 25, 13, 36, 9, 695908, tzinfo=datetime.timezone.utc)),
            preserve_default=False,
        ),
    ]