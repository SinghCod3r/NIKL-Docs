---
sidebar_position: 1
---

# Basics

NIKL language uses `.nk` as its file extension. The interpreter is designed to be lightweight and fast, making it suitable for scripting, orchestration, and lightweight services.

There is no main function in NIKL. The code is executed line by line, and there is no initial entry point. This allows for a more flexible and dynamic programming style.

<!-- But before we dive into the details, install the NIKL interpreter. You can find the installation instructions in the [installation guide](../installation/installation.md). -->

Download the NIKL interpreter syntax highlighter from the VSCode marketplace. You can find it by searching for "NIKL" in the extensions tab or by visiting the [NIKL extension page](https://marketplace.visualstudio.com/items?itemName=Neko-Nik.nikl-language-support).


## Hello World

```nikl title="neko.nk"
print("Hello, World!")
```
This simple program prints "Hello, World!" to the console.

## Variables

Variables in NIKL are declared using the `let` keyword. The type of the variable is inferred from the assigned value.

```nikl title="variables.nk"
let name = "NIKL"
let age = 5
```
In this example, `name` is a string variable and `age` is an integer variable.

## Functions

Functions are defined using the `fn` keyword. You can define parameters and return types.

```nikl
fn greet(name: String) -> String {
    return "Hello, " + name + "!"
}
```

:::tip
All the type hints are optional. The compiler will infer the types for you.
::::

## Control Flow
NIKL supports standard control flow constructs like `if`, `elif`, `else`, `for`, `while` and `loop`.

```nikl
let number = 10
if number > 0 {
    print("Positive")
} elif number < 0 {
    print("Negative")
} else {
    print("Zero")
}
```

This example checks if a number is positive, negative, or zero and prints the result.

## Collections
NIKL supports collections like arrays and hash maps.

### Arrays

Arrays are defined using square brackets `[]`.

```nikl
let numbers = [1, 2, 3, 4, 5]

for number in numbers {
    print(number)
}
```
This example creates an array of numbers and iterates through it, printing each number.


### Hash Maps
Hash maps are defined using curly braces `{}`.

```nikl
let person = {
    "name": "NIKL",
    "age": 5
}

for key, value in person {
    print(key + ": " + value)
}
```

This example creates a hash map with keys and values and iterates through it, printing each key-value pair.


## File Import
NIKL allows you to import files using the `import` keyword.

```nikl
import "utils.nk" as utils
let result = utils.add(5, 10)
print(result)
```
This example imports a file named `utils.nk` and uses a function `add` from that file.

## Inbuilt Modules/Libraries

NIKL comes with a set of inbuilt modules/libraries that provide additional functionality. Some of the commonly used modules include:

- **`os`**: Provides functions for interacting with the operating system, such as directory manipulation, environment management, and file operations.
- **`regex`**: Provides support for regular expressions, allowing you to perform pattern matching and text manipulation.

> Currently, we only have `os` and `regex` modules. More modules will be added in the future.

## Conclusion

This is a brief overview of the NIKL programming language.
