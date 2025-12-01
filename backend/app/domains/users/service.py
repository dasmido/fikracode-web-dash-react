from fastapi import HTTPException
from app.domains.users.repository import UserRepository
from app.domains.users.schemas import UserCreate
from app.common.security import hash_password, verify_password, create_access_token

class UserService:
    def __init__(self, repo: UserRepository):
        self.repo = repo

    async def register(self, data: UserCreate):
        
        # Check if username already exit 
        existing = await self.repo.get_by_username(data.username)
        if existing:
            raise HTTPException(status_code=400, detail="username already registered")
        
        hashed_pwd = hash_password(data.password)
        return await self.repo.create(username=data.username, hashed_password=hashed_pwd)

    async def authenticate(self, username: str, password: str):
        user = await self.repo.get_by_username(username)
        if not user:
            return None
        if not verify_password(password, user.hashed_password):
            return None
        access_token = create_access_token({"sub": user.username})
        return access_token
