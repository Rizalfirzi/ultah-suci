import os
from PIL import Image, ImageOps

suci_dir = r"F:\foto ayang\suci"
out_dir = r"e:\rizal\ultah\public\photos\temp_suci_inspect"

files = sorted(os.listdir(suci_dir))
for f in files[25:]:
    p = os.path.join(suci_dir, f)
    out_p = os.path.join(out_dir, f"t_{f}.webp")
    if not os.path.exists(out_p):
        with Image.open(p) as im:
            im = ImageOps.exif_transpose(im)
            im.thumbnail((400, 400))
            im.save(out_p, "WEBP", quality=75)

print("Batch suci thumbnails generated")
