import os
from PIL import Image
import pillow_avif

def create_thumbnail(old_img_name):
    new_img_name = old_img_name[0:old_img_name.find('.')] + "-thumbnail.avif"
    img = Image.open(folder_path + "/" + old_img_name)
    rgb_im = img.convert('RGB')
    rgb_im.thumbnail((128, 128), Image.Resampling.LANCZOS)
    rgb_im.save(folder_path + "/" + new_img_name, format="AVIF")

def create_reduced_minimised(old_img_name):
    new_img_name = old_img_name[0:old_img_name.find('.')] + "-rMIN.avif"
    img = Image.open(folder_path + "/" + old_img_name)
    rgb_im = img.convert('RGB')
    rgb_im.thumbnail((600, 600), Image.Resampling.LANCZOS)
    rgb_im.save(folder_path + "/" + new_img_name, format="AVIF")

def create_lower_quality_minimised(old_img_name):
    new_img_name = old_img_name[0:old_img_name.find('.')] + "-lqMIN.avif"
    img = Image.open(folder_path + "/" + old_img_name)
    rgb_im = img.convert('RGB')
    img_small = rgb_im.resize((16, 16), resample=Image.BILINEAR)
    img_rescaled = img_small.resize(rgb_im.size, Image.NEAREST)
    img_rescaled.thumbnail((600, 600), Image.Resampling.LANCZOS)
    img_rescaled.save(folder_path + "/" + new_img_name, format="AVIF")

def create_reduced_maximised(old_img_name):
    new_img_name = old_img_name[0:old_img_name.find('.')] + "-rMAX.avif"
    img = Image.open(folder_path + "/" + old_img_name)
    rgb_im = img.convert('RGB')
    rgb_im.save(folder_path + "/" + new_img_name, format="AVIF")

def create_lower_quality_maximised(old_img_name):
    new_img_name = old_img_name[0:old_img_name.find('.')] + "-lqMAX.avif"
    img = Image.open(folder_path + "/" + old_img_name)
    rgb_im = img.convert('RGB')
    img_small = rgb_im.resize((16, 16), resample=Image.BILINEAR)
    img_rescaled = img_small.resize(rgb_im.size, Image.NEAREST)
    img_rescaled.save(folder_path + "/" + new_img_name, format="AVIF")

def create_image_versions(old_img_name):
    create_thumbnail(old_img_name)
    create_reduced_minimised(old_img_name)
    create_lower_quality_minimised(old_img_name)
    create_reduced_maximised(old_img_name)
    create_lower_quality_maximised(old_img_name)

folders = ["dreams-for-littles"]
specific_file = None  # Add the name of the image here

if specific_file is not None: 
    folder_path = ""  # Add the path to the specific_file here 
    create_image_versions(specific_file)
else:
    for folder in folders:  # Run it on multiple folders and images at once
        folder_path = "/Users/ntheodoropoulos/Projects/NikTheGeek1.github.io/src/assets/images/projects/" + folder
        files_in_dir = os.listdir(folder_path)
        for file_in_dir in files_in_dir:
            if file_in_dir.lower().endswith(('.png', '.jpg', '.jpeg')):
                create_image_versions(file_in_dir)