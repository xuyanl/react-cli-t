declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'

type CSSModuleClasses = { readonly [key: string]: string }
declare module '*.css' {
    const classes: CSSModuleClasses
    export default classes
}
declare module '*.scss' {
    const classes: CSSModuleClasses
    export default classes
}
declare module '*.sass' {
    const classes: CSSModuleClasses
    export default classes
}
declare module '*.less' {
    const classes: CSSModuleClasses
    export default classes
}
declare module '*.styl' {
    const classes: CSSModuleClasses
    export default classes
}
declare module '*.stylus' {
    const classes: CSSModuleClasses
    export default classes
}
