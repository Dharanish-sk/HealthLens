from django.urls import path
from .views import UploadReportView
from .views import InsightView

urlpatterns = [
    path('insight/', InsightView.as_view()),
    path('upload/', UploadReportView.as_view(), name='upload-report'), 
]
 
