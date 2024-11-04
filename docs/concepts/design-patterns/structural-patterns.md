# Structural Patterns

## Adapter Pattern
### Definition
The `Adapter Pattern` allows incompatible interfaces to work together by creating an adapter class that translates requests between systems. 
It’s commonly used when integrating third-party libraries or legacy code that doesn't match the expected interface.

### Flow

* `Adapter Creation`: The adapter class is created, implementing the interface and methods expected by the client.
* `Adaptation`: The adapter translates or maps requests from the client interfqce to the adaptee's interface.
* `Usage`: The client can now use the adapter as if it were using the original system or class.