const checkboxes = document.querySelectorAll(`.inbox input[type="checkbox"]`);

// This handles the strikethrough and faint color on the checked item
checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", handleChange)
);

function handleChange(e) {
  // Loop through the checkboxes and see if anyone is checked and add the classname added
  // Otherwise, remove it
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked == true) {
      checkbox.parentElement.classList.add("added");
    } else {
      checkbox.parentElement.classList.remove("added");
    }
  });
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
let lastChecked;
function handleCheck(e) {
  let inBetween = false;
  // console.log(e.ctrlKey);

  // Check if they have the shift key down
  // And also check if they are checking not unchecking
  if (e.shiftKey && this.checked) {
    // then loop over checkboxes again
    checkboxes.forEach((checkbox) => {
      //  Check if checkbox is what is currently checked or what was last checked
      if (checkbox === this || checkbox === lastChecked) {
        // let inBetween be the opposite of its current value
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}
