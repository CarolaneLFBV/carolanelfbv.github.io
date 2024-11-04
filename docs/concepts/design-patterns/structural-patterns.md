# Structural Patterns

## Adapter Pattern
### Definition
The `Adapter Pattern` allows incompatible interfaces to work together by creating an adapter class that translates requests between systems. It’s commonly used when integrating third-party libraries or legacy code.

### Flow

* `Adapter Creation`: The adapter class implements the expected interface.
* `Adaptation`: The adapter translates calls to match the existing system’s expected format.
* `Usage`: The client interacts with the adapter as if it were the expected class.