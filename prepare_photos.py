import os
import re
import json
from PIL import Image, ImageOps

SOURCE_DIR = r"F:\foto ayang"
DEST_DIR = r"e:\rizal\ultah\public\photos"
DATA_DEST = r"e:\rizal\ultah\src\data\photosData.json"

os.makedirs(DEST_DIR, exist_ok=True)
os.makedirs(os.path.dirname(DATA_DEST), exist_ok=True)

def get_exif_date(img):
    try:
        exif = img._getexif()
        if exif:
            for k, v in exif.items():
                if k in (36867, 306): # DateTimeOriginal or DateTime
                    if isinstance(v, str) and len(v) >= 10:
                        return v[:10].replace(":", "-")
    except Exception:
        pass
    return None

def process_image(src_path, dest_rel_name, max_size=1200):
    dest_path = os.path.join(DEST_DIR, dest_rel_name)
    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    
    if os.path.exists(dest_path):
        return dest_rel_name
        
    try:
        with Image.open(src_path) as img:
            img = ImageOps.exif_transpose(img)
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            
            # Downscale preserving aspect ratio
            img.thumbnail((max_size, max_size), Image.Resampling.LANCZOS)
            img.save(dest_path, "WEBP", quality=82, method=4)
            return dest_rel_name
    except Exception as e:
        print(f"Error processing {src_path}: {e}")
        return None

