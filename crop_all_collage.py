import os
from PIL import Image, ImageOps

src = r"F:\foto ayang\foto foto lama-20261113T004238Z-1-001\foto foto lama\Collage.15.Size4R.Qty1.jpg"
out_dir = r"e:\rizal\ultah\public\photos\temp_collage"
os.makedirs(out_dir, exist_ok=True)

with Image.open(src) as im:
    im = ImageOps.exif_transpose(im)
    w, h = im.size
    col_w = w // 3
    row_h = h // 2
    
    # 6 panels
    idx = 1
    for r in range(2):
        for c in range(3):
            box = (c * col_w + 15, r * row_h + 15, (c + 1) * col_w - 15, (r + 1) * row_h - 15)
            panel = im.crop(box)
            # The collage photos were rotated 270 deg (or 90 deg counter clockwise)
            panel = panel.rotate(270, expand=True)
            panel.thumbnail((700, 700))
            panel.save(os.path.join(out_dir, f"panel_{idx}.webp"), "WEBP", quality=85)
            idx += 1

print("All 6 collage panels cropped!")
