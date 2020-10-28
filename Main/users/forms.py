from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, UsernameField


class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()
    age = forms.CharField(max_length=2)
    
    class Meta:
        model = User
        fields = ['username','email','age','password1','password2']
