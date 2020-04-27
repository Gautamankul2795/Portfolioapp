# Generated by Django 3.0.3 on 2020-04-20 02:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContactMe',
            fields=[
                ('msg_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='', max_length=30)),
                ('email', models.EmailField(default='', max_length=254)),
                ('message', models.CharField(default='', max_length=1000)),
            ],
        ),
    ]
