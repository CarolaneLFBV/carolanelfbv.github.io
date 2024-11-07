# Design Patterns

### Introduction
Design patterns are fundamental tools for development, in order to create efficient, maintainable, and scalable code. Let’s explore some essential design patterns that are important in development.

## Flyweight Pattern
### Definition 
The `Flyweight Pattern` helps save memory by sharing parts of objects that are similar. Think of it as using the same design on multiple T-shirts instead of printing a new design for each.

### Flow
* `Intrinsic State`: Shared data stored in a flyweight object, independent of context.
* `Extrinsic State`: Context-specific data provided externally by the client.
* `Usage`: Flyweights are reused and combined with extrinsic data to represent objects with minimal memory overhead.

-> The flyweight pattern stores shared information once, reusing it across different instances instead of duplicating it. Each object only holds unique information and shares everything else.

## Proxy Pattern
### Definition 
The `Proxy Pattern` provides a stand-in, or placeholder, for another object. This is like having a “gatekeeper” that controls access to the main object, such as loading something only when needed.

### Flow
* `Proxy Interface`: The proxy implements the same interface as the target object.
* `Delegation`: The proxy manages the creation or access of the actual object, delegating calls as needed.
* `Usage`: Proxies can intercept and manage client requests before passing them to the real object.

-> The proxy represents the main object and decides when or how to access it. It might delay the real object’s creation until necessary or add security checks before granting access.