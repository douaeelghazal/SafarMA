from PIL import Image

# Open the source image
img = Image.open('public/SafarMA.png')
print(f"Original image size: {img.size}")

# According to navbar css: h-[180%] object-cover object-top
# This means the top part is what is visible, and it's cropped to fit a roughly square container.
# If the container is 100% height, and image is 180% height, then we are seeing the top 100/180 = 55%.
# So let's crop the top 60% just to be safe, or detect bounding box.

# Let's crop the top 55% as a heuristic from the CSS provided.
width, height = img.size
crop_height = int(height * 0.55) 

# Crop the top portion
cropped = img.crop((0, 0, width, crop_height))

# Now find the bounding box of non-transparent pixels to crop tightly around the logo
bbox = cropped.getbbox()
if bbox:
    cropped = cropped.crop(bbox)

# Resize to standard favicon sizes (e.g. 64x64 or 32x32) or keep high res?
# Favicon should generally prove square.
# Let's make it square by padding with transparency if needed, or just resize to fit within a square.

# To simplify: Make it square by taking the max dimension
w, h = cropped.size
max_dim = max(w, h)
new_img = Image.new("RGBA", (max_dim, max_dim), (0, 0, 0, 0))
# Center the cropped logo
new_img.paste(cropped, ((max_dim - w) // 2, (max_dim - h) // 2))

# Resize to something reasonable for favicon, e.g., 64x64, but keeping it larger is fine for modern screens
# The user said "bigger", implying better resolution/filling the space.
# We'll save it as 'public/favicon.png'
new_img.save('public/favicon.png')
print("Saved public/favicon.png")
