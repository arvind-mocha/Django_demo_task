from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.home,name='home'),
    path('quries',views.doubts,name='doubts'),
    path('study_materials',views.BooksListView.as_view(),name='books')
]
