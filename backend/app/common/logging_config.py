import logging

# Create a logger
logger = logging.getLogger("app")
logger.setLevel(logging.INFO)  # or DEBUG for more details

# Create console handler
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.INFO)  # same as logger or different

# Set log format
formatter = logging.Formatter("%(asctime)s [%(levelname)s] %(name)s: %(message)s")
console_handler.setFormatter(formatter)

# Add handler to logger
logger.addHandler(console_handler)
