import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServrUrl= environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServrUrl}/employee/all`);
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServrUrl}/employee/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServrUrl}/employee/update`, employee);
  }

  public deleteEmployee(employeeId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServrUrl}/employee/delete/${employeeId}`);
  }
}
