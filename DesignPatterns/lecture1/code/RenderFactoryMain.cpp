#include &lt;iostream&gt;
#include &lt;RenderFactory.h&gt;
#include "OpenGLRenderer.h"
int main()
{
    // create the factory object
    RenderFactory *f = new RenderFactory;

    // create an OpenGL renderer
    Renderer *renderType = f-&gt;createRenderer("OpenGL");
    renderType-&gt;render();
    delete renderType;

    //Renderer *directX =
    renderType=f-&gt;createRenderer("DirectX");
    renderType-&gt;render();
    delete renderType;

    delete f;

    Renderer *unknown= f-&gt;createRenderer("raytracer");
    if(unknown == 0)
    {
      std::cout&lt;&lt;"don't know how to create a raytracer\n";
    }

    return EXIT_SUCCESS;

}

