from django.http.response import HttpResponseGone
from django.shortcuts import render,redirect
from .forms import UserRegisterForm,UserUpdateForm,ProfileUpdateForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.core.mail import BadHeaderError,send_mail
from django.conf import settings
from .models import Profile

# Create your views here.
def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            to_email = form.cleaned_data.get('email')
            messages.success(request,f'Now you can Login {username}!')
            subject = f'Welcome To Happybrains'
            message = 'A way to better future'
            from_email = settings.EMAIL_HOST_USER
            try:
                send_mail(subject, message, from_email,[to_email],fail_silently= False)
        
            except BadHeaderError:
                send_mail('unsuccessfull mail','BadheaderError', from_email, ['arvindarvind2210@gmail.com'],fail_silently= False)
                return HttpResponseGone('Invalid header found.')
            return redirect('login')
        
    else:
        form = UserRegisterForm()
          
    return render(request,'users/register.html',{'form':form})

@login_required
def profile(request):
    if request.method == 'POST':
        u_form = UserUpdateForm(request.POST,instance=request.user)
        p_form = ProfileUpdateForm(request.POST,request.FILES,instance=request.user.profile)
     
        if u_form.is_valid and p_form.is_valid():
            try :
                u_form.save()
                p_form.save()
                messages.success(request,f'Profile has been updated')
            except ValueError:
                messages.info(request,f'Username already exist') 
                
                
            return redirect('profile')
    else:
        u_form = UserUpdateForm(instance=request.user)
        p_form = ProfileUpdateForm(instance=request.user.profile)
     
    
    context = {
        'u_form':u_form,
        'p_form':p_form
    }
    
    return render(request,'users/profile.html',context)


def Duser(request):
    if request.method == 'POST':
        current_user = request.user
        print('hi da')
        current_user.delete()
        messages.success(request,f'Your Account as been successfully removed')
        return redirect('home')
            
    return render(request,'users/Duser.html')