import numpy as np
import pywavefront

def load_obj(file_name):
    """Load the OBJ file."""
    return pywavefront.Wavefront(file_name, collect_faces=True)

def get_bounds(obj):
    """Get the bounds of the object."""
    min_bound = np.array(obj.vertices[0])
    max_bound = np.array(obj.vertices[0])
    for vertex in obj.vertices:
        min_bound = np.minimum(min_bound, vertex)
        max_bound = np.maximum(max_bound, vertex)
    return min_bound, max_bound

def normalize_obj(file_name, output_file_name):
    """Normalize the object to have its largest dimension be 1 unit."""
    obj = load_obj(file_name)
    min_bound, max_bound = get_bounds(obj)
    dimensions = max_bound - min_bound
    scale_factor = 1 / max(dimensions)
    scaled_vertices = [(np.array(vertex) - min_bound) * scale_factor for vertex in obj.vertices]

    # Write the normalized object to a new .obj file
    with open(output_file_name, 'w') as file:
        for vertex in scaled_vertices:
            file.write(f"v {' '.join(map(str, vertex))}\n")
        for mesh in obj.mesh_list:
            for face in mesh.faces:
                file.write("f " + " ".join([str(i+1) for i in face]) + "\n")

# Example usage
normalize_obj('bridge.obj', 'output.obj')
