// JavaScript for the survey form

// Get form element
const surveyForm = document.getElementById('surveyForm');

// Get popup and result elements
const popup = document.getElementById('popup');
const results = document.getElementById('results');
const closePopup = document.getElementById('closePopup');

// Submit button click event
surveyForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get all form fields
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const dob = document.getElementById('dob').value;
  const country = document.getElementById('country').value;
  const gender = document.querySelectorAll('input[name="gender"]:checked');
  const profession = document.getElementById('profession').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;

  // Check if all fields are filled
  if (!firstName || !lastName || !dob || !country || gender.length === 0 || !profession || !email || !mobile) {
    alert('Please fill in all fields.');
    return;
  }
  if (!/^\d{10}$/.test(mobile)) {
    alert('Mobile number must be a 10-digit number.');
    return;
  }

  // Check if email is valid
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Check if mobile number is not more than 10 digits
  if (mobile.length> 10 || mobile.length< 10) {
    alert('Mobile number should not be more than 10 digits.');
    return;
  }

  // Create an array of gender values
  const genderValues = Array.from(gender).map(input => input.value);

  // Prepare the results as an unordered list
  const resultText = document.createElement('ul');
  resultText.innerHTML = `
    <li><strong>First Name:</strong> ${firstName}</li>
    <li><strong>Last Name:</strong> ${lastName}</li>
    <li><strong>Date of Birth:</strong> ${dob}</li>
    <li><strong>Country:</strong> ${country}</li>
    <li><strong>Gender:</strong> ${genderValues.join(', ')}</li>
    <li><strong>Profession:</strong> ${profession}</li>
    <li><strong>Email:</strong> ${email}</li>
    <li><strong>Mobile Number:</strong> ${mobile}</li>
  `;

  // Clear any previous results and append the new results
  results.innerHTML = '';
  results.appendChild(resultText);

  // Show the popup
  popup.style.display = 'block';
});

// Reset button click event
document.getElementById('resetButton').addEventListener('click', function () {
  // Reset the form
  surveyForm.reset();
});

// Close popup click event
closePopup.addEventListener('click', function () {
  // Hide the popup and reset the form
  popup.style.display = 'none';
  surveyForm.reset();
});
