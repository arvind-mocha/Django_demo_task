from django.shortcuts import render
from .models import quries,videos
from django.contrib.auth.models import User
# Create your views here.

def home(request):
    current_user = request.user
    
    if request.method == 'POST':
        query = request.POST['msg']
        q = quries(question=query,author=current_user)
        q.save()
    
    video = list(videos.objects.all())
    
    if current_user.is_authenticated  :
        try:
            user = User.objects.filter(username=current_user)[0]
            questions = quries.objects.filter(author=user)
            q = list(questions)
        except IndexError:
            return render(request,'Application/home.html')
        
        context = {
            'questions': q,
            'video': video
        }
        return render(request,'Application/home.html',context)
    
    else:
        return render(request,'Application/home.html')
        
   