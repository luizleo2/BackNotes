const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory")
const AppError = require("../utils/AppError")
const UserCreateService = require("./UserCreateService")

describe("UserCreateService", () => {
  let userRepository = null
  let userCreateService = null

  beforeEach(() => {
    userRepository = new UserRepositoryInMemory()
    userCreateService = new UserCreateService(userRepository)
  })

  it("user should be create", async () => {
    const user = {
      name: "User test",
      email: "user@test.com",
      password: "123",
    }

    const userCreated = await userCreateService.execute(user)

    expect(userCreated).toHaveProperty("id")
  })

  it("user not should be create with exists email ", async () => {
    const user1 = {
      name: "User test 1",
      email: "user@test.com",
      password: "123",
    }
    const user2 = {
      name: "User test 2",
      email: "user@test.com",
      password: "123",
    }

    await userCreateService.execute(user1)
    await expect(userCreateService.execute(user2)).rejects.toEqual(
      new AppError("Este e-mail já está em uso!")
    )
  })
})
