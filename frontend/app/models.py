from django.db import models
from django.contrib.auth.models import User

class LabResult(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    parameter = models.CharField(max_length=100)
    value = models.CharField(max_length=20)
    unit = models.CharField(max_length=20, blank=True)
    reference_range = models.CharField(max_length=50, blank=True)
    attention = models.CharField(max_length=50, blank=True)
    status = models.CharField(max_length=20, blank=True)  
    note = models.CharField(max_length=100, blank=True)  
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.parameter} - {self.value} ({self.user.username})"
