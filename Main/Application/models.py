from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class quries(models.Model):
    question = models.TextField()
    time = models.TimeField(auto_now=True)
    author = models.ForeignKey(User,on_delete=models.CASCADE,editable=False,null=True,blank=True)
    
    def __str__(self):
        return f'{self.author} questions'
    
class videos(models.Model):
    link = models.CharField(max_length=3000,primary_key=True)
    
    def __str__(self):
        return f'{self.link}'
    