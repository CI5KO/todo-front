interface userProps {
  id: string
  name: string
  email: string
  password: string
}

export class localStorageRepository {
  private static userNotFound = JSON.stringify({ error: 'User not found' })

  public static get(key: string) {
    return JSON.parse(localStorage.getItem(key) || this.userNotFound)
  }

  public static post(key: string, user: userProps) {
    localStorage.setItem(key, JSON.stringify(user))
  }

  public static put(key: string, user: userProps) {
    localStorage.setItem(key, JSON.stringify(user))
  }

  public static delete(key: string) {
    localStorage.removeItem(key)
  }
}
