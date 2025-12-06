# finwealth-fastapi-python

## How to run?
$ uvicorn app.main:app --reload

### New Env
$ python3 -m venv .venv


## Switch to env 
$ source finEnv/bin/activate


### Install Requirments.txt
$ pip3 install -r requirements.txt


### Docker build
$ docker build -t my-fastapi-app .


### Docker run
docker run -p 8080:8080 my-fastapi-app
