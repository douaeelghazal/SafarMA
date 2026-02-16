from PIL import Image
import os

def extract_logo_arch():
    source_path = 'public/SafarMA.png'
    output_path = 'public/favicon.png'
    
    if not os.path.exists(source_path):
        return

    img = Image.open(source_path).convert("RGBA")
    
    # Based on previous analysis:
    # Segment 2: x=[219-452], width=233, height=282, bbox=(0, 16, 233, 298)
    # The segment coordinates are relative to the whole image width.
    # So we crop the whole image from x=219 to x=452.
    
    start_x = 219
    end_x = 452
    
    # Crop horizontal strip
    strip = img.crop((start_x, 0, end_x, img.height))
    
    # Get tight bbox of this strip
    bbox = strip.getbbox()
    
    if bbox:
        # Isolate the logo
        logo = strip.crop(bbox)
        w, h = logo.size
        print(f"Isolated Arch Logo Size: {w}x{h}")
        
        # Now make it square and BIG check
        dim = max(w, h)
        square = Image.new("RGBA", (dim, dim), (0, 0, 0, 0))
        
        # Center verify
        square.paste(logo, ((dim-w)//2, (dim-h)//2))
        
        square.save(output_path)
        print("Success: Extracted the central Arch logo.")
    else:
        print("Failed to extract verification.")

if __name__ == "__main__":
    extract_logo_arch()
