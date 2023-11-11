import trimesh

# Load your STL file
mesh = trimesh.load('stls/YogaCat.stl')

# Export to OBJ
mesh.export('YogaCat.obj')
