# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-09 09:25
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('appPrincipale', '0011_objet_code_postal'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='objet',
            name='image',
        ),
    ]
