# SOLID - principles of object-oriented programming
<img width="1213" alt="Screenshot 2023-08-23 at 10 26 40" src="https://github.com/KrystynaKoryagina/SOLID/assets/39225296/437adb28-d28a-4543-a8c1-9d319b850ea2">

## Single-Responsibility Principle
![srp](https://github.com/KrystynaKoryagina/SOLID/assets/39225296/968ca03f-c883-4052-afcb-331de25851b1)

A class should be responsible for only one thing. 
If a сlass has many responsibilities, it increases the possibility of bugs because making changes to one of its responsibilities, could affect the other ones without you knowing.

This principle applies not only to classes, but also to software components, microservices and etс.

When designing our classes, we should aim to put related features together, so whenever they tend to change they change for the same reason. 
And we should try to separate features if they will change for different reasons. 

## Open-Closed Principle
![ocp](https://github.com/KrystynaKoryagina/SOLID/assets/39225296/40872b50-cfdf-490e-a619-b55ed16d1ab2)

Software entities(Classes, modules, functions) should be open for extension, not modification.

This principle aims to extend a Class’s behaviour without changing the existing behaviour of that Class. 
This is to avoid causing bugs wherever the Class is being used.

## Liskov Substitution Principle
![lsp](https://github.com/KrystynaKoryagina/SOLID/assets/39225296/0758defc-9b85-40ca-a673-0161b4227c0a)

If **Child** is a subtype of **Parent**, then objects of type **Parent** in a program may be replaced with objects of type **Child** without altering any of the desirable properties of that program.
When a child Class cannot perform the same actions as its parent Class, this can cause bugs.

The child Class should be able to do everything the parent Class can do. This process is called Inheritance.
The child Class should be able to process the same requests and deliver the same result as the parent Class or it could deliver a result that is of the same type.

This principle aims to enforce consistency so that the parent Class or its child Class can be used in the same way without any errors.

## Interface Segregation Principle
![isp](https://github.com/KrystynaKoryagina/SOLID/assets/39225296/19009305-386d-4714-ac3c-f3586d9caf48)

Clients should not be forced to depend on methods that they do not use.

When a Class is required to perform actions that are not useful, it is wasteful and may produce unexpected bugs if the Class does not have the ability to perform those actions.

A Class should perform only actions that are needed to fulfil its role. 
Any other action should be removed completely or moved somewhere else if it might be used by another Class in the future.

This principle aims at splitting a set of actions into smaller sets so that a Class executes ONLY the set of actions it requires.

## Dependency Inversion Principle
![dvp](https://github.com/KrystynaKoryagina/SOLID/assets/39225296/4af09e8f-399a-4c78-9101-b092d562fd7a)

- High-level modules should not depend on low-level modules. Both should depend on the abstraction.
- Abstractions should not depend on details. Details should depend on abstractions.

**High-level Module(or Class)**: Class that executes an action with a tool.

**Low-level Module (or Class)**: The tool that is needed to execute the action

**Abstraction**: Represents an interface that connects the two Classes.

**Details**: How the tool works

This principle aims at reducing the dependency of a high-level Class on the low-level Class by introducing an interface.

This principle says a Class should not be fused with the tool it uses to execute an action. 
Rather, it should be fused to the interface that will allow the tool to connect to the Class.

It also says that both the Class and the interface should not know how the tool works. 
However, the tool needs to meet the specification of the interface.
