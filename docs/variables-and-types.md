# Variables and Types

This guide covers the basics of declaring variables and the fundamental data types in the NIKL language.

## Variables

In NIKL, you declare variables using the `let` keyword. Once declared, a variable's value can be changed.

```rust
// Declare a variable 'message' and assign it a value
let message = "This is a message.";

// Change the value of the variable
message = "This is a new message.";

print(message); // Output: This is a new message.
