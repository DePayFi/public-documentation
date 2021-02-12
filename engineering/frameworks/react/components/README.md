# React Components

> Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and returns HTML via a render function. Components come in two types, Class components and Function components, in this tutorial we will concentrate on Class components.

## File Names

We name files in react camel case with upper case initial.

E.g. `DialogProvider.ts`, `DialogContext.ts`, `Dialog.ts` and so on.

## React Component Structure

### Component

The component itself. Stored in `/components`.

### Contexts

> Contexts provide a way to pass data through the component tree without having to pass props down manually at every level.

https://reactjs.org/docs/context.html

Stored in `/contexts`.

Example:

`contexts/SomeContext.ts`
```js
import React from 'react'
export default React.createContext()
```

Contexts are often initialized and maintained in providers.

### Providers

> Makes contexts available to any nested componentsm maintains and updates the context values.

Stored in `/providers`.

`providers/SomeProvider.ts`
```js
import SomeContext from '../contexts/SomeContext'

render() {
  return(
    <SomeContext.Provider value={{
      someValue: this.props.someValue
    }}>
      { this.props.children }
    </SomeContext.Provider>
  )
}
```

Use those providers and contexts in components: 

`components/SomeComponent.ts`
```js
import SomeProvider from '../providers/SomeProvider'
import SomeContext from '../providers/SomeContext'

render() {
  return(
    render() {
    return (
      <SomeProvider>
        <SomeContext.Consumer>
          { someContext => (
            <h1>{ someContext.someValue }</h1>
          ) }
        </SomeContext.Consumer>
      </SomeProvider>
    )
  )
}
```
