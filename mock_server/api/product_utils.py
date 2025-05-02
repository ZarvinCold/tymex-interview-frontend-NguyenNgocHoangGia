import os
from file_ops import read_data

file_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'db.json')

def get_all_products():
    data = read_data(file_path)
    return data['products']

def filter_products(products, searchOptions, allow_sort=True, allow_pagination=True, _page=1, _limit=12):
    search = getattr(searchOptions, 'search', None)
    price = getattr(searchOptions, 'price', None)
    tier = getattr(searchOptions, 'tier', None)
    theme = getattr(searchOptions, 'theme', None)
    time = getattr(searchOptions, 'time', None)
    priceSort = getattr(searchOptions, 'priceSort', None)
    # Full-text search
    if search:
        q_lower = search.lower()
        def match_any_field(product):
            def flatten(obj):
                if isinstance(obj, dict):
                    return ' '.join([flatten(v) for v in obj.values()])
                return str(obj)
            return q_lower in flatten(product).lower()
        products = [p for p in products if match_any_field(p)]
    # Price filter
    if price and isinstance(price, list) and len(price) == 2:
        products = [p for p in products if price[0] <= p.get("price", 0) <= price[1]]
    # Tier filter
    if tier:
        products = [p for p in products if p.get("tier", "") in tier]
    # Theme filter
    if theme:
        products = [p for p in products if theme.lower() in p.get("theme", "").lower()]
    # Time filter
    if time:
        products = [p for p in products if time.lower() in p.get("time", "").lower()]
    # Sorting
    if allow_sort and priceSort:
        reverse = priceSort == 'desc'
        products = sorted(products, key=lambda x: x.get("price", None), reverse=reverse)
    # Pagination
    if allow_pagination:
        start = (_page - 1) * _limit
        end = start + _limit
        paginated = products[start:end]
        total = len(products)
        has_next_page = end < total
        return paginated, total, has_next_page
    return products