from pydantic import BaseModel
from uuid import UUID

class UserCreate(BaseModel):
    username: str
    password:  str #constr(min_length=8, max_length=72)

class UserRead(BaseModel):
    id: UUID
    username: str
    
    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str
