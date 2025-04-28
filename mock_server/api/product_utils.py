import os
from ..file_ops import read_data

file_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'db.json')

def get_all_products():
    data = read_data(file_path)
    return data['products']