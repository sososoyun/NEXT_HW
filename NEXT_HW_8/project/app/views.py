from django.shortcuts import render, redirect
from .models import Article
# Create your views here.

def new(request):
    if request.method =='POST':
        
        
        new_article=Article.objects.create(
            title=request.POST['title'],
            content=request.POST['content'],
            category=request.POST['category'],
        )
        return redirect('list')
    

    return render(request, 'new.html', {'categories':['취미', '음식', '프로그래밍']})

def list(request):
    category_types = ['취미', '음식', '프로그래밍']
    category_counts = {}
    for category in category_types:
        category_counts[category] = Article.objects.filter(category=category).count()
    articles = Article.objects.all()
    return render(request, 'list.html', {'articles': articles, 'category_types': category_types, 'category_counts': category_counts})


def detail(request, article_id):
    article=Article.objects.get(id=article_id)
    
    
    
    return render(request, 'detail.html', {'article':article})

def category(request, category):
    articles = Article.objects.filter(category=category)
    
    return render(request, 'category.html', {'articles': articles, 'category': category})