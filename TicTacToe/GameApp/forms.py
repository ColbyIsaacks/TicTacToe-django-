from django import forms
from django.core import validators
from GameApp.models import User

class FormName(forms.Form):
    x_name = forms.CharField()
    o_name = forms.CharField()
    botcatcher = forms.CharField(required=False,
                                 widget=forms.HiddenInput,
                                 validators=[validators.MaxLengthValidator(0)])

    def clean_botcatcher(self):
        botcatcher = self.cleaned_data['botcatcher']
        if len(botcatcher) > 0:
            raise forms.ValidationError("Gotcha Bot!")
        return botcatcher

    def clean(self):
        all_clean_data = super().clean()
        # x_name = all_clean_data['x_name']
        # o_name = all_clean_data['o_name']

        if all_clean_data['x_name'] == all_clean_data['o_name']:
            raise forms.ValidationError('X and O player names cannot be the same...\nPlease try again.')
