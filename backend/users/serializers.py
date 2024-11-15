from rest_framework import serializers
from .models import CustomUser
from django.contrib.auth.password_validation import validate_password
from rest_framework.validators import UniqueValidator
import re

class RegisterSerializer(serializers.ModelSerializer):
    # Additional fields for validation
    username = serializers.CharField(
        required=True,
        validators=[
            UniqueValidator(queryset=CustomUser.objects.all(), message="This email or mobile is already registered.")
        ]
    )
    password = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password],
        style={'input_type': 'password'}
    )
    password2 = serializers.CharField(
        write_only=True,
        required=True,
        style={'input_type': 'password'}
    )

    class Meta:
        model = CustomUser
        fields = ['username', 'password', 'password2']

    def validate_email_or_mobile(self, value):
        """
        Check if the input is a valid email or mobile number.
        """
        email_regex = r'^\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        mobile_regex = r'^\+?\d{10,15}$'

        if re.match(email_regex, value):
            self.is_email = True  # Store the determination
        elif re.match(mobile_regex, value):
            self.is_email = False
        else:
            raise serializers.ValidationError("Enter a valid email or mobile number.")

        return value

    def validate(self, attrs):
        """
        Ensure that both passwords match.
        """
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Passwords do not match."})
        return attrs

    def create(self, validated_data):
        """
        Create a new user instance with the provided data.
        """
        username = validated_data['username']
        password = validated_data['password']

        # Check if the input is an email or mobile number
        if hasattr(self, 'is_email') and self.is_email:
            # Use email as username
            user = CustomUser.objects.create_user(
                username=username,
                email=username,
                password=password
            )
        else:
            # Use mobile number as username
            user = CustomUser.objects.create_user(
                username=username,
                password=password
            )
        
        return user
