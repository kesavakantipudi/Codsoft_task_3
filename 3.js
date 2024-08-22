let string = "";
    let buttons = document.querySelectorAll('.button');
    Array.from(buttons).forEach((button) => {
      button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === '=') {
          // Evaluate the string and update the display
          try {
            string = eval(string);
            document.querySelector('input').value = string;
          } catch {
            document.querySelector('input').value = "Error";
          }
        } else if (buttonValue === 'AC') {
          // Clear the input string
          string = "";
          document.querySelector('input').value = string;
        } else {
          // Append the button value to the string
          string += buttonValue;
          document.querySelector('input').value = string;
        }
      });
    });