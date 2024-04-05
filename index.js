document.addEventListener('DOMContentLoaded', function () {

    const cardForm = document.getElementById('cardForm'); //for the input part

    const modal = document.getElementById('modal');//for the entire Certificate display

    const certificateContent = document.getElementById('certificateContent');// content inside the certificate

    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';//then we will recall it again to view the certificate 
  
    cardForm.addEventListener('submit', function (event) {
      event.preventDefault(); 
      certificateContent.innerHTML = ''; //This clears the previous inputs so that it dont duplicate,when the Dom runs again
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName'); //student Name inputed

      const personalMessageInput = document.getElementById('personalMessage');// The inputed message

      const courseNameInput = document.getElementById('courseName');// The inputed course Name
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      // const courseName = courseNameInput.value;

      const courseName = courseNameInput ? courseNameInput.value : alert("a course") ; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      
      }

      const containerDiv = document.createElement('div')
        const img = document.createElement('img');

        /*img.src ='./logo.png';
        containerDiv.appendChild(img);*/

        containerDiv.innerHTML = `<h1>Certificate Of Achievement</h1>
        <p>This is to certify that</p>
        <h3>${studentName}</h3>
        <p>Has almost completed the</p>
        <h3>${courseName}</h3>
        <p>With Legendary perseverance and world-class bad-assery for giving up 🏆</p>
        <div><img src="./logo.png"></div>
        <p>${personalMessage}</p>`;

        certificateContent.appendChild(containerDiv)
        
        
      
        //  Display the modal
        modal.style.display = 'block';
    
        // Clear the form inputs
        studentNameInput.value = '';
        personalMessageInput.value = '';
        if(courseNameInput) courseNameInput.value = '';

      //this function Displays The content of the Certificate
      

        // 🚨 Generate certificate content dynamically
        
     
     
    });

    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none';

      

    });
    
  });

 


  