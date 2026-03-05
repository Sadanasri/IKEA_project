import os
import urllib.request

os.makedirs('src/assets/images', exist_ok=True)

images = {
    'per1.jpg': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop',
    'per2.jpg': 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop',
    'per3.jpg': 'https://images.unsplash.com/photo-1598368195835-91e67f80c9d7?q=80&w=600&auto=format&fit=crop',
    'per4.jpg': 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=600&auto=format&fit=crop',
    'per5.jpg': 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=600&auto=format&fit=crop',
    'per6.jpg': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop',
    'per7.jpg': 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600&auto=format&fit=crop',
    'per8.jpg': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop',
    'bus1.jpg': 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
    'bus2.jpg': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
    'bus3.jpg': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop',
    'bus4.jpg': 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop'
}

req_headers = {
    'User-Agent': 'Mozilla/5.0'
}

for filename, url in images.items():
    filepath = os.path.join('src/assets/images', filename)
    req = urllib.request.Request(url, headers=req_headers)
    with urllib.request.urlopen(req) as response, open(filepath, 'wb') as out_file:
        data = response.read() # a `bytes` object
        out_file.write(data)
    print(f"Downloaded {filename}")
