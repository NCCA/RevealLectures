#ifndef DIRECTXRENDERER_H
#define DIRECTXRENDERER_H
#include &lt;iostream&gt;
#include "Renderer.h"

class DirectXRenderer : public Renderer
{
public:
  DirectXRenderer()=default;
  bool loadScene(const std::string &) {return true;}
  void setViewportSize(int , int ) {;}
  void setCameraPos(double , double , double ) {;}
  void setLookAt(double , double , double ) {;}
  void render() {std::cout&lt;&lt;"DirectX Render\n";}
  ~DirectXRenderer(){std::cout&lt;&lt;"Direct X dtor called\n";}
  static Renderer *create() { return new DirectXRenderer; }

};

#endif
