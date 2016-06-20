from flask import Flask
from contacts.controllers import contacts
import os

app = Flask(__name__, static_folder='static')
app.register_blueprint(contacts)

APP_ROOT = os.path.dirname(os.path.abspath(__file__))   

# in case if we have multiple modules in the project we can prepend
# url prefix using following syntax
# app.register_blueprint(contacts, url_prefix='/contacts')
