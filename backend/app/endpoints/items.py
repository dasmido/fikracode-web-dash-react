from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession
from app.common.security import get_current_user
from app.infrastructure.database import get_db
from app.domains.items.repository import ItemRepository
from app.domains.items.service import ItemService
from app.domains.items.schemas import ItemCreate, ItemRead


router = APIRouter(prefix="/items", tags=["items"])

@router.post("/", response_model=ItemRead)
async def create_item(item: ItemCreate, db: AsyncSession = Depends(get_db)):
    service = ItemService(ItemRepository(db))
    return await service.create_item(item)

@router.get("/", response_model=dict)
async def list_items(page: int = Query(1, ge=1), size: int = Query(10, ge=1), db: AsyncSession = Depends(get_db), current_user: str = Depends(get_current_user)):
    service = ItemService(ItemRepository(db))
    skip = (page - 1) * size
    return await service.get_items(skip=skip, limit=size)