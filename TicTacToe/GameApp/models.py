from django.db import models

# Create your models here.

class Game(models.Model):
    gameID = models.IntegerField()
    date = models.DateField()
    winner = models.CharField(max_length=264, unique=True)


class User(models.Model):
    userID = models.CharField(max_length=264, unique=True)
    wint = models.IntegerField()
