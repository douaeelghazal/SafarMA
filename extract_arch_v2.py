from PIL import Image
import os

def isolate_icon_on_top():
    source_path = 'public/SafarMA.png'
    output_path = 'public/favicon.png'
    
    if not os.path.exists(source_path):
        return

    # Looking at the original image and `v_seg_0.png` being 718x287.
    # The whole image height is 330.
    # So `v_seg_0` is almost the whole thing.
    
    # This suggests the "Text Below Icon" assumption might be wrong, OR they are overlapping/close.
    # The previous `analyze_components` (horizontal scan) found 5 segments.
    #  Segment 0: x=[24-118], width=94
    #  Segment 1: x=[128-210], width=82
    #  Segment 2: x=[219-452], width=233  <-- Central!
    #  Segment 3: x=[466-612], width=146
    #  Segment 4: x=[615-742], width=127
    
    # Text "SafarMA":
    # S a f a r M A
    # S - a - f - a - r - M - A ?  (7 letters)
    # But we found 5 segments horizontally.
    # Maybe some letters touch? "Safar" = Segment 0, 1? No.
    # Wait, Segment 2 is HUGE (233 wide) and TALL (282 high).
    # The other segments are shorter (height ~130-160).
    # This strongly suggests Segment 2 IS the Icon.
    # And Segments 0,1 are text on the LEFT.
    # Segments 3,4 are text on the RIGHT.
    # So the layout is likely:   Text - ICON - Text.
    # Like: "Safar [ICON] MA" ?
    
    # BUT the user showed an image with Icon ON TOP of Text.
    # If the user's uploaded image (the attachment) is DIFFERENT from `SafarMA.png`, then I am editing the wrong file.
    # The user said "i want th9s in the top tab" and attached an image.
    # The attachment shows "SafarMA" text with Arch Above.
    # If `SafarMA.png` has "Safar [ICON] MA", then running `extract_arch.py` successfully extracted the central icon.
    
    # The user *just* said "i want th9s".
    # And the result of `extract_arch.py` was "Isolated Arch Logo Size: 233x282".
    # This is a tall rectangle.
    # If the icon is indeed the Arch, then I have it correct.
    
    # However, the user says "make it bigger in the tab logo".
    # The tall rectangle (233x282) fitting in a square tab means there is whitespace on the sides.
    # Max height = 282 -> fits in 282x282 square. Width 233 is centered.
    # The icon will look small horizontally.
    
    # If the user wants JUST the "Star inside Arch" part, maybe we can zoom more?
    # Or maybe the icon has whitespace included?
    
    # Let's perform a "Smart Zoom" on the center of the extracted icon to remove potential padding?
    # Or simply: Try to find if there is an inner bounding box?
    
    # Let's re-extract Segment 2 and verify its contents.
    img = Image.open(source_path).convert("RGBA")
    
    # Segment 2 again
    # x=[219-452], width=233
    start_x = 219
    end_x = 452
    
    strip = img.crop((start_x, 0, end_x, img.height))
    bbox = strip.getbbox()
    
    if bbox:
        # This is the icon
        icon = strip.crop(bbox)
        w, h = icon.size
        print(f"Icon Size: {w}x{h}")
        
        # Now let's see if we can crop even tighter?
        # Maybe the user wants ONLY the "Star" or "Arch"?
        # The prompt "i want th9s" refers to the *whole* logo attached?
        # If the user attached "SafarMA with Arch above", and I'm using `SafarMA.png`.
        # Maybe I should just download the attachment if I could, but I can't.
        # But I can act on `SafarMA.png`.
        
        # Let me try to make the ICON (Segment 2) as big as possible.
        # It's 233x282 (Aspect 0.82)
        # To fill a square, we scale it so width=size (cut top/bottom) OR height=size (cut sides).
        # Cutting sides of an arch is bad.
        # Cutting top/bottom of an arch is bad.
        # So we must fit by Height.
        # That leaves empty space on sides.
        
        # However, if the Arch has a "base" or "pole" that is less important, maybe we can crop the bottom?
        # Or if the top is empty space?
        # `bbox` guarantees no empty space.
        
        # Let's try to detect if we can simply Scale Up the icon by ~20% and let it overflow the square slightly safely?
        # No, favicons need to be contained.
        
        # Let's ensure the `favicon.png` has NO padding at all.
        # My previous script `extract_arch.py` did that: `dim = max(w, h)`.
        
        # The user might be seeing the cached old favicon.
        # I should output a DIFFERENT filename to force refresh?
        # `favicon_v2.png`.
        
        # Also, check if the icon itself has transparency AROUND the shape that `getbbox` doesn't see (e.g. valid pixels but transparent-ish?).
        # `getbbox` uses 0 alpha.
        
        # Let's try to crop 5% from all sides just in case there's "soft" padding or antialiasing?
        # Crop 10px from edges?
        
        crop_pix = 10
        if w > 2*crop_pix and h > 2*crop_pix:
            icon = icon.crop((crop_pix, crop_pix, w-crop_pix, h-crop_pix))
            
        w, h = icon.size
        dim = max(w, h)
        square = Image.new("RGBA", (dim, dim), (0, 0, 0, 0))
        square.paste(icon, ((dim-w)//2, (dim-h)//2))
        
        output_file = 'public/favicon_new.png'
        square.save(output_file)
        print(f"Saved tighter icon to {output_file}")
        
    else:
        print("Error extracting icon")

if __name__ == "__main__":
    isolate_icon_on_top()
