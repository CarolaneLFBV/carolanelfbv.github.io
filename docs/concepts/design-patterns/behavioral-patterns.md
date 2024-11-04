# Behavioral Patterns

### Observer Pattern
#### Definition
The `Observer Pattern` establishes a one-to-many dependency between objects, so that when one object changes state, all its dependents are notified and updated automatically. 
* `Subject` is an object that maintains a list of observers and notifies them of state changes.
* `Observers` are objects that subscribe to the subject to receive updates.

#### Flow
<div style="display: flex; justify-content: center;">
<img src="/concepts/design-patterns/dp-obsv.png" alt="Diagram representing how the MVC design pattern works"  />
</div>

* `State Change`: The `Subject`'s state changes (e.g., data is updated).
* `Notification`: The `Subject` notifies all registered `Observers` of the change.
* `Observer Reaction`: Each `Observer` reacts to the notification, which may involve updating the UI or performing some other action.