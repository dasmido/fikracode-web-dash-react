from pydantic import BaseModel

class HeroCreate(BaseModel):
    title: str
    description: str
    link: str
    image: str
    
class HeroRead(BaseModel):
    id: int
    title: str
    description: str
    link: str
    image: str
    
    class Config:
        from_attributes=True