from PIL import Image

# We crop panel_4 tightly so there are NO white margins at all, and perfect 4:5 aspect ratio
panel_p = r"e:\rizal\ultah\public\photos\temp_collage\panel_4.webp"
dst = r"e:\rizal\ultah\public\photos\hero_romantic.webp"

with Image.open(panel_p) as im:
    w, h = im.size
    # Trim the top/left/bottom white margins from the collage border
    left = int(w * 0.08)
    top = int(h * 0.08)
    right = int(w * 0.98)
    bottom = int(h * 0.98)
    cropped = im.crop((left, top, right, bottom))
    
    # Target 4:5 aspect ratio (e.g. 800 x 1000)
    cw, ch = cropped.size
    target_ar = 4 / 5
    current_ar = cw / ch
    if current_ar > target_ar:
        new_w = int(ch * target_ar)
        off_x = (cw - new_w) // 2
        cropped = cropped.crop((off_x, 0, off_x + new_w, ch))
    else:
        new_h = int(cw / target_ar)
        cropped = cropped.crop((0, 0, cw, new_h))
        
    cropped.thumbnail((800, 1000), Image.Resampling.LANCZOS)
    cropped.save(dst, "WEBP", quality=92)
    print(f"Created {dst}, size={cropped.size}")
