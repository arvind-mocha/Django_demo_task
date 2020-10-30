from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    images = models.ImageField(default='default.png',upload_to='profile_pics')
    
    def __str__(self):
        return f'{self.user.username} Profile'
    
class courses(models.Model):
    course = models.CharField(max_length=200)
    student = models.CharField(max_length=300,primary_key=True)
    
    def __str__(self):
        return self.course