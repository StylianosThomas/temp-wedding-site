// Toggle between English and Greek language
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".btn-outline-secondary").addEventListener("click", toggleLanguage);
});

let isEnglish = true;

function toggleLanguage() {
    console.log("toggleLanguage triggered"); // Add this line for testing
    isEnglish = !isEnglish;

    const navLinks = document.querySelectorAll(".nav-links li a");
    navLinks[0].textContent = isEnglish ? "Home" : "Αρχικη";
    navLinks[1].textContent = isEnglish ? "Information" : "Πληροφοριες";
    navLinks[2].textContent = isEnglish ? "RSVP" : "Κρατηση";

    // Update section headers and placeholder text
    document.querySelector('#home h1').textContent = isEnglish ? "Welcome to My Website" : "Καλώς ήρθατε στην Ιστοσελίδα Μου";
    document.querySelector('#home p').textContent = isEnglish ? "This is a placeholder for the banner text." : "Αυτό είναι ένα κείμενο θέσης για το banner.";
    document.querySelector('#info h2').textContent = isEnglish ? "About Us" : "Σχετικά με Εμάς";
    document.querySelector('#info p').textContent = isEnglish ? "This is some placeholder text for the information section. Add more details here." : "Αυτό είναι ένα κείμενο θέσης για την ενότητα πληροφοριών. Προσθέστε περισσότερες λεπτομέρειες εδώ.";
    document.querySelector('#rsvp h2').textContent = isEnglish ? "Contact Us" : "Επικοινωνήστε μαζί μας";
    document.querySelector('#rsvp label[for="name"]').textContent = isEnglish ? "Name" : "Όνομα";
    document.querySelector('#rsvp label[for="email"]').textContent = isEnglish ? "Email" : "Ηλεκτρονικό Ταχυδρομείο";
    document.querySelector('#rsvp label[for="message"]').textContent = isEnglish ? "Message" : "Μήνυμα";
    document.querySelector('#rsvp button').textContent = isEnglish ? "Submit" : "Υποβολή";
}