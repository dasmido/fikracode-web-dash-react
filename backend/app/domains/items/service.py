from app.domains.items.repository import ItemRepository
from app.domains.items.models import Item
from app.domains.items.schemas import ItemCreate

class ItemService:
    def __init__(self, repo: ItemRepository):
        self.repo = repo

    async def create_item(self, data: ItemCreate):
        item = Item(name=data.name, description=data.description)
        return await self.repo.create(item)

    async def get_items(self, skip: int, limit: int):
        items = await self.repo.get_all(skip, limit)
        total = await self.repo.count()
        return {"total": total, "items": items}