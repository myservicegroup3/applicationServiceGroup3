from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
import json


def calculate(request):
    user = request.GET['user']
    im = request.GET['im']
    title = request.GET['title']
    url = request.GET['url']
    a = 1.0
    b = 2.0
    data = {'title' : title, 'url' : url, 'im' : im, 'a' : a, 'b' : b}
    try:
        with open("../" + user + ".json","w") as f:
            datalist = json.load(f)
            if (json.dump(datalist).length == 0):
                datalist = {}
            datalist.update({im : data})
            datalist_str = json.dumps(datalist)
            json.dump(datalist_str,f)
        result = datalist_str
    except:
        result = 'Error'
    return HttpResponse(result)