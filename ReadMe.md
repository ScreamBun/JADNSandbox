# ScreamingBunny (OpenC2) Web Message Validator
## Running Server (General)
1. Install Python and pip
	- Install varies based on the system...
2. Install OpenC2 JADN whl using local install

    ```bash
    pip install -r OpenC2-*.whl
    ```

## Running Server (developement)
1. Install the python packages from the requirements.txt file
	
	```bash
	pip install -r requirements.txt
   	```
	
2. Run the server
	- Linux
		
		```bash
		start.sh
		```
	
	- Windows
	
		```cmd
		start.bat
		```
	
#### Notes
- Recomended to use virtualenv, if not currently, while on a delvelopement system
- Not validated for use with python2.7

## Running Gunicorn Server (production)
- Standalone
	1. Install the python packages from the requirements.txt file
	
		```bash
		pip install -r requirements.txt
		```
	
	2. Run the server
	
		```bash
		cd (OpenC2 directory)
		gunicorn --config gunicorn/gunicorn.conf --log-config gunicorn/logging.conf webApp:app
		```

		
## Google App Engine
TODO: Fill in info based on [simple flask app](https://cloud.google.com/appengine/docs/standard/python/getting-started/python-standard-env)
		
### Notes
- Using Git flow for developement

#### Gunicorn
- Valid settings can be found on the [Docs page](http://docs.gunicorn.org/en/latest/settings.html)

#### General
- Using [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/) for simple feature intigration
