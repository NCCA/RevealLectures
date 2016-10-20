# Design Patterns 2
Jon Macey

jmacey@bournemouth.ac.uk

---

# The PIMPL Idiom
- Introduced by Jeff Sumner as shorthand for “Pointer to Implementation”
- It is used to avoid exposing private details in an API header
- Whilst it is not a design pattern may be considered a special case of the “Bridge pattern”
- Main reason for use is to overcome C++ limitations

--

# PIMPL

- In C++ we can forward declare a pointer to a type
- i.e. we declare a name but not the details
- This is sometimes referred to as an “opaque pointer” as you can’t see the detail


---

# References

- Gamma, Erich; Helm, Richard; Johnson, Ralph; Vlissides, John 1994. Design Patterns: Elements of Reusable Object-Oriented Software. Addison-Wesley.
- Steve McConnell. 2004. Code Complete, Second Edition. Microsoft Press, Redmond, WA, USA.
- Martin Reddy, 2011. API Design for C++ Morgan Kaufmann.
- Andrei Alexandrescu  2001. Modern C++ Design, Addison-Wesley.

--

# References

- http://en.wikipedia.org/wiki/Software_design_pattern
- http://en.wikipedia.org/wiki/SOLID
- http://en.wikipedia.org/wiki/Abstract_factory_pattern
- http://en.wikipedia.org/wiki/Builder_pattern
- http://en.wikipedia.org/wiki/Factory_method_pattern

--

# References

- http://en.wikipedia.org/wiki/Lazy_initialization
- http://en.wikipedia.org/wiki/Multiton_pattern
- http://en.wikipedia.org/wiki/Prototype_pattern
- http://en.wikipedia.org/wiki/Liskov_substitution_principle
- “The Pragmatic Programmer”  Andrew Hunt  , David Thomas
- http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.50.3681&rep=rep1&type=pdf

--

# References 

- http://www.cplusplus.com/reference/memory/auto_ptr/
- http://ootips.org/yonat/4dev/smart-pointers.html
- http://sourcemaking.com/
- http://sourcemaking.com/design_patterns/observer/cpp/3
- http://www.c2.com/cgi-bin/wiki?ModelViewController

--

# References

- http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller
- http://sourcemaking.com/design_patterns/memento
- http://advancedcppwithexamples.blogspot.co.uk/2010/09/c-example-for-composite-design-pattern.html