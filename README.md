 App Orbit Angular Assignment
=============================

Setup
===============
# Get a copy of latest code

```bash
git clone git@github.com:nvdarekar/app-orbit-assignment.git
cd app-orbit-assignment
```


# Setup vitualenv

```bash
# Install latest release of PIP
curl https://bootstrap.pypa.io/get-pip.py | sudo python

# Install latest release of virtualenvwrapper
sudo pip install -U virtualenvwrapper

# Create a new virtualenv
mkvirtualenv flask-app

# Activate virtualenv, you'll need to do this every time before running any python code/shell.
workon flask-app
```


# Install Dependecies
```bash
# Install PIP requirements
pip install -r requirements.txt
# Install bower
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g bower
# Install front-end dependencies using bower
bower install
```

# Run the application
```bash
python app.py
```
