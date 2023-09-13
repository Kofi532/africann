from django.shortcuts import render

# Create your views here.


def afriq(request):
    return render(request, 'jot.html', {})