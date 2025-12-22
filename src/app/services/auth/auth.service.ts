import { computed, Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  _isAuthenticated =  signal<boolean>(false)

  public isAuthenticated =  computed(() =>  this._isAuthenticated())

  login(password: string): boolean{
    if(password === "123456780"){
      this._isAuthenticated.set(true)
      localStorage.setItem('token','true')
      return true
    }
    return false
  }

  logOut(){
    this._isAuthenticated.set(false)
    localStorage.removeItem('token')
  }

  checkoutStatus(){
    let token =  localStorage.getItem('token')
    this._isAuthenticated.set(!!token)
  }


}
