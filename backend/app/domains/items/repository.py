from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.domains.items.models import Item

class ItemRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_all(self, skip: int = 0, limit: int = 10):
        stmt = select(Item).offset(skip).limit(limit)
        result = await self.db.execute(stmt)
        return result.scalars().all()

    async def count(self):
        stmt = select(Item)
        result = await self.db.execute(stmt)
        return result.scalar_one_or_none()
    
    def delete_item(self) -> str:
        return ""
    