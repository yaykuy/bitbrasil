package cl.yaykuy.bitbrasil;

import org.vertx.java.platform.Verticle;
import org.vertx.java.core.Handler;

import com.jetdrone.vertx.yoke.Yoke;
import com.jetdrone.vertx.yoke.middleware.*;
import com.jetdrone.vertx.yoke.extras.engine.*;

import java.lang.Override;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Server extends Verticle {

  public void start() {
      getContainer().logger().info("BitBrasil Server Starting");

      // Create a new Yoke Application
      Yoke app = new Yoke(this);
      // define engines
      app.engine(new HandlebarsEngine("views"));
      // define middleware
      app.use(new Favicon());
      app.use(new Logger());
      app.use(new BodyParser());
      app.use(new MethodOverride());
      // Create a new Router
      Router router = new Router();
      app.use(router);
      // static file server
      app.use(new Static("public"));

      // development only
      if (System.getenv("DEV") != null) {
          app.use(new ErrorHandler(true));
      }

      // define routes
      router.get("/", new Handler<YokeRequest>() {
          @Override
          public void handle(YokeRequest request) {
              request.response().render("index.hbs");
          }
      });

      String portString=System.getProperty("port");
      final int port;
      if (portString==null){
        port=8081;
      } else {
        port=Integer.parseInt(portString);
      }

      app.listen(port, new Handler<Boolean>() {
          @Override
          public void handle(Boolean result) {
              getContainer().logger().info("BitBrasil Server listening on http://localhost:"+port+"/");
          }
      });
  }
}
