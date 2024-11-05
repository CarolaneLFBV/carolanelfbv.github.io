# Structural Patterns

## Adapter Pattern
### Definition
The `Adapter Pattern` helps two pieces of code with different interfqces work together.
It’s commonly used when integrating third-party libraries or legacy code that doesn't match the expected interface.
<div style="display: flex; justify-content: center;">
<img src="/concepts/design-patterns/dp-adapter.png" alt="Diagram representing how the Adapter design pattern works" />
</div>

Think about when you are traveling: when you decide to travel to a different continent, it's complicated to use a power outlet! That's where the plug adapter comes in, and helps you to adapt your charger. Same here! 

### Flow
* `Adapter Creation`: The adapter class is created, implementing the interface and methods expected by the client.
* `Adaptation`: The adapter translates or maps requests from the client interface to the adaptee's interface.
* `Usage`: The client can now use the adapter as if it were using the original system or class.

-> So, an adapter class sits between two incompatible parts, takes requests from one part, translates it, and sends it to the other part, so it can understand.

## Bridge Pattern
### Definition 
The `Birdge Pattern` helps split an abstraction (a high-level idea) from its implementation (the details). 
Need an example? I got one for you: suppose you have a magic remote that controls a devices such as different TVs. Well, the abstraction is the remote, and the remote is used by implementations such as the TVs.

<div style="display: flex; justify-content: center;">
<img src="/concepts/design-patterns/dp-bridge.png" alt="Diagram representing how the Bridge design pattern works" />
</div>

:::info
The relation Has-A defines the bridge between the two hierarchies (Remote and TV)
:::

### Flow
* `Abstraction`: Defines a high-level interface, often extendeed by refined abstractions.
* `Implementation`: Concrete implementations are separated into their own classes.
* `Usage`: The abstraction delegates operations to the implementation, allowing both to evolve independetly.

-> We got two parts: one for general controle (the remote), and one for the specific device (the TV, the Radio). The remote sends signals, but each device responds its way.

## Composite Pattern
### Definition 
The `Composite Pattern` lets you treat individual objects and groups of objects in the same way, like treating individual files and folders in a file system.

<div style="display: flex; justify-content: center;">
<img src="/concepts/design-patterns/dp-comp.png" alt="Diagram representing how the Composite design pattern works" />
</div>

### Flow
* `Component Interface`: Defines the common interface (Component) for all elements in the hierarchy.
* `Leaf`: Represent individual element of a tree that doesn't have sub-elements. THey end up doing most of the work.
* `Composite (or Container)`: Represent an element that has sub-elements such as leaves or composites. A container doesn't know the concrete classes of its children. Besides receiving a request, it delegates the work to its sub-elements, processes intermedaite results and then returns the final result to the client.
* `Usage`: The client can treat leaf and composite nodes as the same type and perform operations on them uniformly.

-> The pattern organizes items into a tree structure. Individual objects are leaves (like files), and groups are branches (like folders). You can work with each item, whether it’s a single file or a folder containing many files, without worrying about the difference.

## Decorator Pattern
### Definition 
The `Decorator Pattern` lets you add new features or "decorations" to an object ithout changing its structure.
It's like adding extra toppings on a pizza–the pizza stays the same, but you add things to it!

<div style="display: flex; justify-content: center;">
<img src="/concepts/design-patterns/dp-deco.png" alt="Diagram representing how the Decorator design pattern works" />
</div>

### Flow
* `Component Interface`: Defines the base interface for objects that can have responsibilities added.
* `Concrete Component`: The object being decorated.
* `Decorator`: Wraps the component, adding new behavior while conforming to the same interface.
* `Usage`: Multiple decorators can be stacked to add layered behaviors dynamically.

-> You have a basic object (like a plain pizza), and then you can wrap it with decorators (extra cheese, pepperoni) that add extra functionality or features. Each decorator adds something new.

## Facade Pattern
### Definition 
The `Facade Pattern` creates a simple interface for a complex system. It’s like the front desk of a hotel that helps you navigate the hotel’s many services without dealing with each one directly.


### Flow
* `Facade Interface`: A single point of access is created, wrapping complex subsystem interactions.
* `Subsystem Calls`: The facade simplifies operations by calling multiple subsystem methods.
* `Usage`: Clients interact with the facade, unaware of the underlying subsystems.

-> The facade acts as a “front desk,” providing easy access to a complicated system behind it. You only interact with the facade, which then handles all the hard work in the background.

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