export function add(){
    console.log('add')
}


export async function waitHelloAsync(){
    return Promise.resolve('hello')
}


export  function waitHello(){
    return 'hello'
}