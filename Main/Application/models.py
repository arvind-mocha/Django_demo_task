from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class quries(models.Model):
    question = models.TextField()
    time = models.TimeField(auto_now=True)
    author = models.ForeignKey(User,on_delete=models.CASCADE,editable=False,null=True,blank=True)
    
    def __str__(self):
        return f'{self.author} questions'
    
class books(models.Model):
    author = models.ForeignKey(User,on_delete=models.CASCADE)
    title = models.CharField(max_length=100,primary_key=True)
    date = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='book_pics')
    files = models.FileField(upload_to='books_files')
    
    def __str__(self):
        return f'{self.title} is a book'