from django.contrib.auth.models import User
from django.db import models
from django import forms

class SignUpForm(forms.Form):
    username = forms.CharField(max_length=150)
    password = forms.CharField(widget=forms.PasswordInput)

    def clean_username(self):
        username = self.cleaned_data.get('username')
        
        return username

    def clean_password(self):
        password = self.cleaned_data.get('password')
        
        return password

class Post(models.Model):
   title = models.CharField(max_length=50)
   content = models.TextField()
   author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts', default=1)
   last_viewed = models.DateTimeField(auto_now_add=True)

   def __str__(self):
       return self.title
   
class Comment(models.Model):
   post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
   content = models.TextField()
   author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments')


   def __str__(self):
       return self.content
