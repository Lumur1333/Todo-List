  //global variables
  let AddB = document.getElementById('toDoListButton');
  let input = document.getElementById('toDo');

  //this connects the clicking of the button to the function
  AddB.onclick = AddToList;

  function AddToList(e) {
      e.preventDefault();
      //Variables for the function
      let li = document.createElement('li');
      let inputValue = input.value;
      let text = document.createTextNode(inputValue);

      li.appendChild(text);
      //This just checks to see if the input box is blank or not and if it is sends an alert to the user to tell them to enter info, if it has content it continues on with the function.
      if (inputValue === '') {
          alert('Todo lists should have items....');
      } else {
          //variables inside of the if statement
          let input = document.createElement('input');
          let deletee = document.createElement('button');

          //creation of the checkbox and delete button
          //setting of id's and classes so I could use CSS to target them more easily
          document.getElementById('list').appendChild(li);
          input.setAttribute('type', 'checkbox');
          input.setAttribute('class', 'check')
          deletee.setAttribute('id', 'd');

          deletee.textContent = 'delete';
          li.appendChild(input);
          li.appendChild(deletee);

          //this is the button click event for the delete button and uses the beGone function I made below
          deletee.onclick = beGone;

          //event listener that is listening for a click on the checkbox which then runs the checking function below
          input.addEventListener('click', checking);
      }
      document.getElementById('toDo').value = '';

  }

  //This function checks to see if the checkbox has been checked or not and if it has strikes out the text in the list for that item.
  //I was trying to get this function to remove the strike out when the checkbox was clicked again but I couldn't get it to, if you get a chance could you please give me a hint on this. thank you!
  function checking(e) {
      let closeLi = e.target.closest('li');
      if (document.getElementsByClassName('check') !== null) {
          closeLi.style.textDecoration = 'line-through';
          input.setAttribute('class', 'uncheck');

          let pare = e.target.closest('ul');
          pare.appendChild(closeLi.parentElement);
      } else if (document.getElementsByClassName('uncheck') === null) {
          closeLi.parentNode.style.textDecoration = 'none';

          let pare = closeLi.parentElement.parentElement;
          pare.insertBefore(closeLi.parentElement, parent.firstChild);
      }
  }

  //This function targets the closest Li and removes it from the DOM
  function beGone(e) {
      let closeLi = e.target.closest('li');
      closeLi.remove();
  }