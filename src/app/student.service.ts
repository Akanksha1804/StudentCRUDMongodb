import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from './model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) { }

  saveStudent(data : student){
    return this.http.post("https://crudnodejsmongoak.herokuapp.com/student ",data);
  }

  getAllStudents(){
    return this.http.get("https://crudnodejsmongoak.herokuapp.com/student");
  }

  getStudentByID(id:string){
    return this.http.get<student>(`https://crudnodejsmongoak.herokuapp.com/student/${id}`);
  }

  updateStudentByID(id:string,studentdata:student){
    console.log("op")
    console.log(studentdata)
    return this.http.put(`https://crudnodejsmongoak.herokuapp.com/student/${id}`,studentdata);
  }

  deleteUserById(id:string){
    return this.http.delete(`https://crudnodejsmongoak.herokuapp.com/student/${id}`)
  }
}
