import os

def remove_underscores(folder_path):
    # Iterate over all files in the folder
    for filename in os.listdir(folder_path):
        # Construct the full path to the file
        filepath = os.path.join(folder_path, filename)
        
        # Check if the filepath is a file (not a directory)
        if os.path.isfile(filepath):
            # Get the filename without extension and its extension
            name, ext = os.path.splitext(filename)
            
            # Rename the file by removing underscores from the name
            new_name = name.replace('_', '') + ext
            
            # Construct the new filepath
            new_filepath = os.path.join(folder_path, new_name)
            
            # Rename the file
            os.rename(filepath, new_filepath)
            print(f'Renamed: {filename} -> {new_name}')

# Specify the folder path
folder_path = './imgs/cards/'

# Call the function to remove underscores from filenames in the folder
remove_underscores(folder_path)