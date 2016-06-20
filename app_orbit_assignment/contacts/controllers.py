import json
from flask import (Blueprint, render_template, jsonify)


contacts = Blueprint('contacts', __name__)


@contacts.route('/')
@contacts.route('/<path:path>')
def index(path=None):
    return render_template('index.html')


@contacts.route('/api/v1/contact-list', strict_slashes=False)
def contact_list():
    with open("app_orbit_assignment/sample_data/contacts.json", "r") as fl:
        contacts_json = json.load(fl)
        return jsonify({'contacts': contacts_json})
