from django.shortcuts import render
from . import forms

# Create your views here.

def game_view(request):
    return render(request, 'GameApp/game_page.html')

def form_view(request):
    form = forms.FormName()

    if request.method == 'POST':
        form = forms.FormName(request.POST)

        if form.is_valid():
            print("VALIDATION SUCCESS")
            print("X name: " + form.cleaned_data['x_name'])
            print("O name: " + form.cleaned_data['o_name'])
            # form.save(commit=True)
            return game_view(request)

    return render(request, 'GameApp/form_page.html', {'form':form})
