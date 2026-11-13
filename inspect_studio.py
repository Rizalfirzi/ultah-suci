import os
from PIL import Image, ImageOps

d2024 = r"F:\foto ayang\drive-download-20241118T224132Z-001"
out_dir = r"e:\rizal\ultah\public\photos\temp_2024_inspect"
os.makedirs(out_dir, exist_ok=True)

for num in [6517, 6518, 6519, 6520, 6521, 6522, 6523, 6524, 6525, 6530, 6535, 6540]:
    f = f"IMG_{num}.JPG"
    p = os.path.join(d2024, f)
    if os.path.exists(p):
        out_p = os.path.join(out_dir, f"{f}.webp")
        with Image.open(p) as im:
            im = ImageOps.exif_transpose(im)
            im.thumbnail((600, 600))
            im.save(out_p, "WEBP", quality=80)
            print(f"Created {f}.webp")
