#ifndef OPENGLRENDERER_H
#define OPENGLRENDERER_H
#include &lt;iostream&gt;
#include "Renderer.h"


class OpenGLRenderer : public Renderer
{
public:

  bool loadScene(const std::string &) {return true;}
  void setViewportSize(int , int ) {;}
  void setCameraPos(double , double , double ) {;}
  void setLookAt(double , double , double ) {;}
  void render() {std::cout&lt;&lt;"OpenGL Render\n";}
  ~OpenGLRenderer(){std::cout&lt;&lt;"OpenGL dtor called\n";}
  static Renderer *create() { return new OpenGLRenderer; }

};

#endif
