from django.shortcuts import render, redirect
from .models import Article, Comment, Reply
from django.urls import reverse
from django.shortcuts import get_object_or_404

# Create your views here.

def new(request):
    if request.method == 'POST':
        new_article = Article.objects.create(
            title=request.POST['title'],
            content=request.POST['content'],
            category=request.POST['category'],
        )
        return redirect('list')

    return render(request, 'new.html', {'categories': ['취미', '음식', '프로그래밍']})

def list(request):
    category_types = ['취미', '음식', '프로그래밍']
    category_counts = {}
    for category in category_types:
        category_counts[category] = Article.objects.filter(category=category).count()
    articles = Article.objects.all()
    return render(request, 'list.html', {'articles': articles, 'category_types': category_types, 'category_counts': category_counts})

def detail(request, article_id):
    article = Article.objects.get(id=article_id)
    comments = Comment.objects.filter(article=article)
    
    if request.method == 'POST':
        content = request.POST['content']
        comment_id = request.POST.get('comment_id')
        if comment_id:
            comment = Comment.objects.get(pk=comment_id)
            Reply.objects.create(comment=comment, content=content)
        else:
            Comment.objects.create(article=article, content=content)
        return redirect(reverse('detail', args=[article_id]))
    
    return render(request, 'detail.html', {'article': article, 'comments': comments})

def category(request, category):
    articles = Article.objects.filter(category=category)
    return render(request, 'category.html', {'articles': articles, 'category': category})

def delete_comment(request, article_id, comment_pk):  # 수정된 부분
    comment = get_object_or_404(Comment, pk=comment_pk)
    article_id = comment.article.id
    comment.delete()
    redirect_url = reverse('detail', args=[article_id])
    return redirect(redirect_url)

def reply_comment(request, article_id, parent_comment_pk):
    article = Article.objects.get(id=article_id)
    parent_comment = Comment.objects.get(pk=parent_comment_pk)
    
    if request.method == 'POST':
        content = request.POST['content']
        Reply.objects.create(
            comment=parent_comment,
            content=content
        )
        return redirect(reverse('detail', args=[article_id]))
    
    return redirect(reverse('detail', args=[article_id]))

def base(request):
    return render(request, 'base.html')
