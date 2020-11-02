from django.shortcuts import render,redirect
from .forms import UserRegisterForm,UserUpdateForm,ProfileUpdateForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .models import courses

# Create your views here.
def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            to_email = form.cleaned_data.get('email')
            messages.success(request,f'Now you can Login {username}!')
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

    current_user = request.user
    
    try:
        course = f'{courses.objects.filter(student=current_user)[0]}'
    except IndexError:
        course = None
    
    context = {
        'course':course,
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
