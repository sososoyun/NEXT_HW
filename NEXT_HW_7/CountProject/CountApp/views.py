from django.shortcuts import render

# Create your views here.
def count(request):
    return render(request, 'count.html')


def result(request):
    
    text = request.POST['text']
    total_len = len(text)
    except_len = len(text.replace(' ', ''))
    word_len = len(text.split())
    
    return render(request, 'result.html', {
        'text':text,
        'total_len': total_len, 
        'except_len': except_len,
        'word_len': word_len,
        })