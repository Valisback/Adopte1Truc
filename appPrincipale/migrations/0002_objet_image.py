# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-14 13:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('appPrincipale', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='objet',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='photos/'),
        ),
    ]
