const{test,expect} = require('@playwright/test')

test("My First Test",async function({page}){

expect(100).toBe(100)

})

test.skip("My Second Test",async function({page}){

    expect(50).toBe(51)

})

test.skip("My Third Test",async function({page}){

    expect(26.6).toBe(26.6)

})

test("My Fourth Test",async function({page}){

    expect("Megha Debnath").toContain("Megha")
    expect(true).toBeTruthy()
    expect("Megha Debnath".includes("Megha")).toBeFalsy()
})