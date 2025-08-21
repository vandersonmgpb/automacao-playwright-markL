import { test, expect } from '@playwright/test'

test('deve poder cadastrar uma nova tarefa', async ({ page, request })=>{

    // Dado que eu tenho uma nova tarefa
    const taskName = 'Ler um livro de TypeScript'
    await request.delete('http://localhost:3333/helper/tasks/' + taskName)
 
    // E que estou na página de cadastro
    await page.goto('http://localhost:8080')
 
    // Quando faço o cadastro dessa tarefa
    const inputTaskName = page.locator('input[class*=InputNewTask]')
    await inputTaskName.fill('Ler um livro de TypeScript')
    // await page.fill('input[class*=InputNewTask]', 'Ler um livro de Typescript')  
    // await page.click('xpath=//button[contains(text(), "Create")]')
    await page.click('css=button >> text=Create')
 
    // Então essa tarefa deve ser exibida na lista





})