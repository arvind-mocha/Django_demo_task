from django.shortcuts import render
from django.views.generic import ListView
from .models import quries,books
from django.contrib.auth.models import User
# Create your views here.

def home(request):
        return render(request,'Application/home.html')
    
def doubts(request):
    current_user = request.user
    
    if request.method == 'POST':
        query = request.POST['msg']
        q = quries(question=query,author=current_user)
        q.save()
    
    
    if current_user.is_authenticated  :
        try:
            user = User.objects.filter(username=current_user)[0]
            questions = quries.objects.filter(author=user)
            q = list(questions)
        except IndexError:
            return render(request,'Application/doubts.html')
        
        context = {
            'questions': q
        }
        return render(request,'Application/doubts.html',context)
    
    return render(request,'Application/doubts.html')

class BooksListView(ListView):  
    model = books
    template_name = 'Application/books.html'  
    context_object_name = 'books'
    ordering = ['-date']  
        
   