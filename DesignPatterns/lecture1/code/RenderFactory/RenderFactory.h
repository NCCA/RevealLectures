#include "Renderer.h"
#include &lt;string&gt;
class RenderFactory
{
public :
  Renderer *createRenderer(const std::string &_type);

};