def main():
    print("Menganalisis foto-foto dari F:\\foto ayang...")
    
    # 1. Suci solo portraits
    suci_dir = os.path.join(SOURCE_DIR, "suci")
    suci_files = sorted([f for f in os.listdir(suci_dir) if f.lower().endswith(('.jpg', '.jpeg'))]) if os.path.exists(suci_dir) else []
    
    # 2. Cayang (2026 moments together)
    cayang_dir = os.path.join(SOURCE_DIR, "Cayang")
    cayang_files = sorted([f for f in os.listdir(cayang_dir) if f.lower().endswith(('.jpg', '.jpeg'))]) if os.path.exists(cayang_dir) else []
    
    # 3. Drive 2024 (photoshoot / late 2024)
    d2024_dir = os.path.join(SOURCE_DIR, "drive-download-20241118T224132Z-001")
    d2024_files = sorted([f for f in os.listdir(d2024_dir) if f.lower().endswith(('.jpg', '.jpeg'))]) if os.path.exists(d2024_dir) else []
    
    # 4. Drive 2026 (July 2026 DSLR)
    d2026_dir = os.path.join(SOURCE_DIR, "drive-download-20260706T080921Z-3-001")
    d2026_files = sorted([f for f in os.listdir(d2026_dir) if f.lower().endswith(('.jpg', '.jpeg'))]) if os.path.exists(d2026_dir) else []
    
    # 5. Foto foto lama (2023 early days)
    lama_dir = os.path.join(SOURCE_DIR, "foto foto lama-20261113T004238Z-1-001", "foto foto lama")
    lama_files = sorted([f for f in os.listdir(lama_dir) if f.lower().endswith(('.jpg', '.jpeg', '.webp'))]) if os.path.exists(lama_dir) else []
    
    print(f"Ditemukan:")
    print(f"- Suci solo: {len(suci_files)} foto")
    print(f"- Cayang (2026): {len(cayang_files)} foto")
    print(f"- Momen 2024: {len(d2024_files)} foto")
    print(f"- Momen 2026 DSLR: {len(d2026_files)} foto")
    print(f"- Foto-foto lama (2023): {len(lama_files)} foto")
    
    all_photos = []
    
    # We will curate high-quality selections for each category
    # 1. Suci Portraits (15 best)
    # Step sampling to get diversity
    step_suci = max(1, len(suci_files) // 15)
    for i, f in enumerate(suci_files[::step_suci][:15]):
        src = os.path.join(suci_dir, f)
        dest_name = f"suci/suci_{i+1:02d}.webp"
        saved = process_image(src, dest_name)
        if saved:
            all_photos.append({
                "id": f"suci_{i+1}",
                "category": "suci",
                "era": "2026",
                "title": "Bidadariku Suci Nur Fitri",
                "caption": "Senyummu yang selalu meluluhkan hari-hariku dan jadi alasan terindah untuk terus bersyukur.",
                "url": f"/photos/{dest_name}",
                "tag": "Cantiknya Ayang"
            })
            
    # 2. Foto 2023 - Awal Kisah (15 best)
    step_lama = max(1, len(lama_files) // 15)
    for i, f in enumerate(lama_files[::step_lama][:15]):
        src = os.path.join(lama_dir, f)
        dest_name = f"2023/lama_{i+1:02d}.webp"
        saved = process_image(src, dest_name)
        if saved:
            all_photos.append({
                "id": f"lama_{i+1}",
                "category": "2023",
                "era": "2023",
                "title": "Awal Mula Kisah Indah",
                "caption": "Masa di mana setiap tatap dan percakapan kecil kita terasa begitu mendebarkan dan penuh bunga.",
                "url": f"/photos/{dest_name}",
                "tag": "Kenangan 2023"
            })
            
    # 3. Foto 2024 - Menenun Kenangan (15 best)
    step_2024 = max(1, len(d2024_files) // 15)
    for i, f in enumerate(d2024_files[::step_2024][:15]):
        src = os.path.join(d2024_dir, f)
        dest_name = f"2024/momen_{i+1:02d}.webp"
        saved = process_image(src, dest_name)
        if saved:
            all_photos.append({
                "id": f"2024_{i+1}",
                "category": "2024",
                "era": "2024",
                "title": "Tahun Penuh Warna",
                "caption": "Melewati suka dan duka bersama, belajar saling memahami dan mencintai lebih dalam setiap hari.",
                "url": f"/photos/{dest_name}",
                "tag": "Momen 2024"
            })
            
    # 4. Cayang 2026 - Tawa & Bahagia (15 best)
    step_cayang = max(1, len(cayang_files) // 15)
    for i, f in enumerate(cayang_files[::step_cayang][:15]):
        src = os.path.join(cayang_dir, f)
        dest_name = f"2026/cayang_{i+1:02d}.webp"
        saved = process_image(src, dest_name)
        if saved:
            all_photos.append({
                "id": f"cayang_{i+1}",
                "category": "2026",
                "era": "2026",
                "title": "Tawa & Bahagia Bersamamu",
                "caption": "Bersamamu adalah tempat paling nyaman. Terima kasih selalu membuat dunia terasa hangat.",
                "url": f"/photos/{dest_name}",
                "tag": "Kencan Manis"
            })

    # 5. DSLR 2026 - Momen Abadi (12 best)
    step_dslr = max(1, len(d2026_files) // 12)
    for i, f in enumerate(d2026_files[::step_dslr][:12]):
        src = os.path.join(d2026_dir, f)
        dest_name = f"special/dslr_{i+1:02d}.webp"
        saved = process_image(src, dest_name)
        if saved:
            all_photos.append({
                "id": f"dslr_{i+1}",
                "category": "special",
                "era": "2026",
                "title": "Momen Terindah yang Terpatri",
                "caption": "Setiap detik bersamamu adalah potongan puzzle terindah dalam hidupku yang tak akan pernah kulupakan.",
                "url": f"/photos/{dest_name}",
                "tag": "Photoshoot Spesial"
            })

    # Timeline Story milestones (Chronological highlights)
    timeline = [
        {
            "year": "2023",
            "title": "Babak 1: Takdir Mempertemukan Kita",
            "subtitle": "Awal Mula yang Paling Manis",
            "description": "Siapa sangka pertemuan kita akan menjadi awal dari perjalanan paling berharga dalam hidupku? Dari obrolan canggung, senyum malu-malu, hingga akhirnya kamu menjadi orang yang paling kurindukan setiap hari.",
            "photo": all_photos[15]["url"] if len(all_photos) > 15 else all_photos[0]["url"],
            "quote": "Dan saat pertama kali mataku menatapmu, hatiku berbisik: 'Ini dia orangnya.'"
        },
        {
            "year": "2023 - Pertengahan",
            "title": "Babak 2: Merajut Cerita Bersama",
            "subtitle": "Kencan-Kencan Pertama & Banyak Tawa",
            "description": "Menikmati senja bersama, makan es krim sambil bercanda, dan mendengarkan suaramu yang selalu bikin tenang. Setiap jalanan yang kita lewati berdua menjadi saksi hangatnya kisah kita.",
            "photo": all_photos[18]["url"] if len(all_photos) > 18 else all_photos[1]["url"],
            "quote": "Bukan tentang ke mana tujuannya, tapi tentang melangkah bersama siapa."
        },
        {
            "year": "2024",
            "title": "Babak 3: Menguatkan Janji & Menjaga Hati",
            "subtitle": "Tumbuh Dewasa Berdampingan",
            "description": "Kita melewati berbagai fase, saling mendukung di saat lelah, saling menenangkan di saat cemas. Kamu bukan cuma pacar, tapi rumah, sahabat terbaik, dan penyemangat terbesarku.",
            "photo": all_photos[30]["url"] if len(all_photos) > 30 else all_photos[2]["url"],
            "quote": "Terima kasih sudah selalu memilih untuk bertahan dan saling menggenggam tangan."
        },
        {
            "year": "2026",
            "title": "Babak 4: Cinta yang Kian Dewasa & Menatap Masa Depan",
            "subtitle": "Melangkah Bersama Menuju Impian",
            "description": "Tahun demi tahun berlalu, rasa sayang ini bukannya berkurang justru semakin membuncah. Melihat senyumanmu hari ini sama indahnya—bahkan jauh lebih menawan—daripada saat pertama kali kita berjumpa.",
            "photo": all_photos[45]["url"] if len(all_photos) > 45 else all_photos[3]["url"],
            "quote": "Bersamamu, masa depan bukan lagi hal yang menakutkan, tapi sesuatu yang selalu kunantikan."
        },
        {
            "year": "Hari Ini & Selamanya",
            "title": "Selamat Ulang Tahun, Suci Nur Fitri!",
            "subtitle": "Doa Tulus Untuk Bidadari Tercinta",
            "description": "Di hari bahagiamu ini, aku berdoa agar Allah SWT senantiasa melimpahkan berkah, kesehatan, kebahagiaan tanpa akhir, umur panjang yang penuh berkah, dan mengabulkan setiap impian tulusmu. Aku berjanji akan terus mendampingimu di setiap langkahmu.",
            "photo": all_photos[0]["url"],
            "quote": "Semoga kita terus bersama sampai rambut memutih dan surga mempertemukan kita kembali."
        }
    ]

    output_data = {
        "photos": all_photos,
        "timeline": timeline,
        "total": len(all_photos)
    }

    with open(DATA_DEST, "w", encoding="utf-8") as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)

    print(f"Berhasil memproses {len(all_photos)} foto dan menyimpan data ke {DATA_DEST}!")

if __name__ == "__main__":
    main()

