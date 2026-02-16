from PIL import Image
import os

def process_full_logo_favicon():
    source_path = 'public/SafarMA.png'
    output_path = 'public/favicon_full.png'
    
    if not os.path.exists(source_path):
        print(f"File {source_path} not found.")
        return

    img = Image.open(source_path).convert("RGBA")
    w, h = img.size
    print(f"Original Size: {w}x{h}")
    
    # The user wants the FULL logo.
    # To make it a favicon (which is usually square), we must pad it with transparency.
    # We find the max dimension to determine the square size.
    
    dim = max(w, h)
    
    # Create a new blank square image
    square_img = Image.new("RGBA", (dim, dim), (0, 0, 0, 0))
    
    # Paste the original image in the center
    x_offset = (dim - w) // 2
    y_offset = (dim - h) // 2
    
    square_img.paste(img, (x_offset, y_offset))
    
    # Save it
    square_img.save(output_path)
    print(f"Saved full logo favicon to {output_path}")

if __name__ == "__main__":
    process_full_logo_favicon()
