import logging
from paste.translogger import TransLogger
from wsgi import app
from waitress import serve
# serve(app, port=9001)

logger = logging.getLogger('waitress')
logger.setLevel(logging.INFO)

serve(TransLogger(app), host='127.0.0.1', port=5002)
