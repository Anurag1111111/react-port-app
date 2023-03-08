from flask import Flask, g, request
from flask_cors import CORS
import pymysql
import logging
from waitress import serve
import datetime

app = Flask(__name__)
CORS(app)


@app.before_request
def before_request():
    g.db = pymysql.connect(host="localhost", user="root",
                           password="Anurag11@#jangir", db="my_app", autocommit=True)
    g.cursor = g.db.cursor()


@app.teardown_request
def teardown_request(exception):
    g.cursor.close()
    g.db.close()


@app.route("/api/recommendations", methods=["GET"])
def get_recommendation():
    try:

        querry = "select * from recommendations where onShowcase=True;"
        g.cursor.execute(querry)
        recommendations = g.cursor.fetchall()
        results = []
        for recommendation in recommendations:
            object = {
                "id": recommendation[0],
                "name": recommendation[1],
                "company": recommendation[3],
                "designation": recommendation[4],
                "message": recommendation[5],
            }
            results.append(object)

        return {"isSuccessful": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "results": []}


@app.route("/api/skills", methods=["GET"])
def get_skill():
    try:

        querry = "select * from skills;"
        g.cursor.execute(querry)
        skills = g.cursor.fetchall()
        results = []
        for skill in skills:
            object1 = {
                "id": skill[0],
                "imageUrl": skill[1],
                "name": skill[2],
                "starsTotal": skill[3],
                "starsActive": skill[4],
            }
            results.append(object1)

        return {"isSuccessful": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "results": []}


@app.route("/api/projects", methods=["GET"])
def get_project():
    try:

        querry = "select id,imageUrl,title,excerpt from projects where isPublished=True ORDER by lastModified DESC;"
        g.cursor.execute(querry)
        Projects = g.cursor.fetchall()
        results = []
        for project in Projects:
            object2 = {
                "id": project[0],
                "imageUrl": project[1],
                "title": project[2],
                "excerpt": project[3],
                # "body": project[4],
            }
            results.append(object2)

        return {"isSuccessful": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "results": []}


@app.route("/api/blogs", methods=["GET"])
def get_blog():
    try:

        querry = "select id,imageUrl,title,excerpt from blogs where isPublished=True ORDER by lastModified DESC;"
        g.cursor.execute(querry)
        blogs = g.cursor.fetchall()
        results = []
        for blog in blogs:
            object2 = {
                "id": blog[0],
                "imageUrl": blog[1],
                "title": blog[2],
                "excerpt": blog[3],
                # "body": project[4],
            }
            results.append(object2)

        return {"isSuccessful": True, "results": results}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "results": []}


@app.route("/api/project", methods=["POST"])
def add_project():
    try:
        project = request.json
        print(project)
        query = "insert into Projects values(%s,%s,%s,%s,%s,%s,%s);"
        g.cursor.execute(query, [project['id'], project['imageUrl'], project['title'],
                         project['excerpt'], project['body'], True, datetime.datetime.now()])
        return {"isSuccessful": True}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False}


@app.route("/api/blog", methods=["POST"])
def add_blog():
    try:
        blog = request.json
        print(blog)
        query = "insert into blogs values(%s,%s,%s,%s,%s,%s,%s);"
        g.cursor.execute(query, [blog['id'], blog['imageUrl'], blog['title'],
                         blog['excerpt'], blog['body'], True, datetime.datetime.now()])
        return {"isSuccessful": True}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False}


@app.route("/api/write", methods=["POST"])
def add_recommendation():
    try:
        recommendation = request.json
        print(recommendation)
        query = "insert into recommendations values(%s,%s,%s,%s,%s,%s,%s);"
        g.cursor.execute(query, [recommendation['id'], recommendation['name'], recommendation['email'], recommendation['company'],
                         recommendation['designation'], recommendation['message'], True])
        return {"isSuccessful": True}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False}


@app.route("/api/contact", methods=["POST"])
def add_contact():

    contact = request.json

    query = "insert into contact values(%s,%s,%s);"

    # contact = g.cursor.fetchall()

    print(contact)

    g.cursor.execute(query, [contact['name'], contact['email'], contact['description']
                             ])

    return {"isSuccessful": True}

    # except Exception as e:
    #     logging.error(e)
    #     print(e)
    #     return {"isSuccessful": False}


@app.route("/api/project", methods=["GET"])
def add_project_by_id():
    try:
        id = request.args.get("id")

        query = "select imageUrl, title, body from projects where id=%s;"

        g.cursor.execute(query, [id])

        project = g.cursor.fetchone()

        obj_project = {'imageUrl': project[0],
                       'title': project[1], 'body': project[2]}
        print(project)
        return {'isSuccessful': True, 'result': obj_project}

    except Exception as e:
        logging.error(e)
        print(e)
        return {"isSuccessful": False}


@app.route("/api/blog", methods=["GET"])
def add_blog_by_id():
    try:
        id = request.args.get("id")

        query = "select imageUrl, title, body from blogs where id=%s;"

        g.cursor.execute(query, [id])

        blog = g.cursor.fetchone()

        obj_blog = {'imageUrl': blog[0],
                    'title': blog[1], 'body': blog[2]}

        return {'isSuccessful': True, 'result': obj_blog}

    except Exception as e:
        logging.error(e)
        print(e)
        return {"isSuccessful": False}


if __name__ != "__main__":
    waitress_logger = logging.getLogger("waitress.error")
    app.logger.handlers = waitress_logger.handlers
    app.logger.setLevel(waitress_logger.level)


# @app.route("/", methods=["Get"])
# def Home():
#     cursor = db.cursor()

#     cmd = "describe skills;"
#     cursor.execute(cmd)
#     tables = cursor.fetchall()
#     print(tables)
#     return "Helloo"
