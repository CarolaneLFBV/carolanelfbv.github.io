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


## Model-View-Controller (MVC)
### Definition
The `MVC` is a fundamental design pattern in iOS development. 
It seperates the data (Model), user interface (View), and the logic that connects them (Controller).
* The `Model` represents the data and business logic of the application. It is responsible for retrieveing data, managing it, and notifying the View when data changes.
* The `View` displays the user interface and presents the data to the user.It listens for user input and forwards these actions to the Controller.
* The `Controller` acts as am intermediary between the Model and the View. Receives input from the View, processes it (often involving calls to the Model), and upadtes the View accordingly.

### Flow
<div style="display: flex; justify-content: center;">
<img src="/concepts/design-patterns/dp-mvc.png" alt="Diagram representing how the MVC design pattern works" />
</div>

* The `View` receives user input (1) and notifies the `Controller` (1🔔).
* The `Controller` interacts with the `Model` to get or update data (2). 
* Once the `Model` is updated of fetched (🔄3), the `Controller` updates the `View` (3).

## Model-View-ViewModel (MVVM)
### Definition
The `MVVM` enhances the MVC pattern with a `ViewModel` layer that separates business logic from the View.
* The `Model` is similar to MVC, which represents the data and business logic of the application.
* The `View` displays the user interface and binds to properties exposed by the ViewModel.
* The `ViewModel` acts as an intermediary between the Model and the View, and exposes data in a way that the View can easily consume. It provides properties that the View can bind to, and it may include methods that the View can invoke without needing to know the specifics of the Model.

### Flow
<div style="display: flex; justify-content: center;">
<img src="/concepts/design-patterns/dp-mvvm.png" alt="Diagram representing how the MVC design pattern works" />
</div>

* The `View` binds to properties in the `ViewModel` (1).
* When the `ViewModel` receives updates from the `Model` or processes user input, it notifies the `View` of changes (2).
* The `View` updates automatically based on the data bound to the `ViewModel` (3).
 