# SOLID - principles of object-oriented programming
<img width="1213" alt="Screenshot 2023-08-23 at 10 26 40" src="https://github.com/KrystynaKoryagina/SOLID/assets/39225296/437adb28-d28a-4543-a8c1-9d319b850ea2">

## Single-Responsibility Principle

A class should be responsible for only one thing. 
If a сlass has many responsibilities, it increases the possibility of bugs because making changes to one of its responsibilities, could affect the other ones without you knowing.

This principle applies not only to classes, but also to software components, microservices and etс.

When designing our classes, we should aim to put related features together, so whenever they tend to change they change for the same reason. 
And we should try to separate features if they will change for different reasons. 

## Open-Closed Principle

Software entities(Classes, modules, functions) should be open for extension, not modification.

This principle aims to extend a Class’s behaviour without changing the existing behaviour of that Class. 
This is to avoid causing bugs wherever the Class is being used.
