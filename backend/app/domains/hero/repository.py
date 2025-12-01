from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from app.domains.hero.models import Hero

class HeroRepository:
    def __init__(self, db: AsyncSession):
        self.db = db
    
    async def get_all(self, skip: int = 0, limit: int = 10):
        stmt = select(Hero).offset(skip).limit(limit)
        result = await self.db.execute(stms);
        return result.scalars().all()
    
    def post_new_hero():
        return ""
    
    def update_hero():
        return ""
    
    def delete_hero():
        return ""