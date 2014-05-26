package cl.yaykuy.bitbrasil;

import org.vertx.java.platform.Verticle;
import org.vertx.java.core.Handler;
import org.vertx.java.core.eventbus.*;
import org.vertx.java.core.json.*;
import org.vertx.java.core.buffer.Buffer;

import com.jetdrone.vertx.yoke.Yoke;
import com.jetdrone.vertx.yoke.middleware.*;
import com.jetdrone.vertx.yoke.engine.*;


import java.lang.Override;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


public class YokeServer extends Verticle {



  public void start() {
      
      getContainer().logger().info("Yoke Server Starting");
      try{

      // Create a new Yoke Application
      Yoke app = new Yoke(this);
      // define engines
      app.engine(new HandlebarsEngine("views"));
      // define middleware
      //app.use(new Favicon("img/favicon.png"));
      app.use(new Logger());
      //app.use(new BodyParser());
      //app.use(new MethodOverride());
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


      router.get("/blockchain_notify", new Handler<YokeRequest>() {
          @Override
          public void handle(final YokeRequest request) {
              String address=request.params().get("input_address");
              String confirmations=request.params().get("confirmations");
              getContainer().logger().info("Blockchain notify for address:"+address
                +" ["+confirmations+"]");

              JsonObject obj = new JsonObject();
              obj.putString("address", address);
              obj.putNumber("confirmations", Integer.parseInt(confirmations));

              vertx.eventBus().send("splitter.split", obj, new Handler<Message<JsonObject>>() {
                  public void handle(Message<JsonObject> message) {
                      if(message.body().getString("status").equals("ok")){
                        request.response().end("*ok*");
                      }else{
                        request.response().end(message.body().getString("status"));
                      }
                  }
              });

              
          }
      });

      router.post("/bitcoinmonitor_notify", new Handler<YokeRequest>() {
          @Override
          public void handle(final YokeRequest request) {
              request.bodyHandler(new Handler<Buffer>() {
                public void handle(Buffer body) {
                      JsonObject data=(new JsonObject(body.toString())).getObject("signed_data");
                      String address=data.getString("address");
                      Number confirmations=data.getNumber("confirmations");
                      getContainer().logger().info("Bitmonitor notify for address:"+address
                        +" ["+confirmations+"]");

                      vertx.eventBus().send("splitter.split", data, new Handler<Message<JsonObject>>() {
                          public void handle(Message<JsonObject> message) {
                              if(message.body().getString("status").equals("ok")){
                                request.response().end("*ok*");
                              }else{
                                request.response().setStatusCode(409);
                                request.response().end(message.body().getString("status"));
                              }
                          }
                      });
                    }
                });
          }
      });




      String portString=System.getProperty("port");
      final int port;
      if (portString==null){
        port=8080;
      } else {
        port=Integer.parseInt(portString);
      }


      app.listen(port, new Handler<Boolean>() {
          @Override
          public void handle(Boolean result) {
              getContainer().logger().info("Yoke Server listening on http://localhost:"+port+"/");
          }
      });

      }catch (Exception e){
        e.printStackTrace();
      }

  }
}
