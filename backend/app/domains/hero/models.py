from sqlalchemy import Column, Integer, String
from app.infrastructure.database import Base

class Hero(Base):
    __tablename__ = "heros"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    link = Column(String)
    image = Column(String)