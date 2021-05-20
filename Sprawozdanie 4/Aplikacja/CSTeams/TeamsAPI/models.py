from django.db import models

# Create your models here.


class Team(models.Model):
    name = models.CharField(max_length=70)
    country = models.CharField(max_length=50)
    coach = models.CharField(max_length=70)
    p1 = models.CharField(max_length=70)
    p2 = models.CharField(max_length=70)
    p3 = models.CharField(max_length=70)
    p4 = models.CharField(max_length=70)
    p5 = models.CharField(max_length=70)

    def __str__(self):
        return self.name
