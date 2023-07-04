
let name = document.getElementById("name");
let email = document.getElementById("email");
let gpa = document.getElementById("gpa");
let age = document.getElementById("age");
let degree = document.getElementById("degree");
let add = document.getElementById("btnAdd");
let id = 3;
var delete1;
var edit1;
let search = document.getElementById("search");
var editCount;

let students = [  { ID: 1, name: 'Alice', age: 21, grade: 'A', degree: 'Btech', email: 'alice@example.com' }, 
{ ID: 2, name: 'Bob', age: 22, grade: 'B', degree: 'MBA', email: 'bob@example.com' }, 
{ ID: 3, name: 'Charlie', age: 20, grade: 'C', degree:'Arts', email: 'charlie@example.com' } ];

studentsData();

function studentsData(){
    const table = document.getElementById("table");
    table.innerHTML = `  <tr>
    <th>Id</th>
    <th>Student Name</th>
    <th>Email</th>
    <th>Age</th>
    <th>GPA</th>
    <th>Degree</th>
</tr>`;
    students.forEach(function(e,i){
        const table = document.getElementById("table");
        let tr = document.createElement("tr");
        tr.innerHTML = ` <th>${e.ID}</th>
        <th>${e.name}</th>
                        <th>${e.email}</th>
                        <th>${e.age}</th>
                        <th>${e.grade}</th>
                        <th class="degree"><div>${e.degree}</div> <div>
                        <img src="./Images/icons/edit 1.png" alt="Edit" class="edit">
                        <img src="./Images/icons/trash-2 1.png" alt="Delete" class="delete"></div></th>`
                        table.appendChild(tr);
    
                        delete1 = document.getElementsByClassName("delete")[i];
                        delete1.addEventListener("click",function(){
                            table.removeChild(tr);
                            students.pop(students[i]);
                        })

                        edit1 = document.getElementsByClassName("edit")[i];
                        edit1.addEventListener("click",function(){
                            
                            name.value = tr.children[1].innerText;
                            email.value = tr.children[2].innerText;
                            age.value = tr.children[3].innerText;
                            gpa.value = tr.children[4].innerText;
                            degree.value = tr.children[5].innerText;
                            
                            add.style.backgroundColor = "#111111";
                            add.style.color = "white";
                            add.innerText = "Edit Student";

                            editCount = i;
                            // (tr.children).forEach(function(e){
                            //     console.log(e.ID)
                            // })
                        })

                    })
                }
    add.addEventListener("click",function(e){
        
        const table = document.getElementById("table");
        table.innerHTML = `  <tr>
        <th>Id</th>
        <th>Student Name</th>
        <th>Email</th>
        <th>Age</th>
        <th>GPA</th>
        <th>Degree</th>
        </tr>`;
        if(add.innerText === "Add Student"){
            if(name.value!=="" && email.value!=="" && age.value!=="" && gpa.value!=="" && degree.value!==""){
                console.log("hello")
                students.push({ ID: id, name: name.value, age: age.value, grade: gpa.value, degree: degree.value, email: email.value });
            }else{
                alert("Fill All Inputs");
            }
            studentsData();
            
    }
    if(add.innerText === "Edit Student" ){
        students[editCount].name =   name.value;
        students[editCount].email =  email.value;
        students[editCount].age =    age.value;
        students[editCount].grade =  gpa.value;
        students[editCount].degree = degree.value;
        
        studentsData();
        
        e.target.style.backgroundColor = "white";
        e.target.style.color = "black";
        e.target.innerText = "Add Student";

        
    }
    name.value   = "";
    email.value  = "";
    age.value    = "";
    gpa.value    = "";
    degree.value = "";
})

search.addEventListener("keyup",function(e){
    let searchedValue = e.target.value;
    
    let filteredStudent = students.filter(function(e){
        if(e.name.toLowerCase().includes(searchedValue.toLowerCase()) || e.email.toLowerCase().includes(searchedValue.toLowerCase()) || e.degree.toLowerCase().includes(searchedValue.toLowerCase())){
                return true;
            }
            return false;
    })
    const table = document.getElementById("table");
    table.innerHTML = `  <tr>
    <th>Id</th>
    <th>Student Name</th>
    <th>Email</th>
    <th>Age</th>
    <th>GPA</th>
    <th>Degree</th>
</tr>`;
    filteredStudent.forEach(function(e,i){
        const table = document.getElementById("table");
        let tr = document.createElement("tr");
        tr.innerHTML = ` <th>${e.ID}</th>
        <th>${e.name}</th>
                        <th>${e.email}</th>
                        <th>${e.age}</th>
                        <th>${e.grade}</th>
                        <th class="degree"><div>${e.degree}</div> <div>
                        <img src="./Images/icons/edit 1.png" alt="Edit">
                        <img src="./Images/icons/trash-2 1.png" alt="Delete" class="delete"></div></th>`
                        table.appendChild(tr);
    
                        delete1 = document.getElementsByClassName("delete")[i];
                        delete1.addEventListener("click",function(){
                            table.removeChild(tr);
                            students.pop(students[i]);
                        })
                    })
})

