from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager

import os
base_dir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__, static_folder='static')

from . import routes