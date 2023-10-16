import cherrypy
import os
import smtplib
import smtplib
from email.message import EmailMessage


class Root(object):
    @cherrypy.expose
    def index(self):
        with cherrypy.HTTPError.handle(FileNotFoundError, 404):
            file = open("index.html")
            return file

    @cherrypy.expose
    def getQuote(self, name, message):
        msg = EmailMessage()
        msg["From"] = "j.fupholstery31supervisor@gmail.com"
        msg["To"] = "patdalcia@gmail.com"
        msg["Subject"] = "New quote requested by: " + name
        msg.set_content("Heres the message: \n" + message)

        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login("j.fupholstery31supervisor@gmail.com", "ztoq kfgx rrmy wqnd")
            server.send_message(msg)
            server.quit()
        with cherrypy.HTTPError.handle(FileNotFoundError, 404):
            file = open("quote.html")
            return file


def main():
    cherrypy.config.update({"server.socket_port": 8000})
    conf = {
        "/css": {
            "tools.staticdir.on": True,
            "tools.staticdir.dir": os.path.abspath("./css"),
        }
    }
    cherrypy.quickstart(Root(), "/", config=conf)


if __name__ == "__main__":
    main()
