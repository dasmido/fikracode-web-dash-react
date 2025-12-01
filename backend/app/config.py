import os

# Default database URL (change to your credentials)
DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql://calendreydb_owner:TyEO2pZv5ljD@ep-rapid-bush-a8l3g150-pooler.eastus2.azure.neon.tech/demo_db"
    #"postgresql://postgres:postgres123@localhost:5432/fastapi_db"
)