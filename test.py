import urllib.request
import urllib.parse
import json

try:
    # Register
    req = urllib.request.Request(
        'http://127.0.0.1:5000/api/auth/register',
        data=json.dumps({"firstName": "Test", "lastName": "User", "email": "test422@example.com", "password": "password"}).encode('utf-8'),
        headers={'Content-Type': 'application/json'}
    )
    urllib.request.urlopen(req)
except Exception as e:
    pass

try:
    # Login
    req = urllib.request.Request(
        'http://127.0.0.1:5000/api/auth/login',
        data=json.dumps({"email": "test422@example.com", "password": "password"}).encode('utf-8'),
        headers={'Content-Type': 'application/json'}
    )
    response = urllib.request.urlopen(req)
    res_data = json.loads(response.read().decode('utf-8'))
    print("Login Response:", res_data)
    
    token = res_data.get('token')
    
    # Profile
    req = urllib.request.Request(
        'http://127.0.0.1:5000/api/auth/profile',
        headers={'Authorization': f'Bearer {token}'}
    )
    response = urllib.request.urlopen(req)
    print("Profile Response:", response.read())
    
except Exception as e:
    print("Error:", e)
    if hasattr(e, 'read'):
        print(e.read())
