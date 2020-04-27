from django.db import models


# Create your models here.

class ContactMe(models.Model):
    msg_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30, default='')
    email = models.EmailField(default='')
    message = models.CharField(max_length=1000, default='')

    def __str__(self):
        return self.name
