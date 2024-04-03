from django.db import models
from django.utils import timezone
# Create your models here.
class Article(models.Model):
    title=models.CharField(max_length=200)
    content=models.TextField()
    category = models.CharField(max_length=50, default='Uncategorized')
    created_at = models.DateTimeField(default=timezone.now)

    
    def __str__(self):
        return self.title
    


