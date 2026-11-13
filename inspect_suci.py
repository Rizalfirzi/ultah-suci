import os
from PIL import Image, ImageOps

suci_dir = r"F:\foto ayang\suci"
out_dir = r"e:\rizal\ultah\public\photos\temp_suci_inspect"
os.makedirs(out_dir, exist_ok=True)

# Let's inspect some photos from suci folder:
files = sorted(os.listdir(suci_dir))
print(f"Total files in suci: {len(files)}")

# Check every 6th photo
for i in [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]:
    if i < len(files):
        f = files[i]
        p = os.path.join(suci_dir, f)
        out_p = os.path.join(out_dir, f"t_{f}.webp")
        with Image.open(p) as im:
            im = ImageOps.exif_transpose(im)
            im.thumbnail((600, 600))
            im.save(out_p, "WEBP", quality=80)
            print(f"{i}: {f}, size={im.size}")
