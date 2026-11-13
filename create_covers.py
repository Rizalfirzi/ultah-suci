import os
from PIL import Image, ImageOps

covers_dir = r"e:\rizal\ultah\public\photos\covers"
os.makedirs(covers_dir, exist_ok=True)

# 1. Cover 2024: From IMG_6480.JPG (Studio photoshoot of Suci & Rizal smiling together)
# We will do a smart crop focusing on upper 70% (heads, faces, and torso)
src_2024 = r"F:\foto ayang\drive-download-20241118T224132Z-001\IMG_6480.JPG"
dst_2024 = os.path.join(covers_dir, "cover_2024.webp")

with Image.open(src_2024) as im:
    im = ImageOps.exif_transpose(im)
    w, h = im.size
    # Focus on the upper half where faces are:
    # Top 15% to 75% height
    top = int(h * 0.18)
    bottom = int(h * 0.78)
    crop_box = (0, top, w, bottom)
    cropped = im.crop(crop_box)
    cropped.thumbnail((1200, 900), Image.Resampling.LANCZOS)
    cropped.save(dst_2024, "WEBP", quality=85)
    print(f"Created {dst_2024}, size={cropped.size}")

# 2. Cover 2026: From IMG-20260207-WA0025.jpg (Both making cute faces together)
src_2026 = r"F:\foto ayang\Cayang\IMG-20260207-WA0025.jpg"
dst_2026 = os.path.join(covers_dir, "cover_2026.webp")

with Image.open(src_2026) as im:
    im = ImageOps.exif_transpose(im)
    im.thumbnail((1200, 900), Image.Resampling.LANCZOS)
    im.save(dst_2026, "WEBP", quality=85)
    print(f"Created {dst_2026}, size={im.size}")

# Also create alternative options just in case:
# 2024 romantic lean (IMG_6520)
src_2024_alt = r"F:\foto ayang\drive-download-20241118T224132Z-001\IMG_6520.JPG"
dst_2024_alt = os.path.join(covers_dir, "cover_2024_romantic.webp")
with Image.open(src_2024_alt) as im:
    im = ImageOps.exif_transpose(im)
    w, h = im.size
    top = int(h * 0.15)
    bottom = int(h * 0.75)
    cropped = im.crop((0, top, w, bottom))
    cropped.thumbnail((1200, 900), Image.Resampling.LANCZOS)
    cropped.save(dst_2024_alt, "WEBP", quality=85)
    print(f"Created {dst_2024_alt}")

# 2026 outdoor smiling (IMG-20260207-WA0021)
src_2026_alt = r"F:\foto ayang\Cayang\IMG-20260207-WA0021.jpg"
dst_2026_alt = os.path.join(covers_dir, "cover_2026_smile.webp")
with Image.open(src_2026_alt) as im:
    im = ImageOps.exif_transpose(im)
    im.thumbnail((1200, 900), Image.Resampling.LANCZOS)
    im.save(dst_2026_alt, "WEBP", quality=85)
    print(f"Created {dst_2026_alt}")

