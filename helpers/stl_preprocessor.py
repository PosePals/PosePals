import trimesh
import os

def center_mesh(mesh):
    # Compute the centroid
    centroid = mesh.centroid

    # Translate the mesh to center it
    mesh.apply_translation(-centroid)

def convert_and_center_stl_to_obj(stl_filename):
    # Check if the file extension is .stl
    if not stl_filename.lower().endswith('.stl'):
        raise ValueError("The provided file does not have an .stl extension")

    # Replace the .stl extension with .obj
    obj_filename = os.path.splitext(stl_filename)[0] + '.obj'

    # Load the STL file
    mesh = trimesh.load(stl_filename)

    # Center the mesh
    center_mesh(mesh)

    # Export to OBJ
    mesh.export(obj_filename)
    print(f"Converted and centered {stl_filename} to {obj_filename}")

# Replace 'path_to_your_file.stl' with the path to your STL file
convert_and_center_stl_to_obj('stls/pigeon.stl')
