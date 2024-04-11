let Arry=[]

const Table_UI = () => 
{
   document.querySelector("#data_table").innerHTML = "";
   for(let i=0;i<Arry.length;i++)
   {
      let table = document.createElement("tr");
      let data_1 = document.createElement("td");

      data_1.innerHTML = Arry[i].Firstname;
     
      let data_2 = document.createElement("td");
      data_2.innerHTML = Arry[i].Lastname;

      let data_3 = document.createElement("td");
      data_3.innerHTML = Arry[i].GR_ID;

      let data_4 = document.createElement("td");
      data_4.innerHTML = Arry[i].Age;

      let data_5 = document.createElement("img");
      data_5.src = Arry[i].Image

      let data_6 = document.createElement("td");
      data_6.innerHTML = Arry[i].Select

      let delete_1 = document.createElement("td");
      delete_1.innerHTML ="Delete"
      delete_1.style.backgroundColor="red";    
      delete_1.style.textAlign="center";  
      delete_1.style.cursor="pointer";     
       delete_1.addEventListener("click",(e)=>
    {
       Arry.splice(i,1)
        Table_UI()
    })
      table.append(data_1,data_2,data_3,data_4,data_5,data_6,delete_1)
      document.querySelector("#data_table").append(table)

   }
}

const Table_Data = (e) =>
{
   e.preventDefault();

   let Firstname = document.querySelector("#firstname").value;
   let Lastname = document.querySelector("#lastname").value;
   let GR_ID = document.querySelector("#gr_id").value;
   let Age = document.querySelector("#age").value;
   let Image = document.querySelector("#image").value;
   let Select = document.querySelector("#select").value;

   let Table_Data_Obj = 
   {
      Firstname : Firstname,
      Lastname : Lastname,
      GR_ID : GR_ID,
      Age : Age,
      Image : Image,
      Select : Select
   };

   Arry.push(Table_Data_Obj);
   Table_UI()
}
const delete_all=()=>
{
    document.querySelector("#data_table").innerHTML="";
   Arry = []
}

document.querySelector("#table_data_store").addEventListener("submit",Table_Data)
document.querySelector("#delete").addEventListener("click",delete_all)
