import numpy as np

def read_obj(filename):
    vertices = []
    with open(filename, 'r') as file:
        for line in file:
            if line.startswith('v '):
                parts = line.split()
                vertices.append([float(parts[1]), float(parts[2]), float(parts[3])])
    return np.array(vertices)

def write_obj(filename, vertices):
    with open(filename, 'w') as file:
        for v in vertices:
            file.write('v {} {} {}\n'.format(v[0], v[1], v[2]))

def center_object(filename):
    vertices = read_obj(filename)
    centroid = np.mean(vertices, axis=0)
    centered_vertices = vertices - centroid
    write_obj('centered_' + filename, centered_vertices)

# Usage
center_object('bridge.obj')
