# JADN Schema

This logic can be added to other projects via the python whl. 

## Setup
1) Setup your virtual environment, if you have not done so
2) run setup.py to pulled down the dependencies and setup the jadnschema whl.
   1) python ./setup.py
3) If you are doing development, then also install the development dependencies.
   1) pip install -r requirements_dev.txt

## How to create the whl
1) From setup.cfg, update the version
2) Run: python setup.py bdist_wheel --universal
3) Under dist, locate: jadnschema-*-py2.py3-none-any.whl
4) Copy to the repo or project that requires this functionality
5) To add to the other project run: pip install jadnschema-*-py2.py3-none-any.whl

## Creating the Docs
1) Run: python mkdocs.py
2) Open docs/index.html

## Develop and Test JADN Schema on the Fly
* When developing and testing JADN Schema, you can link it directly to your virtual environment to avoid recreating wheels.
  * Within your virtual environment view the python dependencies 
    * pip freeze
  * Remove the jadnschema wheel
    * pip uninstall jadnschema
  * Add the jadnschema git repo source to the python dependencies
    * cd to jadnschema
    * python setup.py develop
    * pip freeze
    * You should see this something similar to this
      * -e git+ssh://git@ccoe-gitlab.hii-tsd.com/screamingbunny/schema/jadnschema.git@16ac517baa1499014ba221b7d1b7ffb3cef20ebe#egg=jadnschema
  * Go back to the Web Validator and start the server
    * ./start.sh
  * Remember when you are finished, make sure to 
    * recreate the jadnschema wheel, which contains the updated code
    * uninstall the direct link, simple pip uninstall jadnschema
    * install the updated jadnschema wheel
