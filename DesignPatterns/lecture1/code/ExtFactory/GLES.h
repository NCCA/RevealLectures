#ifndef GLES_H
#define GLES_H
#include &lt;iostream&gt;
#include "Renderer.h"

class GLES : public Renderer
{
public:

  bool loadScene(const std::string &) {return true;}
  void setViewportSize(int , int ) {;}
  void setCameraPos(double , double , double ) {;}
  void setLookAt(double , double , double ) {;}
  void render() {std::cout&lt;&lt;"GLES Render\n";}
  ~GLES(){std::cout&lt;&lt;"GLES dtor called\n";}
  static Renderer *create() { return new GLES; }

};

#endif
