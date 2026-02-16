from PIL import Image
import os

def process_attached_logo():
    # The user implies the logo is available or they just want the behavior.
    # Since I cannot read the user's attachment directly unless they uploaded it to the workspace or I use the visual context.
    # The visual context shows the logo.
    # BUT, I already analyzed `public/SafarMA.png` and I suspect IT IS the image shown.
    # The previous extraction `extract_arch.py` successfully extracted an "Arch" logo of size 233x282.
    # Let's verify if `public/SafarMA.png` matches the "Icon Above Text" layout.
    
    source_path = 'public/SafarMA.png'
    if not os.path.exists(source_path):
        return

    img = Image.open(source_path).convert("RGBA")
    
    # If the layout is [Icon] ABOVE [Text].
    # Then there should be a vertical gap between them.
    # Let's project onto Y-axis.
    
    width, height = img.size
    row_has_pixels = [False] * height
    pixels = img.load()
    
    for y in range(height):
        for x in range(width):
            if pixels[x, y][3] > 10:
                row_has_pixels[y] = True
                break
    
    # Find vertical segments (rows of content)
    segments = []
    in_segment = False
    start_y = 0
    
    for y in range(height):
        if row_has_pixels[y]:
            if not in_segment:
                in_segment = True
                start_y = y
        else:
            if in_segment:
                in_segment = False
                segments.append((start_y, y))
    
    if in_segment:
        segments.append((start_y, height))
        
    print(f"Found {len(segments)} vertical segments (Y-axis):")
    for i, (start, end) in enumerate(segments):
        h = end - start
        print(f"  Segment {i}: y=[{start}-{end}], height={h}")
        # Save candidates
        # Crop the full width for this height range
        segment_img = img.crop((0, start, width, end))
        
        # Now trim horizontal whitespace for this segment
        bbox = segment_img.getbbox()
        if bbox:
            final = segment_img.crop(bbox)
            final.save(f'public/v_seg_{i}.png')
            print(f"    Saved public/v_seg_{i}.png size={final.size}")

if __name__ == "__main__":
    process_attached_logo()
