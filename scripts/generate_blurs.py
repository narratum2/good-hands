"""Generate pastel placeholder images and blurDataURL entries for the lookbook.

This script uses Pillow to create simple pastel coloured images and generates
a small blurred version encoded as a base64 data URI. It writes a
`lookbook.json` file into `public/lookbook` that can be imported by the
application at runtime.

Run this script from the project root like so:

    python scripts/generate_blurs.py

The output images will be saved in `public/lookbook/source` and the
JSON manifest will be saved in `public/lookbook/lookbook.json`.
"""
import os
import json
import base64
from io import BytesIO
from PIL import Image

def main():
    project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    src_dir = os.path.join(project_dir, 'public', 'lookbook', 'source')
    os.makedirs(src_dir, exist_ok=True)
    colors = [
        '#f5ece9', '#e8f4f8', '#fbf5ed', '#eaf5ef',
        '#f6eefa', '#fff8e5', '#fef4f1', '#eff6f3'
    ]
    entries = []
    for idx, colour in enumerate(colors, start=1):
        img = Image.new('RGB', (1200, 800), colour)
        filename = f'look{idx}.jpg'
        img_path = os.path.join(src_dir, filename)
        img.save(img_path)
        # create small blur version
        small = img.resize((16, 10))
        buf = BytesIO()
        small.save(buf, format='JPEG')
        blur = base64.b64encode(buf.getvalue()).decode('utf-8')
        entries.append({
            'src': f'/lookbook/source/{filename}',
            'alt': f'Pastel colour pattern {idx}',
            'blurDataURL': f'data:image/jpeg;base64,{blur}'
        })
    manifest_path = os.path.join(project_dir, 'public', 'lookbook', 'lookbook.json')
    with open(manifest_path, 'w') as f:
        json.dump(entries, f, indent=2)
    print(f'Generated {len(entries)} images and wrote manifest to {manifest_path}')

if __name__ == '__main__':
    main()