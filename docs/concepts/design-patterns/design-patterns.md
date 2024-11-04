# Design Patterns

### Introduction
Design patterns are fundamental tools for development, in order to create efficient, maintainable, and scalable code. Let’s explore some essential design patterns that are important in development.

### Model-View-Controller (MVC)
#### Definition
The `MVC` is a fundamental design pattern in development. 
It seperates the data (Model), user interface (View), and the logic that connects them (Controller).
* The `Model` represents the data and business logic of the application. It is responsible for retrieveing data, managing it, and notifying the View when data changes.
* The `View` displays the user interface and presents the data to the user.It listens for user input and forwards these actions to the Controller.
* The `Controller` acts as am intermediary between the Model and the View. Receives input from the View, processes it (often involving calls to the Model), and upadtes the View accordingly.

#### Flow
<div style="display: flex; justify-content: center;">
<img src="/concepts/design-patterns/dp-mvc.png" alt="Diagram representing how the MVC design pattern works" />
</div>

* The `View` receives user input (1) and notifies the `Controller` (1🔔).
* The `Controller` interacts with the `Model` to get or update data (2). 
* Once the `Model` is updated of fetched (🔄3), the `Controller` updates the `View` (3).

### Model-View-ViewModel (MVVM)
#### Definition
The `MVVM` enhances the MVC pattern with a `ViewModel` layer that separates business logic from the View.
* The `Model` is similar to MVC, which represents the data and business logic of the application.
* The `View` displays the user interface and binds to properties exposed by the ViewModel.
* The `ViewModel` acts as an intermediary between the Model and the View, and exposes data in a way that the View can easily consume. It provides properties that the View can bind to, and it may include methods that the View can invoke without needing to know the specifics of the Model.

#### Flow
<div style="display: flex; justify-content: center;">
<img src="/concepts/design-patterns/dp-mvvm.png" alt="Diagram representing how the MVC design pattern works" />
</div>

* The `View` binds to properties in the `ViewModel` (1).
* When the `ViewModel` receives updates from the `Model` or processes user input, it notifies the `View` of changes (2).
* The `View` updates automatically based on the data bound to the `ViewModel` (3).

### Singleton Pattern
#### Definition
The `Singleton Pattern` is designed to ensure that only one instance exists and provides a global acces point to it. It is ideal for shared resources, such as configuration settings, logging, or managing connections.

#### Flow
<div style="display: flex; justify-content: center;">
<img src="/concepts/design-patterns/dp-sing.png" alt="Diagram representing how the MVC design pattern works" class="small-image" />
</div>

* `Instance Creation`: When the application requests an instance of the Singleton, it checks if one already exists.
* `Global Access`: If an instance does not exist, it creates one. Subsequent requests return the same instance.
* `Usage`: Any part of the application can access the Singleton instance and interact with its methods or properties.

