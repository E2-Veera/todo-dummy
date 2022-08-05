function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }

 
          let hods = [];
          
          const addHOD = (ev)=>{
              ev.preventDefault();  //to stop the form submitting
              let hod = {
                  firstName: document.getElementById('fname').value,
                  lastName: document.getElementById('lname').value
              }
              hods.push(hod);
              document.forms[0].reset(); // to clear the form for the next entries
              //document.querySelector('form').reset();
  
              //for display purposes only
              console.warn('added' , {hods} );
              let pre = document.querySelector('#msg pre');
             // pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);
  
              //saving to localStorage
              localStorage.setItem('MyClgHodList', JSON.stringify(hods) );
           //   sessionStorage.setItem('MyMovieList', JSON.stringify(movies) );
          }
          document.addEventListener('DOMContentLoaded', ()=>{
              document.getElementById('btn').addEventListener('click',addHOD);
          });
 