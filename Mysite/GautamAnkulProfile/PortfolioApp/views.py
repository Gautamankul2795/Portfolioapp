from django.shortcuts import render

from .models import ContactMe


# Create your views here.

def contactme(request):
    if request.method == 'POST':
        name = request.POST.get('name', '')
        email = request.POST.get('email')
        message = request.POST.get('message')
        contact = ContactMe(name=name, email=email, message=message)
        contact.save()
    return render(request, 'PortfolioApp/index.html')
