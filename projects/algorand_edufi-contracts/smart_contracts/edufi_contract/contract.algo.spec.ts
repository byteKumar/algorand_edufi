import { TestExecutionContext } from '@algorandfoundation/algorand-typescript-testing'
import { describe, expect, it } from 'vitest'
import { EdufiContract } from './contract.algo'

describe('EdufiContract contract', () => {
  const ctx = new TestExecutionContext()
  it('Logs the returned value when sayHello is called', () => {
    const contract = ctx.contract.create(EdufiContract)

    const result = contract.hello('Sally')

    expect(result).toBe('Hello, Sally')
  })
})
