from django.shortcuts import render

# Create your views here.


def afriq(request):
    return render(request, 'home.html', {})

def afriq1(request):
    return render(request, 'about.html', {})

def afriq2(request):
    return render(request, 'gallery.html', {}) 

def afriq3(request):
    return render(request, 'faq.html', {}) 

def afriq4(request):
    return render(request, 'contact.html', {}) 

def afriq5(request):
    return render(request, 'profile.html', {}) 