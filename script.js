
const imgHome = document.querySelector('.img-home');
const loader = document.querySelector('.loader');
const rightSection = document.querySelector('.right-section');
const leftSection = document.querySelector('.left-section')
const leftContent = document.querySelector('.left-content')
const loaderImage = loader.querySelector('img'); // Select the image inside the loader
const loader2 = document.querySelector('.loader-2');

document.addEventListener('DOMContentLoaded', async function() {
    
    homeDisplay(); 
    animateLoader();
    setTimeout(() => {
        loginPage();
    }, 1000); 
});



// Function to display home content
const homeDisplay = () => {
    return new Promise((resolve) => {
        rightSection.style.display = 'none';
        setTimeout(() => {
            imgHome.classList.add('expand');
            imgHome.style.display = "block";  // Show the image first
            resolve();  
        }, 500);  
    });
};

// Function for login page animations
const loginPage = () => {
    return new Promise((resolve) => {
        // Show right and left sections
        rightSection.style.display = 'flex';
        leftSection.style.display = 'flex';
        imgHome.style.display = "none"; 
        // Add animations after a delay
        setTimeout(() => {
            document.querySelector('.container').classList.add('show-left');
            requestAnimationFrame(() => {
                leftSection.style.display = 'flex';
                leftSection.style.opacity = '1';
                rightSection.style.opacity = '1';
            });
        }, 2000);  // Delay before showing left/right sections
        
        // Show left content with a delay
        setTimeout(() => {
            leftContent.style.display = 'block';
        }, 4500);  // Adjust this delay based on your animation

        // Add click event listener to the login button
        const loginButton = document.getElementById('login-btn');
        loginButton.addEventListener('click', function() {
           
            const onlineID = document.querySelector('input[type="text"]').value;
            const password = document.getElementById('password').value;
        
            // Simple validation
            if (!onlineID || !password) {
                alert("Please fill in all fields.");
                return;
            }
            
            setTimeout(() => {
                loader_2();
                leftContent.style.display = 'none';
                document.querySelector('.container').classList.add('shrink-sections');
            }, 500);  // Delay before hiding left content
        });
     

        resolve();  // Resolve the promise after setting up the login page
    });
};



function animateLoader() {
    loader.style.transition = 'height 0.2s, width 0.2s'; // Set transition for growth
    loader.style.height = '100px';
    loader.style.width = '100px';

    setTimeout(() => {
        loaderImage.style.display = 'block'; // Change display to block
        requestAnimationFrame(() => {
            loaderImage.style.opacity = '1';  // Set opacity to 1

            // After the image opacity is fully set, start rotating the loader
            setTimeout(() => {
                loader.classList.add('rotate');  // Add the rotate class for rotation
            }, 500);  // Adjust delay if necessary
        });
    }, 1000); 

    setTimeout(() => {
        loader.style.transition = 'top 0.8s, left 0.8s'; // Set transition for moving
        loader.style.top = '10px';
        loader.style.left = '10px';

        // Step 4: After 0.2 seconds, set display to none
        setTimeout(() => {
            loader.style.display = 'none';
            loader.classList.remove('rotate');  // Remove the rotation class once done
        }, 800); // Delay before hiding loader
    }, 4500); // Move after 0.1 seconds
}




const loader_2 = () => {
    const loader2 = document.querySelector('.loader-2'); // Ensure this selector is correct

    // Add bounce-in class to show loader
    loader2.classList.add('bounce-in');
    
    // Wait for the animation to complete before hiding
    setTimeout(() => {
        loader2.classList.remove('bounce-in');
        
        loader2.classList.add('bounce-out');
        
        // Hide the loader after the bounce-out animation
        setTimeout(() => {
            loader2.style.display = 'none'; // Ensure it's hidden again
            loader2.classList.remove('bounce-out'); // Clean up
        }, 1000); // Match duration of bounce-out animation
    }, 2000); // Show loader for 1 second before bouncing out
}

   
