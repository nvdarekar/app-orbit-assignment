import os
from app_orbit_assignment import app

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 33507))
    app.run(port=port)
