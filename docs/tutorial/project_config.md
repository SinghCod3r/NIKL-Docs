---
id: 2
title: Project Configuration Reference
sidebar_label: Project Config
---

# `config.json` Reference

This document describes the fields available in the `config.json` file used by Nikl projects. This configuration file provides metadata about the project, such as its name, version, type, authors, dependencies, and more.

## Example

```json
{
    "name": "example-project",
    "displayName": "Example Project",
    "version": "1.0.0",
    "description": "An example project to demonstrate the use of a configuration file.",
    "authors": [
        {
            "name": "Neko Nik",
            "email": "admin@nekonik.com"
        }
    ],
    "license": "MIT",
    "readmeFile": "README.md",
    "licenseFile": "LICENSE",
    "repository": "https://github.com/Neko-Nik-Org/NIKL-Core",
    "homepage": "https://nekonik.com",
    "dependencies": {
        "os": "0.0.1",
        "regex": "1.0.0"
    },
    "keywords": [
        "example",
        "project",
        "configuration"
    ]
}
````

## Fields

### `name`

* **Type**: `string`
* **Required**: ✅
* **Description**: Unique identifier for the project. Should match the filename in `src/<name>.nk`.

### `displayName`

* **Type**: `string`
* **Required**: ✅
* **Description**: Human-readable name of the project.

### `version`

* **Type**: `string`
* **Required**: ✅
* **Format**: [Semantic Versioning](https://semver.org/) (e.g., `1.0.0`)
* **Description**: Project version.

### `description`

* **Type**: `string`
* **Description**: A short summary of what the project does.

### `authors`

* **Type**: `Array<{ name: string, email: string }>`
* **Description**: A list of project authors with contact information.

### `license`

* **Type**: `string`
* **Description**: The license under which the project is distributed (e.g., `MIT`, `Apache-2.0`).

### `licenseFile`

* **Type**: `string`
* **Default**: `"LICENSE"`
* **Description**: Path to the license file for the project.

### `readmeFile`

* **Type**: `string`
* **Default**: `"README.md"`
* **Description**: Path to the README file for the project.

### `repository`

* **Type**: `string`
* **Description**: URL of the project's source code repository.

### `homepage`

* **Type**: `string`
* **Description**: URL of the project's homepage.

### `dependencies`

* **Type**: `object`
* **Required**: ✅
* **Description**: Key-value pairs of dependency names and their versions.

### `keywords`

* **Type**: `string[]`
* **Required**: ✅
* **Description**: A list of keywords associated with the project.
