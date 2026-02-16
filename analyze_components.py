from PIL import Image
import os

def analyze_components():
    source_path = 'public/SafarMA.png'
    if not os.path.exists(source_path):
        print("File not found.")
        return

    img = Image.open(source_path).convert("RGBA")
    width, height = img.size
    print(f"Image Size: {width}x{height}")
    
    # 1. Project onto X-axis to find vertical gaps
    # We sum up alpha values for each column.
    
    pixels = img.load()
    column_has_content = [False] * width
    
    for x in range(width):
        for y in range(height):
            if pixels[x, y][3] > 10: # Threshold for non-transparency
                column_has_content[x] = True
                break
                
    # Find segments
    segments = []
    in_segment = False
    start_x = 0
    
    for x in range(width):
        if column_has_content[x]:
            if not in_segment:
                in_segment = True
                start_x = x
        else:
            if in_segment:
                in_segment = False
                segments.append((start_x, x))
    
    if in_segment:
        segments.append((start_x, width))
        
    print(f"Found {len(segments)} horizontal segments:")
    for i, (start, end) in enumerate(segments):
        w = end - start
        # Crop to see height of this segment too
        segment_img = img.crop((start, 0, end, height))
        bbox = segment_img.getbbox()
        if bbox:
            h = bbox[3] - bbox[1]
            print(f"  Segment {i}: x=[{start}-{end}], width={w}, height={h}, bbox={bbox}")
            # Save candidates
            segment_img.crop(bbox).save(f'public/seg_{i}.png')
        else:
            print(f"  Segment {i}: Empty (ghost?)")

    # If the user says "the arch with the star", that sounds like a distinct graphic.
    # It might be one of these segments.
    # Usually icons are taller/squarer than text.
    
if __name__ == "__main__":
    analyze_components()
